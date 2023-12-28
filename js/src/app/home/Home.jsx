import Image from "next/image";
import mind from "../assets/image/mind.webp";
export default function Home() {
    return (<div className="bg-indigo-100 py-6 md:py-12">
      <div className="container px-4 mx-auto">
        <div className="heading text-center">
          <h1 className="text-3xl font-bold mb-2">
            Học tập hiệu quả với bản đồ tư duy
          </h1>
          <button className="text-center rounded-full bg-indigo-700 mt-6 px-6 py-2 text-xl h-18 text-white">
            Sử dụng miễn phí
          </button>
          <div className="mt-6 flex items-center justify-center  text-center mx-auto">
            <Image src={mind} alt="So do tu duy" 
    // loading="lazy"
    width={600} height={315} style={{ color: "transparent" }} priority={true}/>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:mx-4 mt-6 px-20">
        <div className="md:w-1/3 mt-8 px-4 text-center">
          <h5 className="text-xl font-medium mb-4 uppercase">Dễ sử dụng</h5>
          <p className="text-gray-700">
            FWR blocks bring in an air of fresh design with their creative
            layouts and blocks, which are easily customizable
          </p>
        </div>
        <div className="md:w-1/3 mt-8 px-4 text-center">
          <h5 className="text-xl font-medium mb-4 uppercase">KHÔNG GIỚI HẠN</h5>
          <p className="text-gray-700">
            FWR blocks are the cleanest pieces of HTML blocks, which are built
            with utmost care to quality and usability.
          </p>
        </div>
        <div className="md:w-1/3 mt-8 px-4 text-center">
          <h5 className="text-xl font-medium mb-4 uppercase">
            QUẢN LÝ VÀ CHIA SẺ
          </h5>
          <p className="text-gray-700">
            FWR blocks is a perfect tool for designers, developers and agencies
            looking to create stunning websites in no time.
          </p>
        </div>
      </div>
    </div>);
}
