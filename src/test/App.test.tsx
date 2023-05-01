import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe(App.name + " renders the correct text", () => {
  it("should render", () => {
    render(<App />);

    // Det undersøges om text som udelukkende stammer fra App.tsx
    // er der
    expect(screen.getByText("Planteland")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Kassen")).toBeInTheDocument();     
    
  });
});