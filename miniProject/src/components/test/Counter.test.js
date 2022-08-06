import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";
import userEvent from "@testing-library/user-event";

describe("Counter test", () => {
  it("should render Counter", () => {
    render(<Counter />);
    const target = screen.getByRole("button", { name: "+" });
    userEvent.click(target);

    expect(screen.getByText("1")).toBeTruthy();
  });
});
