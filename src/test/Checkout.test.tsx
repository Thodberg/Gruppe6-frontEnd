import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Checkout } from "../components/Checkout";

const products = [
    {
        "id": "red-creeping-rose",
        "name": "Rød Slyngrose",
        "price": 169.00,
        "currency": "DKK",
        "quantity": 2,
        "rebateQuantity": 3,
        "rebatePercent": 10,
        "upsellProductId": "",
    },
    {
        "id": "pink-large-flowered-rose",
        "name": "Pink Storblomstret rose",
        "price": 149.00,
        "currency": "DKK",
        "quantity": 1,
        "rebateQuantity": 2,
        "rebatePercent": 25,
        "upsellProductId": "vitamin-c-depot-500-250",
    },
    {
        "id": "yellow-english-rose",
        "name": "Gul Engelsk rose",
        "price": 169.00,
        "currency": "DKK",
        "quantity": 1,
        "rebateQuantity": 3,
        "rebatePercent": 10,
        "upsellProductId": "",
    }
];

describe('Rendering', () => {
    it('renders the correct length', () => {
        render(<Checkout products={products} />);

        expect(products).toHaveLength(3);
        expect(screen.getByText("Ordreoversigt")).toBeInTheDocument();
    })
})

//TODO make test for correct calculations



