import React from "react";
import CarouselSection from "./LandingPageCarousel.js"
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small" ref={pageHeader}>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("website/assets/img/chimons-large-logo.jpg") + ")"
          }}
          ref={pageHeader}
        >
          <CarouselSection className="page-header-image"></CarouselSection>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
