import React from "react";
import TodoItem from "./TodoItem.js";

function MainContent() {
  return (
    <div className="Main-content">
      <div className="list-group">
          <TodoItem />
          <TodoItem />
      </div>
    </div>
  );
}

export default MainContent;
