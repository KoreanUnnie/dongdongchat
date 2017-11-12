import { LoginPage } from "./../../components/LoginPage";
import { shallow } from "enzyme";
import React from "react";

let startLogin, wrapper;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});

test("should render LoginPage correctly", () => {
  shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("should call startLogin() on button click", () => {
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
