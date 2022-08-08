import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul data-testid="todoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          key={todo.id}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
