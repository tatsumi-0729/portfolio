import React from "react";
import "../scss/profile.scss";
import * as TopImage from "../images/profile_image.png";

const profile = () => {
  return (
    <div className="profile">
      <div className="image_container">
        <img src={TopImage} className="topImage" alt="" />
      </div>
      <div className="text_area">
        <p className="introduce_text">
          Tatsumi Tamura was born in Yamaguchi Prefecture in 1995,
          <br />
          He played tennis ball in High School,
          <br />
          And got the right for National Convention and lost second round,
          <br />
          Though that experience a lot of influence for him in all ways
          possible,
          <br />
          Now he is working as a Engineer to make web system for B to B and B to
          C,
          <br />
          Usually, he using Java, Ruby and JavaScript of programing language,
          <br />
          The most favorite programing language of his is React.js,
        </p>
      </div>
    </div>
  );
};

export default profile;
