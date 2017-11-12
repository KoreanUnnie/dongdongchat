import { shallow } from "enzyme";
import DashboardPage from "./../../components/DashboardPage";
import React from "react";

test("should render DashboardPage correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
