import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import "./style/History.css";
import happines from "./images/happiness.png";
import projects from "./images/projects.png";
import support from "./images/support.png";
import officeworker from "./images/officeworker.png";

function History() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="h-screen pt-10 flex flex-col justify-center">
      <ul className="flex flex-col gap-4">
        <li className="box px-5 bg-[#fff] rounded-lg mx-5 py-10 hover:bg-opacity-90">
          <div className="flex items-center gap-4">
            <img className="w-[50px]" src={happines} alt="happy" />
            <div className="flex flex-col">
              <h1 className="text-[2.3rem] text-[#2e269c]">
                {inView && <CountUp end={232} duration={5} />}
              </h1>
              <p className="text-[1.1rem] text-gray-700">Happy Clients</p>
            </div>
          </div>
        </li>
        <li className="box p-4 bg-[#fff] rounded-lg mx-5 py-10 hover:bg-opacity-90">
          <div className="flex items-center gap-4">
            <img className="w-[50px]" src={projects} alt="projects" />
            <div className="flex flex-col">
              <h1 className="text-[2.3rem] text-[#2e269c]">
                {inView && <CountUp end={601} duration={5} />}
              </h1>
              <p className="text-[1.1rem] text-gray-700">Projects Done</p>
            </div>
          </div>
        </li>
        <li className="box p-4 bg-[#fff] rounded-lg mx-5 py-10 hover:bg-opacity-90">
          <div className="flex items-center gap-4">
            <img className="w-[50px]" src={support} alt="support" />
            <div className="flex flex-col">
              <h1 className="text-[2.3rem] text-[#2e269c]">
                {inView && <CountUp end={1567} duration={5} />}
              </h1>
              <p className="text-[1.1rem] text-gray-700">Hours Of Support</p>
            </div>
          </div>
        </li>
        <li className="box p-4 bg-[#fff] rounded-lg mx-5 py-10 hover:bg-opacity-90">
          <div className="flex items-center gap-4">
            <img className="w-[50px]" src={officeworker} alt="workers" />
            <div className="flex flex-col">
              <h1 className="text-[2.3rem] text-[#2e269c]">
                {inView && <CountUp end={84} duration={5} />}
              </h1>
              <p className="text-[1.1rem] text-gray-700">Hard Workers</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default History;