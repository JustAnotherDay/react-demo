import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem.js";
import * as TodoService from "../services/TodoService.js";

function MainContent() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.GetLoginToken().then((token) => {
      TodoService.GetTodoItems(token).then((result) => {
        const todoItems = result.todos.reduce((filtered, item, idx) => {
          if(item.todo){
            let newTodoItem = 
              <TodoItem
                key={idx}
                todoInfo={{ todo: item.todo, isDone: item.isDone }}
              />;
          filtered.push(newTodoItem);
          }
          return filtered;
        }, []);

        setTodos(todoItems);
      });
    });
  }, []);

  
  return (
    <div className="Main-content">
      <div className="list-group">
        {todos}
      </div>
    </div>
  );
}

export default MainContent;
