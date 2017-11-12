import { shallow } from "enzyme";
import NotFoundPage from "./../../components/NotFoundPage";
import React from "react";

test("should render NotFound correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
