import React from "react";
import "./Tag.css";
const Tag = ({ TagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[TagName] : tagStyle.default}
      onClick={() => selectTag(TagName)}
    >
      {TagName}
    </button>
  );
};

export default Tag;
