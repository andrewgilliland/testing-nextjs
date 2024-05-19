import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserAccount from "@/components/UserAccount";

describe("UserAccount", () => {
  it("should render the user's name", () => {
    render(<UserAccount user={{ id: "1", name: "Billy Joel" }} />);

    const name = screen.getByText(/billy joel/i);

    // Assertions
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent(/billy joel/i);
  });

  it("should render an edit button if the user is an admin", () => {
    render(
      <UserAccount user={{ id: "1", name: "Billy Joel", isAdmin: true }} />
    );

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should not render an edit button if the user is not an admin", () => {
    render(<UserAccount user={{ id: "1", name: "Billy Joel" }} />);

    const button = screen.queryByRole("button");

    // Assertion
    expect(button).not.toBeInTheDocument();
  });
});
