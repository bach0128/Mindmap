import check from "../../assets/image/price/check.png";
import checkWhite from "../../assets/image/price/check-white.png";
import right from "../../assets/image/price/next.png";
import abs1 from "../../assets/image/price/abstract-1.jpg";
import abs2 from "../../assets/image/price/abstract-2.jpg";
import abs3 from "../../assets/image/price/abstract-3.jpg";

import Image from "next/image";
export default function Price() {
  return (
    <div className="max-w-6xl my-16 mx-auto">
      <div className="text-center">
        <h1 className="text-indigo-600 text-5xl text-bold mb-6">
          Flexible <span className="text-black">Plans</span>
        </h1>
        <p className="text-2xl text-gray-700">
          Choose a plan that works best for you and your team.
        </p>
      </div>
      <div className="option mt-10 relative flex md:flex-col sm:flex-col xl:flex-row justify-center items-center">
        <div className="option-1 shadow-2xl bg-white p-8 my-0 w-full flex-1 rounded-3xl mt-8 md:order-2 xl:order-1">
          <div className="flex h-30 items-center">
            <div className="flex h-20 w-20">
              <Image
                src={abs1}
                alt="none"
                style={{
                  border: "1px solid transparent",
                  borderRadius: "25px",
                }}
              />
            </div>
            <div className="ml-3">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-gray-400">
                <span className="align-top">$</span>
                <span className="text-black text-2xl font-bold ">10</span> /
                user
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-4 text-lg text-gray-400">
            <hr className="border-gray-300"></hr>
            <p className="flex items-center mt-4 ">
              <span className="flex items-center">
                <Image src={check} alt="none" width={16} height={16} />
              </span>
              <span className="ml-2">
                Get started with <span className="text-black"> messaging </span>
              </span>
            </p>
            <p className="inline-flex">
              <span className="flex items-center">
                <Image src={check} alt="none" />
              </span>
              <span className="ml-2">
                Flexible
                <span className="text-black"> team meetings</span>
              </span>
            </p>
            <p className="inline-flex text-center">
              <span className="flex items-center">
                <Image src={check} alt="none" />
              </span>
              <span className="ml-2">
                <span className="text-black">5 TB </span>
                cloud storage
              </span>
            </p>
          </div>
          <button className="mt-4 flex items-center justify-center bg-indigo-600 text-white text-xl w-full h-14 rounded-xl">
            Choose Plan
            <Image src={right} alt="right" style={{ marginLeft: "10px" }} />
          </button>
        </div>
        <div className="option-2 shadow-2xl bg-gray-900 p-8 w-full flex-1 rounded-3xl text-white h-full md:order-1 xl:order-2">
          <div className="flex h-30 items-center">
            <div className="flex h-20 w-20 mb-3">
              <Image
                src={abs2}
                alt="none"
                style={{
                  border: "1px solid transparent",
                  borderRadius: "25px",
                }}
              />
            </div>
            <div className="ml-3">
              <h3 className="text-3xl font-bold">Startup</h3>
              <p className="text-gray-300">
                <span className="align-top">$</span>
                <span className="text-white text-3xl font-bold ">24</span> /
                user
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-4 text-xl text-gray-400 mb-3">
            <hr className="border-gray-300"></hr>
            <p className="flex items-center mt-4 mb-2 ">
              <span className="flex items-center my-3">
                <Image src={checkWhite} alt="none" width={16} height={16} />
              </span>
              <span className="ml-2 m-3">
                All features in <span className="text-white"> Basic </span>
              </span>
            </p>
            <p className="inline-flex my-3">
              <span className="flex items-center">
                <Image src={checkWhite} alt="none" />
              </span>
              <span className="ml-2">
                Flexible
                <span className="text-white"> call scheduling</span>
              </span>
            </p>
            <p className="inline-flex text-center my-3">
              <span className="flex items-center">
                <Image src={checkWhite} alt="none" />
              </span>
              <span className="ml-2">
                <span className="text-white">15 TB </span>
                cloud storage
              </span>
            </p>
          </div>
          <button className="mt-4 flex items-center justify-center bg-indigo-600 text-white text-2xl w-full h-20 rounded-xl">
            Choose Plan
            <Image src={right} alt="right" style={{ marginLeft: "10px" }} />
          </button>
        </div>
        <div className="option-3 shadow-2xl bg-white p-8 w-full flex-1 rounded-3xl mt-8 md:order-3 xl:order-3">
          <div className="flex h-30 items-center">
            <div className="flex h-20 w-20">
              <Image
                src={abs3}
                alt="none"
                style={{
                  border: "1px solid transparent",
                  borderRadius: "25px",
                }}
              />
            </div>
            <div className="ml-3">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-gray-400">
                <span className="align-top">$</span>
                <span className="text-black text-2xl font-bold ">35</span> /
                user
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-4 text-lg text-gray-400">
            <hr className="border-gray-300"></hr>
            <p className="flex items-center mt-4 ">
              <span className="flex items-center">
                <Image src={check} alt="none" width={16} height={16} />
              </span>
              <span className="ml-2">
                All features in <span className="text-black"> Startup </span>
              </span>
            </p>
            <p className="inline-flex">
              <span className="flex items-center">
                <Image src={check} alt="none" />
              </span>
              <span className="ml-2">
                Growth
                <span className="text-black"> oriented</span>
              </span>
            </p>
            <p className="inline-flex text-center">
              <span className="flex items-center">
                <Image src={check} alt="none" />
              </span>
              <span className="ml-2">
                <span className="text-black">Unlimited </span>
                cloud storage
              </span>
            </p>
          </div>
          <button className="mt-4 flex items-center justify-center bg-indigo-600 text-white text-xl w-full h-14 rounded-xl">
            Choose Plan
            <Image src={right} alt="right" style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
