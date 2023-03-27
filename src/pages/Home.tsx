import { useState } from "react";
import { Products } from "../components/Products";
import { Product } from "../models/Product";
import MockData from "../mockData.json"
import { Checkout } from "../components/Checkout";

export const Home = () => {
    const [products, setProducts] = useState<Product[]>(MockData);
    return (
        <>
            <div>
                <Products products={products} setProducts={setProducts} />
            </div>
            <div>
                <Checkout products={products} />
            </div>
        </>
    )
}