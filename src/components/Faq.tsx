import { useState } from "react";
import "./style/all.css";


function Faq() {
  const freqAskQues = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Ut enim ad minim veniam?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Duis aute irure dolor in reprehenderit?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Excepteur sint occaecat cupidatat non proident?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      question: "Curabitur pretium tincidunt lacus?",
      answer:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleAnswer = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <>
    <div id="faq" className="mt-8 mx-7">
      <div className="flex items-center justify-center space-x-3">
        <span className="flex-grow-0 w-[4rem] h-[2px] rounded-full bg-[#004cff]"></span>
        <h1 className="text-[1.3rem] text-center font-bold tracking-wider text-gray-800">
          FAQ
        </h1>
        <span className="flex-grow-0 h-[2px] w-[4rem] rounded-full bg-[#004cff]"></span>
      </div>
      <p className="mt-4 text-gray-700 md:text-center">
        Here are some of the most <span className="font-semibold">frequently asked questions:</span>
      </p>
      <ul className="mt-4  ">
        {freqAskQues.map((faq, index) => (
          
          <li key={index} className=" mb-5 question-container py-4 px-2 rounded-lg">
           
            <div onClick={() => toggleAnswer(index)} className="flex items-center group cursor-pointer">
              <h1
                className={`w-full text-left   text-gray-800 focus:outline-none text-xl `}
                
              >
                {index + 1}. <span className="decoration-gray-600  group-hover:underline">{faq.question}</span>
              </h1>
              <svg
                
                className={`w-[30px] cursor-pointer z-[-1]  transform transition-transform duration-300  ${
                  openIndices.includes(index) ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 7L15 12L10 17"
                  stroke="#004cff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndices.includes(index) ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="mt-2 text-gray-600 mx-4">{faq.answer}</p>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Faq;