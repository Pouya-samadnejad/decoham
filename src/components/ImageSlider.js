"use client";
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide4.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

import Image from "next/image";
import { useState } from "react";

export default function ImageSlider() {
  const images = [
    { image: slide1, alt: "decoham interior design" },
    { image: slide2, alt: "decoham slide2" },
    { image: slide3, alt: "decoham slid3" },
  ];
  const [indexImg, setIndexImg] = useState(0);
  function nextImgHandle() {
    setIndexImg(indexImg === images.length - 1 ? 0 : indexImg + 1);
  }

  function prevImgHandle() {
    setIndexImg(indexImg === 0 ? images.length - 1 : indexImg - 1);
  }

  return (
    <>
      <div className="flex relatve z-0 overflow-hidden mx-auto  w-full ">
        <FaArrowRight
          className="h-[40px] w-[40px] text-white absolute top-[50%] right-8 cursor-pointer z-1	"
          onClick={prevImgHandle}
        />
        <div className="pb-[35px] transition-all duration-500 mx-auto ">
          {images.map((image, index) => (
            <Image
              src={image.image}
              alt={image.alt}
              key={index}
              className={indexImg === index ? "" : "hidden"}
            />
          ))}
          <div className="flex justify-center mx-auto mt-[-20px] w-4 h-4 pb-4 cursor-pointer ">
            {images.map((_, idx) => (
              <div key={idx} onClick={() => setIndexImg(idx)}>
                {idx === indexImg ? (
                  <FaDotCircle className="text-white" />
                ) : (
                  <FaRegDotCircle className="text-white" />
                )}
              </div>
            ))}
          </div>
        </div>
        <FaArrowLeft
          className="h-[40px] w-[40px] text-white absolute top-[50%] left-8 cursor-pointer	"
          onClick={nextImgHandle}
        />
      </div>
    </>
  );
}
