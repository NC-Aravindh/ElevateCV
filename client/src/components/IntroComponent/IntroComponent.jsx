import React from "react";
import { Link } from "react-router";

const IntroComponent = () => {
  return (
    <div className="flex justify-between m-4 ">
      <div className="flex flex-col  justify-center items-center w-2xl gap-8">
        <h1 className="text-xl font-bold w-3/4">
          "Create a professional, AI-enhanced resume in minutes – smart, fast,
          and hassle-free!" 🚀
        </h1>
        <Link to="/resumeEdit">
          <button className="cursor-pointer bg-purple-400 rounded-xl p-4  font-semibold">
            Get Started
          </button>
        </Link>
      </div>
      <img
        className="w-96 mr-20 hover:skew-x-6 duration-500 cursor-pointer  "
        src="https://assets.visme.co/templates/banners/thumbnails/i_Sleek-Financial-Consultant-Bio_full.jpg"
        alt="intro-resume-template"
      ></img>
    </div>
  );
};

export default IntroComponent;
