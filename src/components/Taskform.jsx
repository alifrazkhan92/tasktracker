import React from "react";
import "./Taskform.css";
import "./Tag.jsx";
import { Tag } from "./Tag.jsx";

const Taskform = () => {
  return (
    <>
      <header className="app_header">
        <form>
          <input
            type="text"
            className="task_input"
            placeholder="Enter your task"
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag tagName="HTML" />
              <Tag tagName="CSS" />
              <Tag tagName="JavaScript" />
              <Tag tagName="REACT" />
            </div>
            <div>
              <select className="task_status">
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default Taskform;
