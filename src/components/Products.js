import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Products() {
  return (
    <div className="lg:flex items-center justify-center my-8 w-4/5 mx-auto ">
      <div className="bg-black h-24  hover:scale-110 transition-all duration-300">
        <div className="flex justify-center w-full h-full mx-auto px-20 ">
          <Link href="#" className="flex items-center justify-center  ">
            <IoIosArrowBack className=" text-3xl bg-[#ffcc00]" />
            <p className="font-semibold pr-2 text-white text-3xl">کابینت</p>
          </Link>
        </div>
      </div>
      <div className="bg-[#ffcc00] h-24  hover:scale-110 transition-all duration-300">
        <div className="flex justify-center w-full h-full px-24 ">
          <Link href="#" className="flex items-center justify-center  ">
            <IoIosArrowBack className=" text-3xl bg-black text-[#ffcc00]" />
            <p className="font-semibold pr-2 text-black text-3xl">کمد چوبی</p>
          </Link>
        </div>
      </div>
      <div className="bg-[#ffde59] h-24 hover:scale-110 transition-all duration-300">
        <div className="flex justify-center w-full h-full px-24 ">
          <Link href="#" className="flex items-center justify-center  ">
            <IoIosArrowBack className=" text-3xl bg-black text-[#ffcc00]" />
            <p className="font-semibold pr-2 text-black text-3xl">کناف</p>
          </Link>
        </div>
      </div>
      <div className="bg-[#ffe57d] h-24  hover:scale-110 transition-all duration-300">
        <div className="flex justify-center w-full h-full px-24 ">
          <Link href="#" className="flex items-center justify-center  ">
            <IoIosArrowBack className=" text-3xl bg-black text-[#ffcc00]" />
            <p className="font-semibold pr-2 text-black text-3xl">درب</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
