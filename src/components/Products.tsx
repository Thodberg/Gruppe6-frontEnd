import { Dispatch, SetStateAction, useState } from 'react';

import { Product } from '../models/Product';
import {AriaLabelStr} from '../models/AriaLabelStr';

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
        /**if (product.quantity >= product.rebateQuantity && product.price * product.quantity >= 300) {

            return ((product.price * product.quantity) * (0.9 - product.rebatePercent / 100))
        }
        else if (product.price * product.quantity >= 300) {
            return ((product.price * product.quantity) * 0.9)
        }*/
        if (product.quantity >= product.rebateQuantity) {
            product.priceForQuantity = ((product.price * product.quantity) * (1 - product.rebatePercent / 100))
            return product.priceForQuantity
        }
        else {
            product.priceForQuantity = (product.price * product.quantity)
            return product.priceForQuantity
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
                                    <button aria-label={product.id + AriaLabelStr.removeProductFromList} onClick={() => removeProductFromList(product)}>🗑️</button>

                                </td>
                                <td width="100px">
                                    <h3 id={product.id + AriaLabelStr.bulkDiscount} aria-label={product.id + AriaLabelStr.bulkDiscount}>
                                        {(Math.round(calcPrice(product) * 100) / 100) + " " + product.currency}
                                    </h3>
                                    <p>
                                        Pris pr. stk {product.price } {product.currency}<br/> 
                                         
                                        Køb {product.rebateQuantity} stk og få {product.rebatePercent}% rabat
                                    </p>

                                </td>
                                <td>
                                    <button aria-label={product.id + AriaLabelStr.addOneQuantityToList} onClick={() => addQuantityToList(product)}>+</button>
                                </td>
                                <td width="50px">
                                    <center>
                                        <h4 id={product.id + AriaLabelStr.quantity} aria-label={product.id + AriaLabelStr.quantity}>
                                            {product.quantity}
                                        </h4>
                                    </center>
                                </td>
                                <td>
                                    <button aria-label={product.id + AriaLabelStr.removeOneQuantityToList} onClick={() => removeQuantityFromList(product)}>-</button>
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
