import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";
import { Checkout } from "../components/Checkout";
import exp from "constants";

describe('Sum', () => {
    it('renders the correct sum', () => {
        const products = [
            {
                "id": "red-creeping-rose",
                "name": "Rød Slyngrose",
                "price": 169.00,
                "currency": "DKK",
                "quantity": 1,
                "rebateQuantity": 3,
                "rebatePercent": 10,
                "upsellProductId": ""
            },
            {
                "id": "pink-large-flowered-rose",
                "name": "Pink Storblomstret rose",
                "price": 149.00,
                "currency": "DKK",
                "quantity": 1,
                "rebateQuantity": 2,
                "rebatePercent": 25,
                "upsellProductId": "vitamin-c-depot-500-250"
            },
        ];
        render(<Checkout products={products} />);

        expect(products).toHaveLength(2);
        expect(screen.getByText("Ordreoversigt")).toBeInTheDocument();

    })
})