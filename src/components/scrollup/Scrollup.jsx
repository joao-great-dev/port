// import React from "react";
// import "./scrollup.css";

// const Scrollup = () => {
//   window.addEventListener("scroll", function () {
//     const scrollup = document.querySelector(".scrollup");

//     // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    
//      if (this.scrollY >= 560) 
//         scrollup.classList.add("show-scroll");
//      else 
//         scrollup.classList.remove("show-scroll");
//   });

//   return (
    
//       <i className="uil uil-arrow-up scrollup__icon"></i>

//   );
// };

// export default Scrollup;

import { useEffect, useRef } from "react";
import "./scrollup.css";

const Scrollup = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 560) {
        scrollRef.current?.classList.add("show-scroll");
      } else {
        scrollRef.current?.classList.remove("show-scroll");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <i
      ref={scrollRef}
      className="uil uil-arrow-up scrollup__icon"
    ></i>
  );
};

export default Scrollup;
