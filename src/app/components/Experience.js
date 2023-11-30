import React from 'react'
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import HtmlDeveloper from '../works/HtmlDeveloper';
import UiDeveloper from "../works/UiDeveloper";
import FrontAndUi from "../works/FrontAndUi";
import Executive from '../works/executive';

const Experience = () => {

  const [exec,setExec] = useState(false);
  const [htmlD,setHtmlD] = useState(false);
  const [Uideveloper,setUideveloper] = useState(false);
  const [FrontandUi,setFrontandUi] = useState(false);

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li className={`${
              FrontandUi
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            RactBD
          </li>
          <li 
            className={`${
              Uideveloper
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li 
            className={`${
              htmlD
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
        </ul>
        {FrontandUi && <FrontAndUi />}
        {Uideveloper && <UiDeveloper />}
        {htmlD && <HtmlDeveloper />}
        {exec && <Executive />}
      </div>
    </section>
  )
}

export default Experience