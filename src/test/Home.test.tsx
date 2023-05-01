import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "../pages/Home";
import MockData from "../mockData2.json"
import Delivery from "../Delivery.json"
import App from "../App";
import { AriaLabelStr } from '../models/AriaLabelStr';

import { Product } from '../models/Product';

describe('Rendering', () => {
    it('renders the correct text at start', () => {

        console.log("halli hallo " + MockData[0].currency);
        render(<App />);
        expect(screen.getByText("Ordreoversigt")).toBeInTheDocument();
        expect(screen.getByText("Subtotal: 3910.28 DKK")).toBeInTheDocument();
        expect(screen.getByText("Levering: 0 DKK")).toBeInTheDocument();
        expect(screen.getByText("Total: 3910.28 DKK")).toBeInTheDocument();
        //screen.getByRole("heading", {name: "" });        
    })
});

describe(App.name + 'Calculation of prices and quantity', () => {
    it('det testes at et produkt forsvinder fra listen når der trykkes på skraldespand', async () => {
        render(<App />);
        // det testes at et produkt forsvinder fra listen når der trykkes på skraldespand
        expect(screen.getByRole("heading", { name: MockData[0].id + AriaLabelStr.bulkDiscount }))
            .toHaveTextContent("434.48 DKK");
        expect(screen.getByText("Total: 3910.28 DKK")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.removeProductFromList) }))
        //expect(screen.getByText("Total: 378 DKK")).toBeInTheDocument(); 
        // Her en fejl det totale beløb opdateres ikke korrekt
    })

    it('det testes at + og - knapper virker at rabat på enkelt produkt nivaeu virker', async () => {
        render(<App />);
        // det testes at quantity ændres korrekt når tastes på + 
        expect(screen.getByRole("heading", { name: MockData[0].name + "" })).toBeInTheDocument();
        expect(screen.getByText("Sum: 3910.28 DKK")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: MockData[0].id + AriaLabelStr.bulkDiscount }))
            .toHaveTextContent("338 DKK");
        expect(screen.getByRole("heading", { name: MockData[0].id + AriaLabelStr.quantity }))
            .toHaveTextContent("2")
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.addOneQuantityToList) }))
        expect(screen.getByText("Sum: 834.3 DKK")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: MockData[0].id + AriaLabelStr.bulkDiscount }))
            .toHaveTextContent("456.3 DKK"); // her har rabat for 3 stk trådt i kraft
        expect(screen.getByRole("heading", { name: MockData[0].id + AriaLabelStr.quantity }))
            .toHaveTextContent("3")
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.removeOneQuantityToList) }))
        expect(screen.getByText("Sum: 716 DKK")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: MockData[0].id + AriaLabelStr.bulkDiscount }))
            .toHaveTextContent("338 DKK"); // her har rabat for 3 stk trådt ud af kraft
        expect(screen.getByRole("heading", { name: MockData[0].id + AriaLabelStr.quantity }))
            .toHaveTextContent("2")
    })

    it('det testes om total pris beregnes rigtigt udfra levering', async () => {
        render(<App />);

        // Dette er default levering i planteland
        expect(screen.getByText("Subtotal: 716 DKK")).toBeInTheDocument();
        expect(screen.getByText("Levering: 0 DKK")).toBeInTheDocument();
        expect(screen.getByText("Total: 716 DKK")).toBeInTheDocument();

        // Dette er levering af Bring
        fireEvent.click(screen.getByRole("radio", { name: "Bring" }))
        expect(screen.getByText("Subtotal: 716 DKK")).toBeInTheDocument();
        expect(screen.getByText("Levering: 46 DKK")).toBeInTheDocument();
        expect(screen.getByText("Total: 762 DKK")).toBeInTheDocument();

        // Dette er levering af GLS
        fireEvent.click(screen.getByRole("radio", { name: "GLS" }))
        expect(screen.getByText("Subtotal: 716 DKK")).toBeInTheDocument();
        expect(screen.getByText("Levering: 42 DKK")).toBeInTheDocument();
        expect(screen.getByText("Total: 758 DKK")).toBeInTheDocument();

    })

    it('Det testen om rabat for højt købsbeløb udregnes korrekt', () => {
        render(<App />);
        expect(screen.getByText("Sum: 716 DKK")).toBeInTheDocument();
        expect(screen.getByText("-Rabat: 0 DKK")).toBeInTheDocument();
        expect(screen.getByText("Subtotal: 716 DKK")).toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.addOneQuantityToList) }))
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.addOneQuantityToList) }))
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.addOneQuantityToList) }))
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.addOneQuantityToList) }))
        expect(screen.getByText("Sum: 1290.6 DKK")).toBeInTheDocument();
        expect(screen.getByText("-Rabat: 0 DKK")).toBeInTheDocument();
        expect(screen.getByText("Subtotal: 1290.6 DKK")).toBeInTheDocument();

        // sum er over 1400 kr derfor er der rabat
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.addOneQuantityToList) }))
        expect(screen.getByText("Sum: 1442.7 DKK")).toBeInTheDocument();
        expect(screen.getByText("-Rabat: 144.27 DKK")).toBeInTheDocument();
        expect(screen.getByText("Subtotal: 1298.43 DKK")).toBeInTheDocument();

        // sum er over 1400 kr derfor er der rabat
        fireEvent.click(screen.getByRole("button", { name: (MockData[0].id + AriaLabelStr.removeOneQuantityToList) }))
        expect(screen.getByText("Sum: 1290.6 DKK")).toBeInTheDocument();
        expect(screen.getByText("-Rabat: 0 DKK")).toBeInTheDocument();
        expect(screen.getByText("Subtotal: 1290.6 DKK")).toBeInTheDocument();

    })




});
