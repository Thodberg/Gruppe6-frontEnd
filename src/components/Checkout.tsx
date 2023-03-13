import { useState } from 'react';
import { Product } from '../models/Product';

/*Here is the checkout box with its functionality. */

//replace with orders

//replace URLs with more permanent solution
const DELIVERYCOSTS = [
    {
        name: "GLS",
        price: 42,
        img: "src/assets/GLS logo.png",
        altText: "GLS",
        description: "Valgfri pakkeshop 1-2 hverdage"
    },
    {
        name: "Bring",
        price: 46,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bring_logo.svg/1280px-Bring_logo.svg.png",
        altText: "Bring",
        description: "Valgfri pakkeshop 1-2 hverdage"
    },
    {
        name: "Plante Land",
        price: 0,
        img: "https://seekvectorlogo.com/wp-content/uploads/2022/01/general-logistics-systems-gls-vector-logo-2022.png",
        altText: "Plante Land",
        description: "Hent i butik"
    }
]

let deliveryPrice: string = "Levering: " + DELIVERYCOSTS[0].price

type Props = {
    products: Product[];
}

// TODO import Basket under titel once its finished 
export const Checkout = ({ products }: Props) => {
    return (
        <div className='theme-checkout'>
            <Title />
            <Subtotal products={products}/>
            <DeliveryCost products={products}/>
            <DeliveryMethods products={products}/>
            <Total products={products}/>
        </div>
    )
}

//need to remove centering once its included in css
function Title() {
    return (
        <div className='theme-c'><h2><center>Ordreoversigt</center></h2></div>
    )
}

function Subtotal({ products }: Props) {
    let productPrice = 0
    products.forEach(element => {
        productPrice += element.price;
    });
    let subtotal = "Subtotal: " + productPrice + " DKK";
    return (
        <div className='theme-c'><h2>{subtotal}</h2></div>
    )
}

//TODO need to include the option to choose
function DeliveryCost({ products }: Props) {

    return (
        <div className='theme-c'><h2>{deliveryPrice + " DKK"}</h2></div>
    )
}

//TO DO implement radiobuttons checked does something
function DeliveryMethods({ products }: Props) {
    function selectRadio(price: Number) {

}

    return (
        
        <form>
        <fieldset>
            {DELIVERYCOSTS.map((method, index) => {
                return (
                    <div>
                    <label>
                    <input type="radio" id={method.name} name="deliveryMethods" value={method.name} onClick={() => selectRadio(method.price)}/>
                    <img
                src={method.img}
                alt={method.altText}
                width="100" />
            <p>
                {method.description}
            </p>
            </label>
                </div>
                )
            })}
        </fieldset>
        </form>
    )
}

//TODO go to DeliveryInformation page when onClick is activated
function Total({ products }: Props) {
    let prodcutPrice = 0
    products.forEach(element => {
        prodcutPrice += element.price;
    });
    let deliveryPrice = DELIVERYCOSTS[0].price
    let totalPrice = prodcutPrice + deliveryPrice
    let total = "Pris i alt: " + totalPrice
    return (
        <div><h1>{total}</h1><button onClick={() => { }}>Til kassen</button></div>
    )
}

