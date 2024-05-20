import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserAccount from "@/components/UserAccount";

describe("UserAccount", () => {
  it("should render the user's name", () => {
    const user = { id: "1", name: "Billy Joel", email: "uptowngirl@bj.com" };

    render(<UserAccount user={user} />);

    const name = screen.getByText(user.name);

    // Assertions
    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent(user.name);
  });

  it("should render an edit button if the user is an admin", () => {
    render(
      <UserAccount
        user={{
          id: "1",
          name: "Billy Joel",
          email: "uptowngirl@bj.com",
          isAdmin: true,
        }}
      />
    );

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render an edit button if the user is not an admin", () => {
    render(
      <UserAccount
        user={{ id: "1", name: "Billy Joel", email: "uptowngirl@bj.com" }}
      />
    );

    const button = screen.queryByRole("button");

    // Assertion
    expect(button).not.toBeInTheDocument();
  });
});
