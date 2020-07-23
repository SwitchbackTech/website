import React from "react";
import { render } from "@testing-library/react";
import Blog from "./index";

describe("Jest demo", () => {
  it("10 equals 10", () => {
    expect(10).toEqual(10);
  });
});

describe("React Testing Library Demo", () => {
  const Title = () => <h1 data-testid="hero-title">Ty rox</h1>;

  test("Displays the correct title", () => {
    const { getByTestId } = render(<Title />);
    expect(getByTestId("hero-title")).toHaveTextContent("Ty rox");
  });
});
