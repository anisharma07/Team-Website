import React from "react";
import Accordion from "./Accordion";
import contents from "./faqsss";
import FooterFaqs from "./FooterFaqs";
const Faqs = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* heading */}
      <div className="mt-16 flex items-center justify-center w-full pb-4 mb-6 ssm:mb-0">
        <img
          src="../assets/icons/QnA.png"
          alt="qna"
          className="w-[40px] ml-4 mr-4"
        />
        <p className="font-press2P text-[36px] mr-12 lg:text-[25px]">FAQ's</p>
      </div>

      {/* all faqs  */}
      <div className="h-full w-full  mb-[155px] overflow-auto flex items-center justify-center scrollbar-thin">
        <Accordion contents={contents} />
      </div>
      {/* //footer */}
      <FooterFaqs />
    </div>
  );
};

export default Faqs;
