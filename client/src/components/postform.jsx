import React from "react";
import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";
import "../scss/postform.scss";

const Postform = (props) => {
  const state = {
    title: "",
    email: "",
    content: "",
    image: "",
  };

  // useState
  const [requestData, fetchDate] = useState(state);

  // 送信ボタンが押された時
  const postAxios = async () => {
    const res = await axios.post(
      "http://localhost:3000/newArticle",
      requestData
    );
    console.log(requestData.title);
    console.log(requestData.email);
    console.log(requestData.image);
    console.log(requestData.content);
    console.log(res.data);
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
            onChange={(e) =>
              fetchDate({ ...requestData, title: e.target.value })
            }
          />
          <label htmlFor="_email" className="email_text">
            Email
          </label>
          <input
            id="_email"
            className="email"
            type="text"
            onChange={(e) =>
              fetchDate({ ...requestData, email: e.target.value })
            }
          />
          <label htmlFor="_content" className="content_text">
            Content
          </label>
          <textarea
            id="_content"
            className="content"
            onChange={(e) =>
              fetchDate({ ...requestData, content: e.target.value })
            }
          />
          <button className="send_button" onClick={postAxios}>
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
            onChange={(e) =>
              fetchDate({ ...requestData, title: e.target.value })
            }
          />
          <label htmlFor="_email" className="email_text">
            Image
          </label>
          <input
            id="_image"
            className="image"
            type="file"
            onChange={(e) =>
              fetchDate({ ...requestData, image: e.target.value })
            }
          />
          <label htmlFor="_image" className="image_text">
            Content
          </label>
          <textarea
            id="_content"
            className="content"
            onChange={(e) =>
              fetchDate({ ...requestData, content: e.target.value })
            }
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
