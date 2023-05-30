import React from "react";
import "./style.css";

const Todoform = () => {
  return (
    <div className="todo-container width-100">
      <div className="todo-container width-50">
        <img src="./images/Todo.svg" alt="todo"></img>
        <div className="inputclass">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Add items/task here"
          />
          <button className="add-btn">Add</button>
        </div>
        <div className="ul">
          <div className="li">
            <h6 className="crossText">Motivation to code</h6>
            <div className="action">
              <button className="edit">Edit</button>
              <button className="completed">completed</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todoform;
