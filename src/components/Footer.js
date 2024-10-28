import Image from "next/image";
import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <div className="w-full mt-20">
      <div className="bg-[#ffcc00] flex flex-col justify-center items-center ">
        <div className="bg-black w-52 h-24 p-4 flex flex-col justify-center items-center mb-4 -mt-11">
          <Image
            src="/decohamlogo.png"
            width={200}
            height={50}
            alt="decoham logo on footer"
          />
        </div>

        <SocialMedia />
      </div>
      <div className="bg-black w-full text-white text-center py-4 text-xs font-light">
        <p>© تمام حقوق مادی و معنوی این سایت متعلق به گروه دکوهام است</p>
      </div>
    </div>
  );
}
