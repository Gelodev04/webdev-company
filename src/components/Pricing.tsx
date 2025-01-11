import "./style/all.css";

function Pricing() {
  return (
    <div id="pricing" className="pt-12 mx-7 lg:min-h-screen">
      {/* header */}
      <div className="flex items-center justify-center space-x-3">
        <span className="flex-grow-0 w-[4rem] h-[2px] rounded-full bg-[#004cff]"></span>
        <h1 className="text-[1.3rem] text-center font-bold tracking-wider text-gray-800 uppercase">
          Pricing
        </h1>
        <span className="flex-grow-0 h-[2px] w-[4rem] rounded-full bg-[#004cff]"></span>
      </div>
      <p className="text-gray-700 group-hover:text-gray-300 text-center px-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur,
        delectus quas ipsam dolor iure?{" "}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:h-[600px]">
        {[
          {
            title: "Basic",
            price: "19",
            features: ["Feature 1", "Feature 2", "Feature 3"],
          },
          {
            title: "Standard",
            price: "49",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          },
          {
            title: "Premium",
            price: "99",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"],
          },
        ].map((item, index) => (
          <div
            key={index}
            className="pricing flex flex-col justify-center bg-white shadow-lg rounded-lg p-8 text-center group"
          >
            <h1 className="text-2xl font-semibold text-gray-800 tracking-wider">
              {item.title}
            </h1>
            <p className="text-5xl py-3 font-bold text-[#004cff]">
              ${item.price}
              <span className="text-base font-normal text-gray-700">
                /month
              </span>
            </p>
            <ul className="flex flex-col gap-3 text-gray-800">
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center gap-1">
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={21}
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M4 12.6111L8.92308 17.5L20 6.5"
                          stroke="green"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="border border-[#004cff] mt-5 font-semibold tracking-wide text-gray-800 rounded-3xl py-2 px-6 group-hover:bg-[#004cff] group-hover:text-white transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Pricing;