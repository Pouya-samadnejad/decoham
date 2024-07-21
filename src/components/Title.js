import { Children } from "react";

export default function Title({ children }) {
  return (
    <div className="flex items-center pt-8 ">
      <div className="w-[200px] h-[3px] bg-[#ffcc00]"></div>
      <h2 className="text-black text-4xl font-semibold pr-4">{children}</h2>
    </div>
  );
}
