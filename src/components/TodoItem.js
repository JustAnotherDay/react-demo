import React from "react";

function TodoItem(props) {
  return (
    <div className="list-group-item list-group-item-action">
      <label>
        <input id="cb1" type="checkbox" checked={props.todoInfo.isDone}/>
        &nbsp;{props.todoInfo.todo}
      </label>
    </div>
  );
}

export default TodoItem;
