import TodoForm from "../TodoForm";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<TodoForm/>", () => {
  it("should render this Element", () => {
    render(<TodoForm />);
    screen.getByPlaceholderText("할 일을 입력해주세요");
    screen.getByRole("button");
  });

  it("Changes Input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력해주세요");
    userEvent.type(input, "TDD 배우기");
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("Submit and Implement Function with Inputvalue", () => {
    const onInsert = jest.fn();
    render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText("할 일을 입력해주세요");
    const button = screen.getByRole("button");
    userEvent.type(input, "TDD 배우기");
    userEvent.click(button);
    expect(input).toHaveAttribute("value", "");
    expect(onInsert).toBeCalledWith("TDD 배우기");
  });
});
