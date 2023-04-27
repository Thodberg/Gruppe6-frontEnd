import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Kassen } from "../pages/Kassen";

describe('Rendering', () => {
    it('renders the of correct labels', () => {
        render(<Kassen/>);
        expect(screen.getByText("Leveringsinformationer:")).toBeInTheDocument();
        expect(screen.getByText("Fornavn")).toBeInTheDocument();        
        expect(screen.getByText("Efternavn")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(screen.getByText("Choose a country to ship to")).toBeInTheDocument();        
        expect(screen.getByText("Adresse 1")).toBeInTheDocument();
        expect(screen.getByText("Telefonnummer")).toBeInTheDocument();        
        expect(screen.getByText("Firmanavn")).toBeInTheDocument();
        expect(screen.getByText("firma VAT")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();        
        expect(screen.getByText("Jeg vil gerne modtage nyhedsbrev og tilbud")).toBeInTheDocument();
        expect(screen.getByText("Til betaling")).toBeInTheDocument(); 
        expect(screen.getByText("Submit")).toBeInTheDocument();             
        //screen.getByRole("heading", {name: "" });    
    })     
    
});

describe('Function of form', () => {

    it('Field validation', () => {
        render(<Kassen/>);
        
    })  
    
    it('Correct post request by submit', () => {
        render(<Kassen/>);
        
    })     
    
});

