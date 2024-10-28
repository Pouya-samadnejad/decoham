"use client";

import Image from "next/image";
import Link from "next/link";
import NavMobile from "./NavMobile";
import HamburgerButton from "./HamburgerButton";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  function handleMenu() {
    setOpen((open) => !open);
    console.log(open);
  }
  return (
    <div>
      <div className=" flex justify-between px-4 items-center bg-zinc-950/50  fixed z-100 backdrop-blur-xl w-full border-b border-[#363838] ">
        <Link href="/">
          <Image
            src="/decohamlogo.png"
            width={200}
            height={50}
            alt="decoham logo"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-5 py-3 text-white font-semibold ">
            <li className="hover:text-[#ffcc00] transition-all delay-200">
              <Link href="/contactus">تماس بام ما</Link>
            </li>
            <li className="hover:text-[#ffcc00] transition-all delay-200">
              <Link href="#">خدمات</Link>
            </li>
            <li className="hover:text-[#ffcc00] transition-all delay-200">
              <Link href="#">محصولات</Link>
            </li>
            <li className="hover:text-[#ffcc00] transition-all delay-200">
              <Link href="#">پروژه ها</Link>
            </li>

            <li className="hover:text-[#ffcc00] transition-all delay-200">
              <Link href="#">وبلاگ</Link>
            </li>
          </ul>
        </nav>
        <HamburgerButton click={handleMenu} />
      </div>
      {open ? <NavMobile click={handleMenu} /> : null}
    </div>
  );
}
