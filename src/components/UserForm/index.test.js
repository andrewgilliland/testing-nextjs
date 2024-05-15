import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./index";
import "@testing-library/jest-dom";

test("UserForm should render a form with name and email input and a submit button", () => {
  //* render the component
  render(<UserForm />);

  //* Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //* Assertion - make sure the component is doing
  //* what it is supposed to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("UserForm should call onUserAdd when the form is submitted", () => {
  //! NOT THE BEST IMPLEMENTATION
  //* Try to render the component

  render(<UserForm />);
  //* Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  //* Simulate typing in a name
  user.click(nameInput);
  user.keyboard("Billy Joel");

  //* Simulate typing in an email
  user.click(emailInput);
  user.keyboard("uptowngirl@bj.com");

  //* Find the submit button
  const button = screen.getByRole("button");

  //* Simulate clicking the submit button
  user.click(button);
});
