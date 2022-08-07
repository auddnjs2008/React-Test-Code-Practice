import { render } from "@testing-library/react";
import TodoList from "../TodoList";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("<TodoList/>", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  it("renders toods properly", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onRemove={onRemove} onToggle={onToggle} />
    );

    userEvent.click(getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    userEvent.click(getAllByText("삭제")[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
