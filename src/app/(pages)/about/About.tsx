import React from "react";
import Image from "next/image";
import img1 from "../../assets/image/about/about-img-1.png";
import img2 from "../../assets/image/about/about-img-2.png";
import img3 from "../../assets/image/about/about-img-3.png";
import img4 from "../../assets/image/about/about-img-4.png";
import img5 from "../../assets/image/about/about-img-5.png";

export default function About() {
  return (
    <div className="about py-9 px-40">
      <div className="xl:grid gap-2 grid-cols-3">
        <div className="flex-col xl:col-span-1 flex pr-2 pb-2">
          <h1 className="font-bold text-3xl mb-3">About Us</h1>
          <p className="text-gray-600 font-thin text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="xl:col-span-2 flex item-center justify-center">
          <Image
            src={img1}
            alt="3in1"
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-10">
        <div className="w-full flex-col justify-center flex mr-10">
          <h1 className="font-bold text-3xl mb-3">Our Story</h1>
          <p className="text-gray-600 font-thin text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className=" shadow-md  grid grid-cols-4 justify-between items-center">
          <div className="flex flex-col justify-center items-center p-2">
            <Image src={img2} alt="1in1" priority={true} />
            <p className="text-xl my-2">Alexa</p>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <Image src={img3} alt="1in1" priority={true} />
            <p className="text-xl my-2">Olivia</p>
          </div>
          <div className="flex flex-col justify-center items-center p-2 ">
            <Image src={img4} alt="1in1" priority={true} />
            <p className="text-xl my-2">Liam</p>
          </div>

          <div className="flex flex-col justify-center items-center p-2">
            <Image src={img5} alt="1in1" priority={true} />
            <p className="text-xl my-2">Elijah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
