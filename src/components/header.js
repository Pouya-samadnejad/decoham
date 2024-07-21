import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div class="flex justify-between px-4 items-center bg-zinc-950/50  fixed z-100 backdrop-blur-xl w-full border-b border-[#363838]">
      <Link href="/">
        <Image
          src="/decohamlogo.png"
          width={200}
          height={50}
          alt="decoham logo"
        />
      </Link>
      <main>
        <ul class="flex gap-5 py-3 text-white font-semibold ">
          <li class="hover:text-[#ffcc00] transition-all delay-200">
            <Link href="#">خدمات</Link>
          </li>
          <li class="hover:text-[#ffcc00] transition-all delay-200">
            <Link href="#">محصولات</Link>
          </li>
          <li class="hover:text-[#ffcc00] transition-all delay-200">
            <Link href="#">پروژه ها</Link>
          </li>
          <li class="hover:text-[#ffcc00] transition-all delay-200">
            <Link href="/contactus">تماس بام ما</Link>
          </li>
          <li class="hover:text-[#ffcc00] transition-all delay-200">
            <Link href="#">وبلاگ</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
