import * as React from "react";
import * as ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
//import Fetch from "../fetch";

//import App from "./App";
import CurrentWeather from "./components/CurrentWeather";

const render = (component) => {
  const root = document.createElement("div");
  ReactDOM.render(component, root);
  return getQueriesForElement(root);
};

test("renders the corrent content", () => {
  const { getByText } = render(<CurrentWeather />);

  getByText("Some Test");
  getByText();
});
