import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic, selfie } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
    >
      <div className={` ${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <div
              className="cursor-pointer space-x-4 flex flex-row justify-around items-center text-white mr-5 text-[25px] hover:text-teal-200"
            >
              <span>
                {React.createElement(social.icon)}
              </span>
              <span>
                {social.link}
              </span>

            </div>
          ))}
        </div>

        <div className="grid grid-cols-2">
          {/* styles is a prop */}
          {/* <a href={resumeLink} target="_blank">
            <Button styles="mt-10 mr-3 inline-flex items-center justify-center" text="Resume" icon={AiFillGithub} />
          </a> */}
          {/* <a href={repoLink} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="Star"
              icon={AiFillGithub}
            />
          </a> */}
        </div>
      </div>

      <div className="md:ml-auto mt-10 md:mt-0">
        <img
          src={selfie}
          alt="Rostislav Semenov"
          className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
        />
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
      <p>
        Made with 💙 by Rostislav Semenov & the Open Source Community
      </p>
    </div>
  </footer>
);

export default Footer;
