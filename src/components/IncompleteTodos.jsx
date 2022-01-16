import React from "react";

export const IncompleteTodos = (props) => {
  console.log(props);
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="imcomplete-area">
      <p>未完了のTODO / hoge</p>
      <ul id="imcomplete-list">
        {todos.map((todo, index) => {
          return (
            <li className="list-row" key={index}>
              <p className="todo-text">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
