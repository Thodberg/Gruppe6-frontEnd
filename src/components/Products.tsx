import { useState } from 'react';
import Logo from '../assets/react.svg';
import { Product } from '../models/Product';

type Props = {
    products: Product[];
}


export const Products = ({ products }: Props) => {

    const [chosenProducts, setChosenProducts] = useState([]);


    //TODO add validation so not allowed to remove when 0

    //TODO add nudging to buy more to get a rebate

    //TODO do the rebate remember a minimun amount to be paid

    function addProductToList() {
        setChosenProducts(
            [...chosenProducts,
                // TODO add element to list

            ]
        )
    }

    function addQuantityToList() {
        /* loop through chosenProducts and see if product is on it.
        if it is on it then just setChosenProducts
        if not on it use addProductToList functionen*/
        setChosenProducts(
            [
                // add amount to list
            ]
        )
    }

    function removeProductFromList() {
        setChosenProducts(
            [...chosenProducts,
                // reduce list
            ]
        )
    }

    function removeQuantityFromList() {
        setChosenProducts(
            [
                ...chosenProducts,

                //reduce amount in list 
            ]
        )
    }

    return (
        <>
            {products.map((product, index) => {
                return (
                    <tr key={index}>
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
                            <button onClick={addQuantityToList}>+</button>
                        </td>
                        <h4>
                            Antal
                        </h4>
                        <td>
                            <button onClick={removeQuantityFromList}>-</button>
                        </td>
                        <td>
                            <button onClick={removeProductFromList}>🗑️</button>
                        </td>
                    </tr>
                )
            })}
        </>
    )
}