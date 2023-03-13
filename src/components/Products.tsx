import { useState } from 'react';
import { Product } from '../models/Product';
import { Checkout } from "./Checkout";

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

    function addQuantityToList(product: Product) {
        /* loop through chosenProducts and see if product is on it.
        if it is on it then just setChosenProducts
        if not on it use addProductToList functionen*/
        setChosenProducts(
            [...chosenProducts,
                // TODO add element to list

            ]
        )
    }

    function removeProductFromList(product: Product) {
            document.getElementById(product.id)?.remove()
    }

    function removeQuantityFromList(product: Product) {
        if(product.quantity > 0){
            product.quantity--
        }
    }

    function calcPrice(product: Product){
        if(product.quantity >= product.rebateQuantity && product.price*product.quantity >= 300){
            return ((product.price*product.quantity)*(0.9-product.rebatePercent/100))
        }
        else if(product.price*product.quantity >= 300){
            return ((product.price*product.quantity)*0.9)
        }
        else if(product.quantity >= product.rebateQuantity){
            return ((product.price*product.quantity)*(1-product.rebatePercent/100)) 
        }
        else {
            return(product.price*product.quantity)
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
                            <h3 id={product.id+"bulkDiscount"}>
                                {calcPrice(product) + " " +product.currency}
                            </h3>
                        </td>
                        <td>
                            <button onClick={() => addQuantityToList(product)}>+</button>
                        </td>
                        <td width="50px">
                            <center>
                        <h4 id={product.id+"quantity"}>
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