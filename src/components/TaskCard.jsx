import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteicon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is simple text.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag TagName="HTML" />
          <Tag TagName="CSS" />
        </div>
        <div className="task_delete">
          <img src={deleteicon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
