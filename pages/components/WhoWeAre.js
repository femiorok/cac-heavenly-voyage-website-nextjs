import Image from "next/image";
import caclogo from "/public/caclogo.png";
import styles from "../../styles/WhoWeAre.module.css";
import { useRef, useState, useEffect } from "react";

const WhoWeAre = () => {
  const [isVisible, setIsVisible] = useState();
  const [animate, setAnimate] = useState();
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && setIsVisible(true);
      });
    });
    observer.observe(myRef.current);
    return () => {
      isVisible && observer.unobserve(myRef.current);
    };
  }, []);

  useEffect(() => {
    isVisible
      ? setAnimate(
          "border md:drop-shadow-2xl bg-slate-100 relative flex justify-center animate-fade-in-down"
        )
      : setAnimate(
          "border md:drop-shadow-2xl bg-slate-100 relative flex justify-center"
        );
  }, [isVisible]);

  return (
    <div className="" id="aboutus">
      <div className="flex flex-col basis-1/2 items-center">
        <div className="flex flex-col items-center grow bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500 to-yellow-700 py-10 w-full text-white">
          <h1 className="text-3xl wider">Who We</h1>
          <h2 className="text-7xl font-bold">Are</h2>
        </div>
        <div
          ref={myRef}
          className={`${animate} flex flex-col items-center py-5 md:my-10`}
        >
          <div className="drop-shadow-md">
            <Image src={caclogo} width={170} height={150} />
          </div>
          <p className="w-full md:max-w-2xl p-10 opacity-100 text-center">
            <span className="font-semibold bg-yellow-500 text-white text-lg p-1">
              {" "}
              Christ Apostolic Church (Heavenly Voyage)
            </span>{" "}
            is a new assembly of Christ Apostolic Church, affiliated to Christ
            Apostolic Church North America Region(CAC-NA), under the global
            umbrella of Christ Apostolic Church (Worldwide).
            <br />
            <br />
            As of 2018, the current leader of CAC (Worldwide) is{" "}
            <span className="font-semibold bg-yellow-500 text-white text-lg p-1">
              Pastor A.O. Akinosun, President
            </span>
            , located in the Christ Apostolic Church Headquarters in Ibadan,
            Nigeria. The regional umbrella in North America, C.A.C.NA covers all
            C.A.C assemblies in USA and Canada, under the regional
            Superintendent, Pastor T.A.O. Agbeja, (Ph. D). The Superintendent of
            the California Zone is{" "}
            <span className="font-semibold bg-yellow-500 text-white text-lg p-1">
              {" "}
              Pastor Gabriel Idowu.
            </span>
            <br />
            <br />
            The C.A.C. mission has its offspring in Nigeria (West Africa), in
            1918. This foremost African Pentecostal church now has memberships
            in the order of{" "}
            <span className="font-semibold bg-yellow-500 text-white text-lg p-1">
              7 million, and 1,000’s of church assemblies in Africa, Europe and
              North America.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
