import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう", "えええ"]);

  const spliceTodo = (index, list, setter) => {
    const newList = [...list];
    newList.splice(index, 1);
    setter(newList);
  };

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    // eslint-disable-next-line no-undef
    alert(todoText);
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    spliceTodo(index, incompleteTodos, setIncompleteTodos);
  };
  const onClickComplete = (index) => {
    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodo);
    spliceTodo(index, incompleteTodos, setIncompleteTodos);
  };
  const onClickRevert = (index) => {
    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    spliceTodo(index, completeTodos, setCompleteTodos);
  };
  return (
    <>
      <div className="input-area">
        <input value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了済のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickRevert(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
