import { render, screen } from "@testing-library/react";
import TodoApp from "../TodoApp";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

describe("<TodoApp/>", () => {
  it("render TodoForm and TodoList", () => {
    render(<TodoApp />);
    screen.getByTestId("todoForm");
    screen.getByTestId("todoList");
  });

  it("renders InitTodos", () => {
    render(<TodoApp />);
    screen.getByText("조광일의 노래를 듣기");
    screen.getByText("조광일의 혀발음 연습하기");
  });

  it("create new Todos", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("할 일을 입력해주세요");
    const button = screen.getByText("submit");
    userEvent.type(input, "새로운 음악들을 느끼기");
    userEvent.click(button);
    screen.getByText("새로운 음악들을 느끼기");
  });

  it("toggles Todos", () => {
    render(<TodoApp />);
    const text = screen.getByText("조광일의 혀발음 연습하기");
    expect(text).not.toHaveStyle("text-decoration:line-through");
    userEvent.click(text);
    expect(text).toHaveStyle("text-decoration:line-through");
  });

  it("delete Todo", () => {
    render(<TodoApp />);
    const text = screen.getByText("조광일의 노래를 듣기");
    const delBtn = screen.getAllByText("삭제")[0];
    userEvent.click(delBtn);
    expect(text).not.toBeInTheDocument();
  });
});
