import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Home } from "../pages/Home";
import MockData from "../mockData2.json"

describe('Rendering', () => {
    it('renders the correct text at start', () => {
        
        console.log("halli hallo " + MockData[0].currency);
        render(<Home />);
        expect(screen.getByText("Ordreoversigt")).toBeInTheDocument();
        expect(screen.getByText("Subtotal: 716 DKK")).toBeInTheDocument();
        expect(screen.getByText("Levering: 0 DKK")).toBeInTheDocument();
        expect(screen.getByText("Total: 716 DKK")).toBeInTheDocument();
        //screen.getByRole("heading", {name: "" });        
    })     
});

describe('Calculation of prices and quantity', () => {
    it('Interaction between quantity and buttons in single product', () => {
        render(<Home />);
        //screen.getByRole("heading", {name: "" });        
    })     
    it('Calculation of discount for single product', () => {
        render(<Home />);
        //screen.getByRole("heading", {name: "" });        
    })     
    it('Calculation of discount based on subtotal of order', () => {
        render(<Home />);
        //screen.getByRole("heading", {name: "" });        
    })     
    it('Calculation of  Total price with delivery', () => {
        render(<Home />);
        //screen.getByRole("heading", {name: "" });        
    })     

});
