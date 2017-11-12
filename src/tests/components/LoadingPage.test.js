import { shallow } from "enzyme";
import LoadingPage from '../../components/LoadingPage';
import React from "react";

test("should render LoadingPage correctly", () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
