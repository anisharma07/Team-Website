import React from "react";
import Cards from "../ui/Cards";
import DomainCards from "../ui/DomainCards";

const cardArr = [
  {
    title: "Web /App Development",
    contents:
      "We craft digital experiences that transcend mere websites. Our team excels in opting for immersive online landscapes, with unparalleled finesse. ",
    image: "../../../assets/domain/web.png",
  },
  {
    title: "Machine Learning",
    contents:
      "Step into the realm of Artificial Intelligence and Machine Learning, where data transforms into insights and possibilities are limitless.",
    image: "../../../assets/domain/ml.png",
  },
  {
    title: "Competitive Programming",
    contents:
      "Dive into the revolutionary world of Competitive Programming, where innovation meets functionality. ",
    image: "../../../assets/domain/cp.png",
  },
  {
    title: "AR / VR",
    contents:
      "Embark on a journey beyond reality with AR/VR. Our visionary approach blends digital and physical worlds seamlessly.",
    image: "../assets/domain/vr.png",
  },
  {
    title: "Video Editing ",
    contents:
      "Unleash the power of video editing with our state-of-the-art editing . ",
    image: "../../assets/domain/video.png",
  },
  {
    title: "Graphic Design",
    contents:
      "Unleash the creativity and potential of graphic design with our innovative designers. ",
    image: "../../../assets/domain/graphic.png",
  },
];
const DomainMobile = () => {
  return (
    <div
      className="flex flex-col items-center pt-4 overflow-y-scroll overflow-x-hidden snap-x snap-proximity "
      style={{
        scrollSnapType: "x proximity",
      }}
    >
      {cardArr.map((item, index) => (
        // implement lazty loading where ever possinble
        <DomainCards
          key={index}
          title={item.title}
          content={item.contents}
          src={item.image}
          index={index}
        />
      ))}
    </div>
  );
};
const Domain = ({ isMobile }) => {
  return (
    <section id="domains" className="text-white w-[100%]   ">
      <h2 className="w-full text-white  text-[50px] font-bold font-aldrich p-4 pt-8 text-center sm:text-[28px]">
        OUR <span className="text-purpleSecondary">DOMAINS</span>
      </h2>
      {isMobile ? (
        <DomainMobile />
      ) : (
        <div>
          <Cards arr={cardArr} />
        </div>
      )}
    </section>
  );
};

export default Domain;
