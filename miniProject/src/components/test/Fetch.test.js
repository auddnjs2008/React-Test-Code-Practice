import { render, screen, waitFor } from "@testing-library/react";
import Fetch from "../Fetch";
import "@testing-library/jest-dom";

describe("Fetch", () => {
  it("should load result", async () => {
    render(<Fetch />);

    expect(screen.getByText("Loading")).toBeInTheDocument();

    expect(await screen.findAllByRole("listitem")).toHaveLength(2);

    // await waitFor(() => {
    //   expect(screen.getAllByRole("listitem")).toHaveLength(2);
    // });
  });
});
