import React, { useState } from "react";
import "./style.css";

const Todoform = () => {
  const [inputTask,setInputTask]=useState("");
  const [itemsList,setItemsList]=useState([]);

  // adding task/items functions
  const addTask=()=>{
    if(!inputTask){
      alert(`Please fill up the task/items`);
    }
    else{
      const myNewInputData={
        id:new Date().getTime().toString(),
        name:inputTask
      }
      setItemsList([...itemsList,myNewInputData]);
      setInputTask('');
    }
  }
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
            value={inputTask}
            onChange={(event)=>setInputTask(event.target.value)}
          />
          <button className="add-btn" onClick={addTask}>Add</button>
        </div>
        <div className="showitems">
          {
            itemsList.map((curElem,index)=>{
              return(
                <div className="li">
                <h6 className="crossText">{curElem.name}</h6>
                <div className="action">
                  <button className="edit">Edit</button>
                  <button className="completed">completed</button>
                  <button className="delete">Delete</button>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Todoform;
