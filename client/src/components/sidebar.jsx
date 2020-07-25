import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../scss/sidebar.scss";
import { Link } from "react-router-dom";

import Humberger from "./humberger";

const Sidebar = () => {
  // const [scrollCount, countCulc] = useState(false);

  // function Greeting(props) {
  //   const isLoggedIn = props.isLoggedIn;
  //   if (isLoggedIn) {
  //     return <UserGreeting />;
  //   }
  //   return <GuestGreeting />;
  // }

  // ReactDOM.render(
  //   // falseをtrueにかえると表示が変わる。
  //   <Greeting isLoggedIn={true} />,
  //   document.querySelector("body")
  // );

  return (
    <React.StrictMode>
      <div className="navbar">
        <p className="name">Tatsumi Tamura</p>
        <div className="slash">/</div>
        <br />
        <div className="line">----</div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="profile_route">Profile</div>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <div className="blog_route">Blog</div>
        </Link>
        <Link to="/archive" style={{ textDecoration: "none" }}>
          <div className="archive_route">Archive</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="contact_route">Contact</div>
        </Link>
        <div className="line">----</div>
      </div>
      <div className="humberger">
        <Humberger />
      </div>
    </React.StrictMode>
  );
};

export default Sidebar;
