import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiJira,
  SiGit,
  SiDocker
} from "react-icons/si";
import { GrCode,GrGithub } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={90} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={90} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={85} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={70}
                />
                <ProgressBar logo={<SiNodedotjs />} name={"Node Js"} value={85} />
                <ProgressBar logo={<SiExpress />} name={"Express Js"} value={75} />
                <ProgressBar logo={<SiMongodb />} name={"Mongo DB"} value={80} />
                <ProgressBar logo={<SiTypescript />} name={"TypeScript"} value={65} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
            <SkillBox
                className=""
                logo={
                  <GrCode/>
                }
                black={"black"}
                white={"white"}
                skill={"C++"}
              />
              <SkillBox
                logo={<SiJira  />}
                black={"white"}
                white={"black"}
                skill={"Jira"}
              />
              <SkillBox
                logo={<GrGithub  />}
                black={"black"}
                white={"white"}
                skill={"Github"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiPython />}
                black={"white"}
                white={"black"}
                skill={"Python"}
              />
              <SkillBox
                className=""
                logo={
                  <SiGit />
                }
                black={"black"}
                white={"white"}
                skill={"Git"}
              />
              <SkillBox
                className=""
                logo={
                  <SiDocker />
                }
                black={"white"}
                white={"black"}
                skill={"Docker"}
              />
              {/* <SkillBox
                className=""
                logo={
                  <SiNextdotjs className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Next Js"}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
