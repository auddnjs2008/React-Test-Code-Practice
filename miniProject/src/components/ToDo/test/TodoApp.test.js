import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../TodoApp";

import "@testing-library/jest-dom";

describe("<TodoApp/>", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("등록");
    getByTestId("TodoList");
  });

  it("renders two defaults todos", () => {
    const { getByText } = render(<TodoApp />);
    getByText("TDD 배우기");
    getByText("react-testing-library 사용하기");
  });

  it("create new todos", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    userEvent.type(
      getByPlaceholderText("할 일을 입력하세요"),
      "새 항목 추가하기"
    );
    userEvent.click(getByText("등록"));

    getByText("새 항목 추가하기");
  });

  it("toggles todo", () => {
    const { getByText } = render(<TodoApp />);

    const todoText = getByText("TDD 배우기");
    expect(todoText).toHaveStyle("text-decoration:line-through");
    userEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-height");
    userEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration:line-through");
  });

  it("remove todo", () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText("TDD 배우기");
    const removeBtn = todoText.nextSibling;
    userEvent.click(removeBtn);
    expect(todoText).not.toBeInTheDocument();
  });
});
