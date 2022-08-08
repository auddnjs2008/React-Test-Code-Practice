import { render, screen } from "@testing-library/react";
import TodoItem from "../TodoItem";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("<TodoItem/>", () => {
  const initialTodo = {
    id: 1,
    text: "정말 인생을 자유롭게 살기",
    done: false,
  };

  it("render Span Tag and Delete Button", () => {
    render(<TodoItem todo={initialTodo} />);
    screen.getByText(initialTodo.text);
    screen.getByText("삭제");
  });

  it("show line through when todo is done", () => {
    render(<TodoItem todo={{ ...initialTodo, done: true }} />);
    const text = screen.getByText(initialTodo.text);
    expect(text).toHaveStyle("text-decoration:line-through;");
  });

  it("don't show line through when todo is undone", () => {
    render(<TodoItem todo={{ ...initialTodo, done: false }} />);
    const text = screen.getByText(initialTodo.text);
    expect(text).not.toHaveStyle("text-decoration:line-through;");
  });

  it("click Text, do Toggle Function ", () => {
    const onToggle = jest.fn();
    render(<TodoItem todo={initialTodo} onToggle={onToggle} />);
    const text = screen.getByText(initialTodo.text);
    userEvent.click(text);
    expect(onToggle).toBeCalledWith(initialTodo.id);
  });

  it("click DelBtn, do Del function", () => {
    const onDelete = jest.fn();
    render(<TodoItem todo={initialTodo} onDelete={onDelete} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(onDelete).toBeCalledWith(initialTodo.id);
  });
});
