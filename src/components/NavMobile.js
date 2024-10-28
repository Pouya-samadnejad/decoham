import Link from "next/link";
import { MdClose } from "react-icons/md";

export default function NavMobile({ click }) {
  return (
    <>
      <button
        className="p-2 border-2 hover:bg-[#ffcc00] transition-all z-40  lg:hidden absolute top-2 right-2 "
        onClick={click}
      >
        <MdClose className="text-xl text-white hover:text-black transition-all" />
      </button>
      <nav
        className="flex z-30 w-full h-screen bg-zinc-950/70 items-center justify-center backdrop-blur-xl lg:hidden absolute overflow-y-hidden transition-all	 "
        onClick={click}
      >
        <ul className="text-white text-3xl ">
          <li className="pb-4 hover:text-[#ffcc00] transition-all">
            <Link href="/contactus">تماس بام ما</Link>
          </li>
          <li className="pb-4 hover:text-[#ffcc00] transition-all">
            <Link href="#">خدمات</Link>
          </li>
          <li className="pb-4 hover:text-[#ffcc00] transition-all">
            <Link href="#">محصولات</Link>
          </li>
          <li className="pb-4 hover:text-[#ffcc00] transition-all">
            <Link href="#">پروژه ها</Link>
          </li>

          <li className="pb-4 hover:text-[#ffcc00] transition-all ">
            <Link href="#" className="">
              وبلاگ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
