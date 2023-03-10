import { render, screen } from "@testing-library/react";

import AppCrash from "../components/ErrorBoundaries/AppCrash";

describe("App crash Component", () => {
  it("render App crash component", () => {
    render(<AppCrash />);
    expect(screen.getByTestId("app-crash")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const {container} =render(
      <AppCrash />
    )
    expect(container).toMatchSnapshot()
  });
});
