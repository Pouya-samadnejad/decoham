import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Link from "next/link";
export default function SocialMedia() {
  return (
    <div class="mb-4">
      <ul class="flex gap-3">
        <li class="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaInstagram class="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
        <li class="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaTelegram class="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
        <li class="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaWhatsapp class="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
        <li class="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaYoutube class="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
