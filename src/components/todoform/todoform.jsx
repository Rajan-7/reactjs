import React, { useState } from "react";
import "./style.css";


const Todoform = () => {
  const [inputTask, setInputTask] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [editedTaskList, setEditedTaskList] = useState("");

  // adding task/items functions
  const addTask = () => {
    if (!inputTask) {
      alert(`Please fill up the task/items`);
    } else if (editedTaskList) {
      setItemsList(
        itemsList.map((curElem) => {
          if (curElem.id === editedTaskList) {
            return { ...curElem, name: inputTask };
          }
          return curElem;
        })
      );
      setInputTask("");
      setEditedTaskList("");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputTask,
      };
      setItemsList([...itemsList, myNewInputData]);
      setInputTask("");
    }
  };

  // delete items/task functions
  const deleteItems = (index) => {
    const updatedNewItems = itemsList.filter((curElem) => {
      return curElem.id !== index;
    });
    setItemsList(updatedNewItems);
  };

  // editing items/task functions
  const edititems = (index) => {
    const myEditedItems = itemsList.find((curElem) => {
      return curElem.id === index;
    });
    setInputTask(myEditedItems.name);
    setEditedTaskList(index);
  };

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
            onChange={(event) => setInputTask(event.target.value)}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>
        <div className="showitems">
          {itemsList.map((curElem, index) => {
            return (
              <div className="li">
                <h6 className="crossText">{curElem.name}</h6>
                <div className="action">
                  <button
                    className="edit"
                    onClick={() => {
                      edititems(curElem.id);
                    }}
                  >
                    Edit
                  </button>
                  <button className="completed">completed</button>
                  <button
                    className="delete"
                    onClick={() => deleteItems(curElem.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todoform;
