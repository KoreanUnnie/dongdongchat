import { login, logout } from "../../actions/auth";

test("should login", () => {
  const action = login("101010");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "101010"
  });
});

test("should logout", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
