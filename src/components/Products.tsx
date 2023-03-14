import { Dispatch, SetStateAction, useState } from 'react';
import { Product } from '../models/Product';
import MockData from '../mockData.json'
import { Checkout } from "./Checkout";

type Props = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
}

export const Products = ({ products, setProducts }: Props) => {

    //TODO add nudging to buy more to get a rebate

    function addProductToList(product: Product) {
        setProducts(
            [...products,
                product
            ]
        )
        addQuantityToList(product)
    }

    function addQuantityToList(product: Product) {
        {
            let newProducts = [...products,
            ]
            newProducts.length ? (
                newProducts.find((e) => {
                    if (e.id === product.id) {
                        e.quantity++;
                        setProducts(
                            [...newProducts,
                            ]
                        )
                    }
                })
            ) : (
                addProductToList(product)
            )
        }
    }

    function removeProductFromList(product: Product) {
        document.getElementById(product.id)?.remove()
    }

    function removeQuantityFromList(product: Product) {
        if (product.quantity > 0) {
            product.quantity--
        }

        if (product.quantity > 1) {
            products.find((e) => {
                if (e.id === product.id) {
                    e.quantity--;
                    setProducts(
                        [...products,
                        ]
                    )
                }
            })
        } else {
            removeProductFromList(product)
        }
    }

    function calcPrice(product: Product) {
        if (product.quantity >= product.rebateQuantity && product.price * product.quantity >= 300) {
            return ((product.price * product.quantity) * (0.9 - product.rebatePercent / 100))
        }
        else if (product.price * product.quantity >= 300) {
            return ((product.price * product.quantity) * 0.9)
        }
        else if (product.quantity >= product.rebateQuantity) {
            return ((product.price * product.quantity) * (1 - product.rebatePercent / 100))
        }
        else {
            return (product.price * product.quantity)
        }
    }

    return (
        <div className='theme-b'>
            <table>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index} id={product.id} className='theme-c'>
                                <td width="200px">
                                    <h2 >
                                        {product.name}
                                    </h2>
                                    <div className='break'></div>
                                    <button onClick={() => removeProductFromList(product)}>🗑️</button>
                                </td>
                                <td width="100px">
                                    <h3 id={product.id + "bulkDiscount"}>
                                        {calcPrice(product) + " " + product.currency}
                                    </h3>
                                </td>
                                <td>
                                    <button onClick={() => addQuantityToList(product)}>+</button>
                                </td>
                                <td width="50px">
                                    <center>
                                        <h4 id={product.id + "quantity"}>
                                            {product.quantity}
                                        </h4>
                                    </center>
                                </td>
                                <td>
                                    <button onClick={() => removeQuantityFromList(product)}>-</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


