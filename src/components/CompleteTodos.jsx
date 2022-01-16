import React from "react";

export const CompleteTodos = (props) => {
  return (
    <div className="complete-area">
      <p>完了したTODO</p>
      <ul id="complete-list">
        {props.todos.map((todo, index) => {
          return (
            <li className="list-row" key={index}>
              <p className="todo-text">{todo}</p>
              <button onClick={() => props.onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
