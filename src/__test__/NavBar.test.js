import React from "react";
import { create } from "react-test-renderer";
import NavBar from "../NavBar";

test("snapshor", () => {
  const c = create(<NavBar />);
  expect(c.toJSON()).toMatchSnapshot();
});
