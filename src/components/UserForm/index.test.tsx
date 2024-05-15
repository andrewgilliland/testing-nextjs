import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./index";
import "@testing-library/jest-dom";

test("UserForm should render a form with name and email input and a submit button", () => {
  //* render the component
  render(<UserForm onUserAdd={() => {}} />);

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
  const argList: any = [];
  const callback = (...args: any) => {
    console.log("args:", args);
    argList.push(args);
  };

  //* Try to render the component
  render(<UserForm onUserAdd={callback} />);

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

  //* Assertion to make sure 'onUserAdd' was called with name and email
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({
    name: "Billy Joel",
    email: "uptowngirl@bj.com",
  });
});
