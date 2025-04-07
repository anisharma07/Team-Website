import React from "react";
// import { useWindowScroll } from "react-use";

const Header = () => {
  // const { y } = useWindowScroll();
  // const [showHeader, setShowHeader] = useState(true);
  // const [lastScrollTop, setLastScrollTop] = useState(0);
  // useEffect(() => {
  //   const currentScrollTop = y;
  //   if (currentScrollTop < lastScrollTop) {
  //     setShowHeader(true);
  //   } else if (currentScrollTop > lastScrollTop) {
  //     setShowHeader(false);
  //   }
  //   setLastScrollTop(currentScrollTop);
  // }, [y, lastScrollTop]);

  return (
    <div
      className="m-auto text-center"
      // style={{
      //   top: showHeader ? "-2px" : "-200px",
      //   transition: "top 0.5s",
      // }}
    >
      <div className="londrina-solid-font text-[58px] leading-0 sm:text-[50px] xxs:text-[30px] pt-6">
        OUR <span className="text-purpleSecondary">TEAM</span>
      </div>
    </div>
  );
};

export default Header;
