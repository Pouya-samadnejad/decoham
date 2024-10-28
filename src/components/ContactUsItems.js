import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactUsIcon from "./ContactUsIcon";
const items = [
  {
    title: "ایمیل",
    text: "info@decoham.com",
    icon: (
      <IoMdMail className="w-16 h-16 p-3 hover:text-[#ffcc00] transition-all delay-200" />
    ),
  },
  {
    title: "شماره تماس",
    text: "09001056040",
    icon: (
      <FaPhone className="w-16 h-16 p-3 hover:text-[#ffcc00] transition-all delay-200" />
    ),
  },
  {
    title: "آدرس",
    text: "تهران، سیاهسنگ کوچه دانش نه ‌کوهستان دوم",
    icon: (
      <FaLocationDot className="w-16 h-16 p-3 hover:text-[#ffcc00] transition-all delay-200" />
    ),
  },
];

export default function ContactUsItems() {
  return (
    <div className="px-14 lg:flex justify-between py-14">
      {items.map((item) => (
        <ContactUsIcon key={item.title} {...item} />
      ))}
    </div>
  );
}
