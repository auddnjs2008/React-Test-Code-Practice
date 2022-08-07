import { render } from "@testing-library/react";
import React from "react";
import Profile from "../Profile";

describe("<Profile/>", () => {
  it("mathces snapshot", () => {
    const utils = render(<Profile username="const" name="auddnjs" />);
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the props correctly", () => {
    const utils = render(<Profile username="const" name="auddnjs" />);
    utils.getByText("const");
    utils.getByText("(auddnjs)");
    utils.getByText(/auddnjs/);
  });
});
