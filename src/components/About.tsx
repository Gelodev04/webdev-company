import React from "react";
import check from "./images/check.png";

function Secondsection() {
  return (
    <section id="aboutus" className=" pt-8 ">
      <div className="mx-7">
        <h1 className="text-[1.3rem] text-center font-bold tracking-wider text-[#2e269c]">
          ABOUT US
        </h1>
        <div className="mx-5 pt-3">
          <p className="text-[1.6rem] font-medium text-gray-700 mt-3">
            WebCrafter is a passionate team of web developers committed to
            building digital solutions that meet your business needs.
          </p>
          <p className="text-gray-700 mt-3 text-[1.1rem]">
            {" "}
            With years of experience in front-end and back-end development, we
            create websites that are not only visually appealing but also
            function seamlessly. Whether you're a startup or an established
            enterprise, we have the expertise to bring your ideas to life
          </p>
        </div>
        {/* CHECKBOXES */}
        <div className="mx-5 mt-6">
          <ul className="flex flex-col gap-3 text-lg text-gray-900">
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Lorem ipsum dolor sit amet</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Consectetur adipiscing elit</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Sed do eiusmod tempor</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Incididunt ut labore et dolore</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Magna aliqua</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Ut enim ad minim veniam</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Quis nostrud exercitation</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-[20px]" src={check} alt="check" />
              <p>Ullamco laboris nisi ut aliquip</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Secondsection;
