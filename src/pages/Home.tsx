import { Dispatch, SetStateAction, useState } from "react";
import { Products } from "../components/Products";
import { Product } from "../models/Product";
//import MockData from "../mockData2.json"
import { Checkout } from "../components/Checkout";

type Props = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
}

export const Home = ({ products, setProducts }: Props) => {
    //const [products, setProducts] = useState<Product[]>(MockData);

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