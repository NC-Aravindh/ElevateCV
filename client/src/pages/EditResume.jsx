import React from "react";
import { Link } from "react-router";

const EditResume = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-20">
      <h1 className="font-bold text-5xl">Create Resume from scratch or upload existing resume</h1>
      <div className="flex gap-10 flex-row">
        <Link>
          <button className="cursor-pointer bg-purple-400 rounded-xl p-4  font-semibold">
            Create Resume
          </button>
        </Link>
        <Link>
          <button className="cursor-pointer bg-purple-400 rounded-xl p-4  font-semibold">
            Upload
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditResume;
