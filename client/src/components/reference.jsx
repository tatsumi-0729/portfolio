import React from "react";
// import { useParams } from "react-router";
import "../scss/reference.scss";

function Reference() {
  // const { id } = useParams();
  return (
    <div className="reference">
      {/* <h2 className="reference_text">articleId : {id}</h2> */}
      <div className="title">
        <h1 className="title_text">Hello World</h1>
        <div className="under_line"></div>
      </div>
      {/* <img src="https://placehold.jp/1080x1920.png" className="image_src"></img> */}
      <div className="content">
        <p className="content_text">
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
          <br />
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
}

export default Reference;
