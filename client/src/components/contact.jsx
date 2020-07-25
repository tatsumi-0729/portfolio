import React from "react";
import "../scss/contact.scss";

const contact = () => {
  return (
    <div className="contact">
      <div className="contact_container">
        <h3 className="contact_text">Contact</h3>
        <label htmlFor="_title" className="title_text">
          Title
        </label>
        <input id="_title" className="title" type="text" />
        <label htmlFor="_email" className="email_text">
          Email
        </label>
        <input id="_email" className="email" type="text" />
        <label htmlFor="_content" className="content_text">
          Content
        </label>
        <textarea id="_content" className="content" />
        <button className="send_button">Send</button>
      </div>
    </div>
  );
};

export default contact;
