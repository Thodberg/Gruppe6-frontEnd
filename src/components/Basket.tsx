import { Product } from "../models/Product";

type Props = {
    products: Product[];
}


/* Basket is created because we may want to style it different
 than in the product list on the left of the screen */
export const Basket = ({ products }: Props) => {

    return (
        <>
            {products.map((product) => {
                return (
                    <tr>
                        <td>
                            <h2>
                                {product.name}
                            </h2>
                        </td>
                        <td>
                            <h3>
                                {product.price + "kr"}
                            </h3>
                        </td>
                        <td>
                            <button>+</button>
                        </td>
                        <h4>
                            Antal
                        </h4>
                        <td>
                            <button>-</button>
                        </td>
                        <td>
                            <button>🗑️</button>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}