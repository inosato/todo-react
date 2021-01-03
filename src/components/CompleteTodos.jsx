import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickRevert } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickRevert(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
