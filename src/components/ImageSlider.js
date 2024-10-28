"use client";
import slide1 from "@/assets/slide1.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide4.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImg((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex relatve z-0 overflow-hidden mx-auto  w-full transition-all ease-out duration-500">
        <FaArrowRight
          className="hidden  lg:block absolute h-10 w-10 text-white top-[50%] right-8 cursor-pointer lg:z-1	"
          onClick={prevImgHandle}
        />
        <div className="pb-9 transition-all ease-out duration-500 mx-auto ">
          {images.map((image, index) => (
            <Image
              src={image.image}
              alt={image.alt}
              key={index}
              className={
                indexImg === index
                  ? "transition-all ease-out duration-500"
                  : "hidden"
              }
            />
          ))}
          <div className="flex justify-center mx-auto -mt-5 w-4 h-4 pb-4 cursor-pointer transition-all ease-out duration-500 ">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setIndexImg(idx)}
                className="transition-all ease-out duration-500"
              >
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
          className=" hidden h-10 w-10 text-white  top-[50%] left-8 cursor-pointer transition-all ease-out duration-500 lg:block absolute z-1 "
          onClick={nextImgHandle}
        />
      </div>
    </>
  );
}
