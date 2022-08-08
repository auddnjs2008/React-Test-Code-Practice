import React, { useCallback } from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const toggle = useCallback(() => onToggle(todo.id), [onToggle]);
  const del = useCallback(() => onDelete(todo.id), [onDelete]);
  return (
    <li>
      <span
        onClick={toggle}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={del}>삭제</button>
    </li>
  );
};

export default React.memo(TodoItem);
