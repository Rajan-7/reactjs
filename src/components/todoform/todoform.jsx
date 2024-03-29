import React, { useEffect, useState } from "react";
import "./style.css";

const getLocalData=()=>{
  const list=localStorage.getItem("myTodo");
  if(list){
    return JSON.parse(list);
  }
  else{
    return [];
  }
}

const Todoform = () => {
  const [inputTask, setInputTask] = useState("");
  const [itemsList, setItemsList] = useState(getLocalData());
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

  // making complete button toggle
  const taskCompleted = (id) => {
    const element = itemsList.findIndex((curElem) => curElem.id === id);
    const newItemsList = [...itemsList];
    newItemsList[element] = {
      ...newItemsList[element],
      isCompleted: !newItemsList[element].isCompleted,
    };
    setItemsList(newItemsList);
  };
  // for local storage
  useEffect(()=>{
    localStorage.setItem("myTodo",JSON.stringify(itemsList));
  },[itemsList]);


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
                <h6
                  className={
                    curElem.isCompleted ? "completed" : "not-completed"
                  }
                >
                  {curElem.name}
                </h6>
                <div className="action">
                  <button
                    className="edit"
                    onClick={() => {
                      edititems(curElem.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => taskCompleted(curElem.id)}
                    className="completed-1"
                  >
                    completed
                  </button>
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
