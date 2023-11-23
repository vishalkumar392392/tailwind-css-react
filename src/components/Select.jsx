import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";
export const Select = ({ title, options, className }) => {
  return (
    <div className="relative">
      <select
        defaultValue=""
        className={twMerge(
          `w-24 appearance-none border border-gray-300 p-4 dark:text-black ${className}`
        )}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none flex-center absolute inset-y-0 right-0 pr-3 dark:text-black">
        <IoIosArrowDown />
      </div>
    </div>
  );
};
