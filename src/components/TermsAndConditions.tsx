import { useState } from "react";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="grid gap-4 place-items-start border border-white rounded-md p-8">
      <div>
        <h2 className="font-semibold text-gray-400">Terms and Conditions</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          accusamus asperiores sint obcaecati expedita doloribus inventore.
          Reprehenderit, itaque! Quidem, tenetur.
        </p>
      </div>
      <div>
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="ml-2">I agree to the terms and conditions</span>
        </label>
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-700 disabled:bg-slate-400 font-semibold text-black rounded-md px-4 py-1.5 transition-colors duration-300 ease-in-out"
        disabled={!isChecked}
      >
        Submit
      </button>
    </div>
  );
};

export default TermsAndConditions;
