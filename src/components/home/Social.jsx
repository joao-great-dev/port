import React from "react";
import git from "../../assests/github-unscreen.gif"

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://github.com/tomasz-ponikowski/" className="home__social-icon">
        {/* <i class="uil uil-github-alt"></i> */}
        <img src={git} alt="" className="home__social-icon" />
      </a>
    </div>
  );
};

export default Social;
