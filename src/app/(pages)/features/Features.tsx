export default function Features() {
  return (
    <div
      className="py-4 px-6"
      style={{
        backgroundColor: "white",
        // backgroundImage: "linear-gradient(43deg, #70c1ff  0%, #FFF 100%)",
      }}
    >
      <div className="text-center xl:px-40 md:px-2">
        <h2 className="text-3xl font-bold mb-3">Features</h2>
        <p className="text-lg text-gray-600  md:px-2 ">
          The main aim of creating FWR blocks is to help designers, developers
          and agencies create websites and web apps quickly and easily. Each and
          every block uses minimal custom styling and is based on the utility
          first Tailwind framework.
        </p>
        <button
          className="text-indigo-700 text-2xl px-8 py-2 border-indigo-700 rounded mt-8 hover:bg-indigo-700 hover:text-white"
          style={{ border: "2px solid" }}
        >
          Learn more
        </button>
      </div>

      <div className="py-2 flex items-center justify-center mb-10">
        <div className="container flex items-center justify-center mt-16">
          <div
            className="md:w-1/3 text-center flex flex-col items-center justify-center rounded px-8 py-6 mx-4"
            style={{
              border: "2px solid gray",
              backgroundColor: "#D9AFD9",
              backgroundImage: "linear-gradient(0deg, #70c1ff 0%, #FFF 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="true"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-6 h-6 my-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <h3 className="text-2xl mb-3">Fresh Design</h3>
            <p className="text-lg text-gray-500 mb-4">
              FWR blocks are the cleanest pieces of HTML blocks, which are built
              with utmost care to quality and usability.
            </p>
          </div>
          <div
            className="md:w-1/3 text-center flex flex-col items-center justify-center rounded px-8 py-6 mx-4"
            style={{
              border: "2px solid gray",
              backgroundColor: "#D9AFD9",
              backgroundImage: "linear-gradient(0deg, #70c1ff 0%, #FFF 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-6 h-6 my-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <h3 className="text-2xl mb-3">Clearn Code</h3>
            <p className="text-lg text-gray-500 mb-4">
              FWR blocks are the cleanest pieces of HTML blocks, which are built
              with utmost care to quality and usability.
            </p>
          </div>
          <div
            className="md:w-1/3 text-center flex flex-col items-center justify-center rounded px-8 py-6 mx-4"
            style={{
              border: "2px solid gray",
              backgroundColor: "#D9AFD9",
              backgroundImage: "linear-gradient(0deg, #70c1ff 0%, #FFF 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="true"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-6 h-6 my-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <h3 className="text-2xl mb-3">Perfect Tool</h3>
            <p className="text-lg text-gray-500 mb-4">
              FWR blocks are the cleanest pieces of HTML blocks, which are built
              with utmost care to quality and usability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
