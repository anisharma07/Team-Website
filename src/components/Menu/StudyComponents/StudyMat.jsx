import React from "react";
import { useState } from "react";
import { Theory1, Theory2, Theory3, Theory4, Theory5, Theory6 } from "./Theory";

import { Lab1, Lab2, Lab3, Lab4, Lab5, Lab6 } from "./Labs";
import Semester from "./Semester";

const StudyMat = () => {
  const [studyContent, setstudyContent] = useState("Semesters");
  const handleBackClick = () => {
    setstudyContent("Semesters");
  };
  const handleContentClick = (subject) => {
    setstudyContent(`${subject}`);
  };
  return (
    <div className="studyMatscrollbar relative w-full h-full flex flex-col items-center">
      <div className="mt-16 flex items-center justify-center w-full pb-4">
        <p className="text-[35px]  ml-4 mr-4">📑</p>
        <p className="font-press2P text-[30px] mr-12 lg:text-[25px]">
          STUDY MATERIAL
        </p>
      </div>

      {/* //changing-element */}
      {studyContent === "Semesters" && (
        <Semester handleContentClick={handleContentClick} />
      )}
      {studyContent === "Theory1" && (
        <Theory1 handleBackClick={handleBackClick} />
      )}
      {studyContent === "Theory2" && (
        <Theory2 handleBackClick={handleBackClick} />
      )}
      {studyContent === "Theory3" && (
        <Theory3 handleBackClick={handleBackClick} />
      )}
      {studyContent === "Theory4" && (
        <Theory4 handleBackClick={handleBackClick} />
      )}
      {studyContent === "Theory5" && (
        <Theory5 handleBackClick={handleBackClick} />
      )}
      {studyContent === "Theory6" && (
        <Theory6 handleBackClick={handleBackClick} />
      )}
      {studyContent === "Lab1" && <Lab1 handleBackClick={handleBackClick} />}
      {studyContent === "Lab2" && <Lab2 handleBackClick={handleBackClick} />}
      {studyContent === "Lab3" && <Lab3 handleBackClick={handleBackClick} />}
      {studyContent === "Lab4" && <Lab4 handleBackClick={handleBackClick} />}
      {studyContent === "Lab5" && <Lab5 handleBackClick={handleBackClick} />}
      {studyContent === "Lab6" && <Lab6 handleBackClick={handleBackClick} />}

      {/* //footer */}
      <div className="absolute bottom-0 left-0 z-[1000] w-[100%] h-[65px]">
        <div className="question-group flex absolute bottom-4 left-3 items-center cursor-pointer text-white">
          <p className=" rounded-[11px] hover-study-modal absolute top-[-110px] left-[38px] bg-white z-[10000000000] p-4 w-[320px] text-[13px] text-black font-poppins">
            The resources Provided here are contributed by the Students of Team
            .Exe & mostly computer science related subjects are there.
          </p>
          <svg
            width="35"
            height="35"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.3477 47.916C30.5802 47.916 36.5576 45.4401 40.9647 41.033C45.3718 36.6259 47.8477 30.6486 47.8477 24.416C47.8477 18.1834 45.3718 12.2061 40.9647 7.79901C36.5576 3.3919 30.5802 0.916016 24.3477 0.916016C18.1151 0.916016 12.1378 3.3919 7.73065 7.79901C3.32354 12.2061 0.847656 18.1834 0.847656 24.416C0.847656 30.6486 3.32354 36.6259 7.73065 41.033C12.1378 45.4401 18.1151 47.916 24.3477 47.916ZM15.3207 15.5741C14.4835 16.8343 14.0664 18.0798 14.0664 19.3048C14.0664 19.9011 14.3308 20.4563 14.8595 20.9674C15.3883 21.4785 16.0345 21.7311 16.8012 21.7311C18.1025 21.7311 18.9867 21.0026 19.4538 19.5398C19.9473 18.1445 20.5495 17.087 21.2633 16.3673C21.9771 15.6505 23.0845 15.2921 24.5944 15.2921C25.884 15.2921 26.9356 15.6446 27.7522 16.3585C28.5659 17.0693 28.9742 17.9447 28.9742 18.9787C28.9778 19.4974 28.8396 20.0073 28.5747 20.4533C28.3053 20.908 27.973 21.3224 27.5877 21.6841C26.9696 22.2493 26.3349 22.7959 25.6842 23.3233C24.6855 24.1516 23.8894 24.8655 23.299 25.4676C22.7115 26.0698 22.2356 26.769 21.8802 27.5621C20.9343 31.2193 25.8458 31.513 26.9797 28.9016C27.1177 28.649 27.3263 28.3728 27.6053 28.0673C27.8873 27.7648 28.2604 27.4123 28.7275 27.0098C29.9159 26.0199 31.0853 25.0073 32.2348 23.9725C32.884 23.3732 33.4451 22.6565 33.918 21.8281C34.4056 20.9441 34.6508 19.9469 34.6289 18.9376C34.6289 17.5423 34.2147 16.2498 33.3834 15.0601C32.555 13.8675 31.38 12.9275 29.8584 12.2342C28.3368 11.5439 26.5831 11.1973 24.5944 11.1973C22.4559 11.1973 20.5847 11.6085 18.9808 12.4398C17.377 13.2682 16.1579 14.314 15.3207 15.5741ZM21.607 36.3716C21.607 37.1507 21.9165 37.8979 22.4673 38.4488C23.0182 38.9997 23.7654 39.3091 24.5445 39.3091C25.3235 39.3091 26.0707 38.9997 26.6216 38.4488C27.1725 37.8979 27.482 37.1507 27.482 36.3716C27.482 35.5926 27.1725 34.8454 26.6216 34.2945C26.0707 33.7436 25.3235 33.4341 24.5445 33.4341C23.7654 33.4341 23.0182 33.7436 22.4673 34.2945C21.9165 34.8454 21.607 35.5926 21.607 36.3716Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StudyMat;
