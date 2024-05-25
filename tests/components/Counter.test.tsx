import { fireEvent, render } from "@testing-library/react";
import Counter from "../../src/components/Counter";

describe(Counter, () => {
  it("Counter should render intial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const count = getByTestId("count").textContent;
    expect(count).toBe("Count: 0");
  });

  it("Counter should increment count", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementButton = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    const count = getByTestId("count").textContent;
    expect(count).toBe("Count: 1");
  });
});
