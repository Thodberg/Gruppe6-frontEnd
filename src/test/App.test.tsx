import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe(App.name, () => {
  it("should render", () => {
    render(<App />);
    //expect(screen.getByLabelText("Artist name:")).toBeInTheDocument();
    expect(screen.getByText("Planteland")).toBeInTheDocument();
    expect(screen.getByText("Ordreoversigt")).toBeInTheDocument();
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("Levering")).toBeInTheDocument();
    expect(screen.getByText("Ordreoversigt")).toBeInTheDocument();

  });
});

