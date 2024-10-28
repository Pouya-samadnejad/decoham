import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Link from "next/link";
export default function SocialMedia() {
  return (
    <div className="mb-4">
      <ul className="flex gap-3">
        <li className="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaInstagram className="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
        <li className="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaTelegram className="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
        <li className="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaWhatsapp className="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
        <li className="w-[40px] h-[40px] bg-black">
          <Link href="#">
            <FaYoutube className="text-white w-full h-full p-2 hover:text-black hover:bg-white transition-all delay-200" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
