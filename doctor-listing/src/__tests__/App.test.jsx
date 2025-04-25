import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders autocomplete input", () => {
  render(<App />);
  expect(screen.getByTestId("autocomplete-input")).toBeInTheDocument();
});

test("renders filter headers", () => {
  render(<App />);
  expect(screen.getByTestId("filter-header-moc")).toBeInTheDocument();
  expect(screen.getByTestId("filter-header-speciality")).toBeInTheDocument();
  expect(screen.getByTestId("filter-header-sort")).toBeInTheDocument();
});

test("renders doctor list", async () => {
  render(<App />);
  expect(await screen.findByTestId("doctor-list")).toBeInTheDocument();
});
