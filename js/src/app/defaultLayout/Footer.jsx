import React from "react";
export default function Footer() {
    return (<footer className="bg-gray-100 py-14" style={{
            backgroundColor: "#21D4FD",
            backgroundImage: "linear-gradient(43deg, #70c1ff  0%, #FFF 100%)",
        }}>
      <div className="container flex flex-wrap px-4 mx-auto">
        <div className="md:w-1/2 xl:w-1/4 px-4">
          <h4 className="text-xl font-bold mb-5">Features</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Coll stuff
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Random feature
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Team feature
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Stuff for developers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Another one
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 xl:w-1/4 px-4">
          <h4 className="text-xl font-bold mb-5">Rosources</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Resource
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Resource name
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Another resource
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 xl:w-1/4 px-4">
          <h4 className="text-xl font-bold mb-5">About</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Team
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Locations
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Privacy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 xl:w-1/4 px-4">
          <h4 className="text-xl font-bold mb-5">Help</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Support
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Help center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:decoration-purple-800 hover:text-purple-800">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="mt-6 flex pt-6 justify-center">
        <div className="sm:w-full px-4 md:w-1/4 ">
          <h5>Address</h5>
          <p>128 Le Trong Tan St.</p>
          <p>Dinh Cong - Ha Noi - VN</p>
        </div>
        <div className="sm:w-full px-4 md:w-1/4">
          <h5>Free Recourse</h5>
          <p>
            use our HTML blocks for <strong>FREE</strong>
          </p>
          <i>All are MIt License</i>
        </div>
      </div>
    </footer>);
}
