import { fireEvent, render, screen } from "@testing-library/react";
import StringCalculator from "../StringCalculator";

describe("String Calculator Component", () => {
  test("renders input text & calculate button", () => {
    render(<StringCalculator />);
    expect(screen.getByTestId("input-field")).toBeInTheDocument();
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

  test('give input "1" & return output as 1', () => {
    render(<StringCalculator />);
    const input = screen.getByTestId("input-field");
    const button = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(input, {
      target: { value: "1" },
    });
    fireEvent.click(button);
    expect(screen.getByText(1)).toBeInTheDocument();
  });

  test('give input "1,5" & returns output 6', () => {
    render(<StringCalculator />);
    const input = screen.getByTestId("input-field");
    const button = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(input, {
      target: { value: "1,5" },
    });
    fireEvent.click(button);
    expect(screen.getByText(6)).toBeInTheDocument();
  });

  test('allow add method to handle new lines between numbers -> give input "1\n2,3" & returns output 6', () => {
    render(<StringCalculator />);
    const input = screen.getByTestId("input-field");
    const button = screen.getByRole("button", { name: "Calculate" });

    fireEvent.change(input, {
      target: { value: "1\n2,3" },
    });
    fireEvent.click(button);
    expect(screen.getByText(6)).toBeInTheDocument();
  });
});
