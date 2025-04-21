import { useEffect, useRef, useState } from "react";
import axios from "axios";

const OTP_COUNT = 6;

export default function Home() {
  const [inputArr, setInputArr] = useState(new Array(OTP_COUNT).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invalidInputs, setInvalidInputs] = useState(
    new Array(OTP_COUNT).fill(false)
  );
  const refArr = useRef([]);

  useEffect(() => {
    refArr?.current[0]?.focus();
  }, []);

  const handleOnchange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();

    // Reset errors when user types
    setError("");
    const newInvalidInputs = [...invalidInputs];
    newInvalidInputs[index] = false;
    setInvalidInputs(newInvalidInputs);
  };

  const handleOnkeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Filter only numbers from the pasted content
    const pastedNumbers = pastedData.replace(/[^0-9]/g, "");

    if (!pastedNumbers) return;

    const newArr = [...inputArr];

    // Fill the inputs with pasted digits
    for (let i = 0; i < OTP_COUNT; i++) {
      const pasteIndex = i + index;
      if (pasteIndex < OTP_COUNT && i < pastedNumbers.length) {
        newArr[pasteIndex] = pastedNumbers[i];
      }
    }

    setInputArr(newArr);

    // Reset invalid inputs
    setInvalidInputs(new Array(OTP_COUNT).fill(false));

    // Focus on the appropriate input after pasting
    const nextFocusIndex = Math.min(
      index + pastedNumbers.length,
      OTP_COUNT - 1
    );
    setTimeout(() => {
      refArr.current[nextFocusIndex]?.focus();
    }, 0);
  };

  const validateForm = () => {
    const newInvalidInputs = [...invalidInputs];
    let isValid = true;

    // Check for empty inputs
    for (let i = 0; i < OTP_COUNT; i++) {
      if (inputArr[i] === "") {
        newInvalidInputs[i] = true;
        isValid = false;
      }
    }

    setInvalidInputs(newInvalidInputs);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setError("Please fill all digits");
      return;
    }

    setLoading(true);
    setError("");

    // Concatenate all digits to form the OTP
    const otp = inputArr.join("");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/otp/verify",
        {
          otp,
        }
      );

      if (response.data.success) {
        // Redirect to success route
        window.location.href = "/success";
      }
    } catch (error) {
      // Display the error message from the server
      if (error.response && error.response.data) {
        setError(error.response.data.error || "Verification Error");
      } else {
        setError("Verification Error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 py-6">
      <div className="w-full max-w-md p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-center">
            Verification code:
          </h2>

          <div className="flex justify-center mb-6">
            {inputArr.map((input, index) => {
              return (
                <input
                  value={inputArr[index]}
                  className={`h-8 w-8 text-xl xs:h-9 xs:w-9 xs:text-2xl sm:h-12 sm:w-12 sm:text-4xl text-center mx-1 border ${
                    invalidInputs[index]
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  } rounded focus:outline-none focus:border-indigo-600 caret-indigo-600`}
                  type="text"
                  key={index}
                  ref={(input) => (refArr.current[index] = input)}
                  onChange={(e) => handleOnchange(e.target.value, index)}
                  onKeyDown={(e) => handleOnkeyDown(e, index)}
                  onPaste={(e) => handlePaste(e, index)}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                />
              );
            })}
          </div>

          {error && (
            <div className="text-red-500 mb-4 text-center text-sm sm:text-base">
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded cursor-pointer py-2 px-4 bg-indigo-900  sm:w-32 text-white uppercase font-medium tracking-wider hover:bg-indigo-800 disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? "Verifying..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
