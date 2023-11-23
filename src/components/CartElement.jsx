import { RiDeleteBin6Line } from "react-icons/ri";
import { QTY, SIZES } from "../constants";
import { Select } from "./Select";

export const CartElement = ({ item }) => {
  return (
    <div className="flex justify-evenly p-4 hover:bg-[#DAFFA2] bg-gray-50 cursor-pointer dark:mb-4 dark:text-white dark:bg-night dark:hover:bg-night-50 dark:hover:text-white">
      <img className="h-20 w-20" src={item.src} />
      <div className="w-[50%]">
        <div className="font-extrabold">{item.title}</div>
        <div className="text-slate-500">{item.description}</div>
        <div className="flex space-x-6 mt-4">
          <div>
            <div className="font-bold">QTY</div>
            <Select title={"1"} options={QTY} className={"w-16 p-2"} />
          </div>
          <div>
            <div className="font-bold">SIZE</div>
            <Select title={"43"} options={SIZES} className={"w-16 p-2"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        {item.price + " $"}
        <div className="pb-5">
          <RiDeleteBin6Line />
        </div>
      </div>
    </div>
  );
};
