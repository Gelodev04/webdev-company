import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import happines from "./images/happiness.png";
import projects from "./images/projects.png";
import support from "./images/support.png";
import officeworker from "./images/officeworker.png";
import "./style/History.css";

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
    <section ref={sectionRef} className="py-12  ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
          <p className="text-gray-600 mt-4">
            A brief overview of our journey and achievements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0  ">
          <div className="flex flex-col items-center box py-[3rem] mx-7 rounded-lg ">
            <img src={happines} alt="Happiness" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Happy Clients</h3>
            {inView && (
              <CountUp
                start={0}
                end={1000}
                duration={3}
                className="text-4xl font-bold text-[#004cff] mt-2"
              />
            )}
          </div>
          <div className="flex flex-col items-center box py-[3rem] mx-7 rounded-lg">
            <img src={projects} alt="Projects" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Projects Completed</h3>
            {inView && (
              <CountUp
                start={0}
                end={150}
                duration={3}
                className="text-4xl font-bold text-[#004cff] mt-2"
              />
            )}
          </div>
          <div className="flex flex-col items-center box py-[3rem] mx-7 rounded-lg">
            <img src={support} alt="Support" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Support Hours</h3>
            {inView && (
              <CountUp
                start={0}
                end={5000}
                duration={3}
                className="text-4xl font-bold text-[#004cff] mt-2"
              />
            )}
          </div>
          <div className="flex flex-col items-center box py-[3rem] mx-7 rounded-lg">
            <img src={officeworker} alt="Office Worker" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Office Workers</h3>
            {inView && (
              <CountUp
                start={0}
                end={50}
                duration={3}
                className="text-4xl font-bold text-[#004cff] mt-2"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;