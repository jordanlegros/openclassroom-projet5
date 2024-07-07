import React from "react";
import styles from "../styles/Tag.scss";

const Tag = ({ title }) => {
  return (
    <div className="Tag">
      <span className="Tag__text">{title}</span>
    </div>
  );
};

export default Tag;