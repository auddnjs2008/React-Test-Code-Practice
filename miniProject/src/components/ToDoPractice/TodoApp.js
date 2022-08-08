import React, { useCallback, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "조광일의 노래를 듣기",
      done: false,
    },
    {
      id: 2,
      text: "조광일의 혀발음 연습하기",
      done: false,
    },
  ]);

  const onInsert = useCallback((text) => {
    setTodos((prev) => [...prev, { id: prev.length + 1, text, done: false }]);
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }, []);

  const onDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
};

export default TodoApp;
