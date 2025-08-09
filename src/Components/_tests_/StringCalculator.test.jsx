import { fireEvent, render, screen } from "@testing-library/react";
import StringCalculator from "../StringCalculator";

describe("String Calculator Component", () => {
  test("renders input text & calculate button", () => {
    render(<StringCalculator />);
    expect(screen.getByPlaceholderText(/enter numbers/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Calculate/i })
    ).toBeInTheDocument();
  });

  test("clicking Calculate button with empty value , it must show 0", () => {
    render(<StringCalculator />);
    const button = screen.getByRole("button", { name: "Calculate" });

    fireEvent.click(button);
    expect(screen.getByText(0)).toBeInTheDocument();
  });
});
