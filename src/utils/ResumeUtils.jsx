import React from "react";

const ResumeUtils = ({ subjectName, filleddots }) => {
  const totalDots = 10; // Total number of dots

  return (
    <div className="flex flex-col my-3 ">
      {/* Skill Label */}
      <span className="text-lg font-medium">{subjectName}</span>
      {/* Dots Container */}
      <div className="flex space-x-3">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              index < filleddots ? "bg-blue-400" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ResumeUtils;
