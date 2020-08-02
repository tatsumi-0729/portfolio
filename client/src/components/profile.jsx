import React from "react";
import "../scss/profile.scss";
import * as TopImage from "../images/profile_image.png";
import * as Java from "../images/java.png";
import * as Ruby from "../images/ruby.png";
import * as JavaScript from "../images/javaScript.png";
import * as Spring from "../images/spring.png";
import * as RubyOnRails from "../images/rails.png";
import * as ReactJs from "../images/react.png";
import * as VueJs from "../images/vue.png";
import * as Html from "../images/html.png";
import * as Css from "../images/css.png";
import * as Docker from "../images/docker.png";
import * as Git from "../images/git.png";
import * as Jenkins from "../images/jenkins.png";

const profile = () => {
  return (
    <div className="profile">
      <div className="image_container">
        <img src={TopImage} className="topImage" alt="" />
      </div>
      <div className="text_area">
        <p className="introduce_text">
          Tatsumi Tamura was born in Yamaguchi Prefecture in 1995, He played
          tennis ball in High School, And got the right for National Convention
          and lost second round,
          <br />
          Though that experience a lot of influence for him in all ways
          possible, Now he is working as a Engineer to make web system for B to
          B and B to C,
          <br />
          Usually, he using Java, Ruby and JavaScript of programing language,
          The most favorite programing language of his is React.js,
        </p>

        <div className="skills">
          <h2 className="skills_text">&lt; skills &gt;</h2>
          {/* <div className="under_line"></div> */}
          <div className="skill_images">
            <img src={Java} className="skill_image" alt="" />
            <img src={Ruby} className="skill_image" alt="" />
            <img src={JavaScript} className="skill_image" alt="" />
            <img src={Spring} className="skill_image" alt="" />
            <img src={RubyOnRails} className="skill_image" alt="" />
            <img src={ReactJs} className="skill_image" alt="" />
            <img src={VueJs} className="skill_image" alt="" />
            <img src={Html} className="skill_image" alt="" />
            <img src={Css} className="skill_image" alt="" />
            <img src={Git} className="skill_image" alt="" />
            <img src={Docker} className="skill_image" alt="" />
            <img src={Jenkins} className="skill_image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
