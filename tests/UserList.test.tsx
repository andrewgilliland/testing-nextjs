import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "@/components/UserList";
import { User } from "@/app/page";

describe("UserList", () => {
  it("should render no users when the users array is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      { id: "1", name: "Billy Joel", email: "bjoel@gmail.com" },
      { id: "2", name: "Elton John", email: "ejohn@gmail.com" },
      { id: "3", name: "Freddie Mercury", email: "fmercury@gmail.com" },
    ];

    render(<UserList users={users} />);

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
