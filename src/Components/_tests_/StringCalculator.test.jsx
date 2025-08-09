import { render, screen } from "@testing-library/react";
import StringCalculator from "../StringCalculator";

describe("String Calculator Component", () => {
  test("renders input text & calculate button", () => {
    render(<StringCalculator />);
    expect(screen.getByPlaceholderText(/enter numbers/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Calculate/i })
    ).toBeInTheDocument();
  });
});
