import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PersonCard from "../src/components/personcard";


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with person as props", () => {
  const fakePerson = {
    firstName:'Farzane',
    lastName:'mgh',
    email:'asd@gmail.com',
    phone:'23456789',
    gender:'female'
};

  act(() => {
    render(<BrowserRouter><PersonCard person={fakePerson} /></BrowserRouter>, container);
  });
  expect(container.querySelector(".header").querySelector('[name="user"').textContent).toBe(fakePerson.firstName +' '+ fakePerson.lastName);
  expect(container.querySelector(".description").querySelector('[name="mail"').textContent).toBe(fakePerson.email);
  expect(container.querySelector(".description").querySelector('[name="phone"').textContent).toBe(fakePerson.phone);
  expect(container.querySelector(".description").querySelector('[name="gender"').textContent).toBe(fakePerson.gender);
});
