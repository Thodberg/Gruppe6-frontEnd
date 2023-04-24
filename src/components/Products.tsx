import { Dispatch, SetStateAction, useState } from 'react';

import { Product } from '../models/Product';

type Props = {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
}

export const Products = ({ products, setProducts }: Props) => {

    //TODO add nudging to buy more to get a rebate
    function buyMore(product: Product):Product | undefined {
        return product.((expe))

    }
    function findExpensiveProduct(products: Product[]): Product | undefined {
        return products.reduce((expensive, current) => {
            return current.price > expensive.price ? current : expensive;
        },
        products[0])
    }
    function moreExpensiveOptions(product: Product): HTMLDivElement{
        const div = document.createElement("div");
        div.
    } {
        if (product.upsellProductId.length > 0) {
            console.log('Der er et produkt i bedre kvalitet som minder om til ${product.price}, er du intereseret?')
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
                            <tr key={index} id={product.id} className='theme-c' >
                                <td width="200px">
                                    <h2 >
                                        {product.name}
                                    </h2>
                                    <div className='break'></div>
                                    <button aria-label={product.id + "removeProductFromList"} onClick={() => removeProductFromList(product)}>🗑️</button>

                                </td>
                                <td width="100px">
                                    <h3 id={product.id + "bulkDiscount"}>
                                        {(Math.round(calcPrice(product) * 100) / 100) + " " + product.currency}
                                    </h3>
                                    <p>
                                        Køb {product.rebateQuantity} produkter og få 10%
                                    </p>
                                </td>
                                <td>
                                    <button aria-label={product.id + "addQuantityToList"} onClick={() => addQuantityToList(product)}>+</button>
                                </td>
                                <td width="50px">
                                    <center>
                                        <h4 id={product.id + "quantity"} aria-label={product.id + "quantity"}>
                                            {product.quantity}
                                        </h4>
                                    </center>
                                </td>
                                <td>
                                    <button aria-label={product.id + "removeQuantityFromList"} onClick={() => removeQuantityFromList(product)}>-</button>
                                </td>
                                <td>
                                    <img src='product.img' alt='Product'>
                                    </img>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
