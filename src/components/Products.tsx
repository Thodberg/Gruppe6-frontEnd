import { Dispatch, SetStateAction, useState } from 'react';

import { Product } from '../models/Product';

type Props = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
}

export const Products = ({ products, setProducts }: Props) => {

    //TODO add nudging to buy more to get a rebate
    function buyMore(product: Product) {
        if (product.quantity < product.rebateQuantity) {
            console.log('Køb %product.rebateQuantity og spar 10%')
        } else {
            console.log('Du har %product.rebateQuantity eller mere og spare 10%')
        }

    }
    function addProductToList(product: Product) {
        setProducts(
            [...products,
                product
            ]
        )
        addQuantityToList(product)
    }

    function addQuantityToList(product: Product) {
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

    function removeQuantityFromList(product: Product) {
        let newProducts = [...products,
        ]
        newProducts.find((e) => {
            if (e.id === product.id) {
                e.quantity--;
                if (e.quantity < 1) {
                    removeProductFromList(product)
                }
                setProducts(
                    [...newProducts,
                    ]
                )
            }
        })
    }

    function removeProductFromList(product: Product) {
        // hallo
        document.getElementById(product.id)?.remove()
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
                            ProductRow(index, product, removeProductFromList, calcPrice, addQuantityToList, removeQuantityFromList)
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export function ProductRow(index: number, product: Product, removeProductFromList: (product: Product) => void, calcPrice: (product: Product) => number, addQuantityToList: (product: Product) => void, removeQuantityFromList: (product: Product) => void): JSX.Element {
    return <tr key={index} id={product.id} className='theme-c'>
        <td width="200px">
            <h2>
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
    </tr>;
}
