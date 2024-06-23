import Image from "next/image";
import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <div class="w-full mt-20">
      <div class="bg-[#ffcc00] flex flex-col justify-center items-center ">
        <div class="bg-black w-[200px] h-[100px] p-[15px] flex flex-col justify-center items-center mb-4 mt-[-45px]">
          <Image
            src="/decohamlogo.png"
            width={200}
            height={50}
            alt="decoham logo on footer"
          />
        </div>

        <SocialMedia />
      </div>
      <div class="bg-black w-full text-white text-center py-4 text-[12px] font-light">
        <p>© تمام حقوق مادی و معنوی این سایت متعلق به گروه دکوهام است</p>
      </div>
    </div>
  );
}
