import React from "react";
import { useParams } from "react-router";
import "../scss/reference.scss";

function Reference() {
  const { id } = useParams();
  return (
    <div className="reference">
      <h2 className="reference_text">articleId : {id}</h2>
    </div>
  );
}

export default Reference;
