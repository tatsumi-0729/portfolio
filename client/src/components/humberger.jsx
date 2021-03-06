import React from "react";
import { Link } from "react-router-dom";
import "../scss/humberger.scss";

const Humberger = () => {
  return (
    <div class="humberger">
      <input type="checkbox" id="checkbox" class="checkbox" />
      <label for="checkbox" class="open" v-show="visible">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
      <label for="checkbox" class="back"></label>

      <aside>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="profile_aside">Profile</div>
        </Link>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <div className="blog_aside">Blog</div>
        </Link>
        <Link to="/archive" style={{ textDecoration: "none" }}>
          <div className="archive_aside">Archive</div>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div className="postform_aside">Contact</div>
        </Link>
        <Link to="/post" style={{ textDecoration: "none" }}>
          <div className="postform_aside">Post</div>
        </Link>
        <label for="checkbox" className="close">
          ×
        </label>
      </aside>
    </div>
  );
};

export default Humberger;
