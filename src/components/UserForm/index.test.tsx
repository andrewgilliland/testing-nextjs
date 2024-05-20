import { render, screen, fireEvent } from "@testing-library/react";
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
  // const argList: any = [];
  // const callback = (...args: any) => {
  //   console.log("args:", args);
  //   argList.push(args);
  // };

  //! BETTER IMPLEMENTATION
  const mock = jest.fn();

  //* Try to render the component
  render(<UserForm onUserAdd={mock} />);

  //* Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  //* Simulate typing in a name
  fireEvent.click(nameInput);
  fireEvent.change(nameInput, { target: { value: "Billy Joel" } });

  //* Simulate typing in an email
  fireEvent.click(emailInput);
  fireEvent.change(emailInput, { target: { value: "uptowngirl@bj.com" } });

  //* Find the submit button
  const button = screen.getByRole("button");

  //* Simulate clicking the submit button
  fireEvent.click(button);

  //* Assertion to make sure 'onUserAdd' was called with name and email
  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({
  //   name: "Billy Joel",
  //   email: "uptowngirl@bj.com",
  // });
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "Billy Joel",
    email: "uptowngirl@bj.com",
    id: "1",
  });
});
