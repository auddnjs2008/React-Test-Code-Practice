import TodoList from "../TodoList";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<TodoList/>", () => {
  const initalTodos = [
    {
      id: 1,
      text: "인생이란 무엇인가",
      done: false,
    },
    {
      id: 2,
      text: "삶이란 무엇인가",
      done: false,
    },
  ];

  it("render Todo Items", () => {
    render(<TodoList todos={initalTodos} />);
    screen.getByText(initalTodos[0].text);
    screen.getByText(initalTodos[1].text);
  });

  it("onToggle and onDelete Test on List", () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();
    render(
      <TodoList todos={initalTodos} onToggle={onToggle} onDelete={onDelete} />
    );

    const text = screen.getByText(initalTodos[0].text);
    const delBtn = screen.getAllByText("삭제")[0];

    userEvent.click(text);
    expect(onToggle).toBeCalledWith(initalTodos[0].id);

    userEvent.click(delBtn);
    expect(onDelete).toBeCalledWith(initalTodos[0].id);
  });
});
