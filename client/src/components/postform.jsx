import React from "react";
import { useState, useReducer } from "react";
import axiosReducer from "../reducer/axiosReducer";
import "../scss/postform.scss";

const Postform = (props) => {
  // useState
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  // useReducer
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(axiosReducer, []);

  const contactAxios = (e) => {
    // ページのリロード回避
    // e.preventDefault();
    dispatch({
      type: "POST",
      url: "http://localhost:3000/api/v1/contact/create",
      requestData: [title, email, content],
    });
    clearFeild();
    console.log("complete");
  };

  const postAxios = (e) => {
    e.preventDefault();
    dispatch({
      type: "POST",
      url: "http://localhost:3000/api/v1/article/create",
      requestData: [title, image, content],
    });
    clearFeild();
    console.log("complete");
  };

  const clearFeild = () => {
    setTitle("");
    setImage("");
    setEmail("");
    setContent("");
  };

  if (props.title === "Contact") {
    return (
      <div className="postform">
        <div className="postform_container">
          <h3 className="postform_text">{props.title}</h3>
          <label htmlFor="_title" className="title_text">
            Title
          </label>
          <input
            id="_title"
            className="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="_email" className="email_text">
            Email
          </label>
          <input
            id="_email"
            className="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="_content" className="content_text">
            Content
          </label>
          <textarea
            id="_content"
            className="content"
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="send_button" onClick={contactAxios}>
            Send
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="postform">
        <div className="postform_container">
          <h3 className="postform_text">{props.title}</h3>
          <label htmlFor="_title" className="title_text">
            Title
          </label>
          <input
            id="_title"
            className="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="_email" className="email_text">
            Image
          </label>
          <input
            id="_image"
            className="image"
            type="file"
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="_image" className="image_text">
            Content
          </label>
          <textarea
            id="_content"
            className="content"
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="send_button" onClick={postAxios}>
            Send
          </button>
        </div>
      </div>
    );
  }
};

export default Postform;
