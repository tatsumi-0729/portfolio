import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "../scss/blog.scss";

import Reference from "./reference";

const blog = () => {
  return (
    <div className="blog">
      <div className="card_container">
        {/* <!-- card1 --> */}
        <div className="card card-skin">
          {/* ここでarticleIdを渡してあげる */}
          <Link to="/reference/5" style={{ textDecoration: "none" }}>
            <div className="card_imgframe"></div>
            <div className="card_textbox">
              <div className="card_title">My First Post</div>
              <div className="card_content">
                My First Post.
                <br />
                please see in.
              </div>
              <div className="card_post_day">Jul. 2020</div>
            </div>
          </Link>
        </div>
        <Router>
          <Switch>
            <Route path="/reference/:id" component={Reference}></Route>
          </Switch>
        </Router>
        {/* <!-- card2 --> */}
        <div className="card card-skin">
          {/* <router-link :to="{ name: 'Reference' }" class="reference"> */}
          <div className="card_imgframe"></div>
          <div className="card_textbox">
            <div className="card_title">My Second Post</div>
            <div className="card_content">
              My Second Post.
              <br />
              please see in.
              <br />
              xoxo
            </div>
            <div className="card_post_day">Jun. 2020</div>
          </div>
          {/* </router-link> */}
        </div>
        {/* <!-- card3 --> */}
        <div className="card card-skin">
          {/* <router-link :to="{ name: 'Reference' }" class="reference"> */}
          <div className="card_imgframe"></div>
          <div className="card_textbox">
            <div className="card_title">My Third Post</div>
            <div className="card_content">
              My Third Post.
              <br />
              please see in.
            </div>
            <div className="card_post_day">May. 2020</div>
          </div>
          {/* </router-link> */}
        </div>
        {/* <!-- card4 --> */}
        <div className="card card-skin">
          {/* <router-link :to="{ name: 'Reference' }" class="reference"> */}
          <div className="card_imgframe"></div>
          <div className="card_textbox">
            <div className="card_title">My Fouth Post</div>
            <div className="card_content">
              My Fouth Post.
              <br />
              please see in.
              <br />
              xoxo
            </div>
            <div className="card_post_day">May. 2020</div>
          </div>
          {/* </router-link> */}
        </div>
        {/* <!-- card5 --> */}
        <div className="card card-skin">
          {/* <router-link :to="{ name: 'Reference' }" class="reference"> */}
          <div className="card_imgframe"></div>
          <div className="card_textbox">
            <div className="card_title">My Fifth Post</div>
            <div className="card_content">
              My Fifth Post.
              <br />
              please see in.
            </div>
            <div className="card_post_day">May. 2020</div>
          </div>
          {/* </router-link> */}
        </div>
        {/* <!-- card6 --> */}
        <div className="card card-skin">
          {/* <router-link :to="{ name: 'Reference' }" class="reference"> */}
          <div className="card_imgframe"></div>
          <div className="card_textbox">
            <div className="card_title">My Sixth Post</div>
            <div className="card_content">
              My Sixth Post.
              <br />
              please see in.
            </div>
            <div className="card_post_day">May. 2020</div>
          </div>
          {/* </router-link> */}
        </div>
        {/* <!-- card7 --> */}
        <div className="card card-skin">
          {/* <router-link :to="{ name: 'Reference' }" class="reference"> */}
          <div className="card_imgframe"></div>
          <div className="card_textbox">
            <div className="card_title">My Seventh Post</div>
            <div className="card_content">
              My Seventh Post.
              <br />
              please see in.
            </div>
            <div className="card_post_day">May. 2020</div>
          </div>
          {/* </router-link> */}
        </div>
      </div>
    </div>
  );
};

export default blog;
