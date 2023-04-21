import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import { Link } from 'react-router-dom';

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
        img: "src/assets/bring logo.png",
        altText: "Bring",
        description: "Valgfri pakkeshop 1-2 hverdage"
    },
    {
        name: "Plante Land",
        price: 0,
        img: "src/assets/GLS logo.png",
        altText: "Plante Land",
        description: "Hent i butik"
    }
]

type Props = {
    products: Product[];
}

export const Checkout = ({ products }: Props) => {
    const [deliveryPrice, setDeliveryPrice] = useState<number>(0);
    const [currentDeliver, setCurrentDeliver] = useState<string>('');
    const [productPrice, setProductPrice] = useState<number>(0);

    //need to remove centering once its included in css
    function Title() {
        return (
            <div className='theme-c'><h2><center>Ordreoversigt</center></h2></div>
        )
    }

    //need to remove useEffect to avoid jumping when recalculating
    function Subtotal({ products }: Props) {
        const [subtotal, setSubtotal] = useState<string>('');
        useEffect(() => {
            let productPrice = 0
            products.forEach(element => {
                productPrice += element.price * element.quantity;
            });
            setProductPrice(productPrice)
            setSubtotal("Subtotal: " + (Math.round(productPrice * 100) / 100) + " DKK");
        }, [products])

        return (
            <div className='theme-c'><h2>{subtotal}</h2></div>
        )
    }

    function DeliveryCost() {
        return (
            <div className='theme-c'><h2>{"Levering: " + deliveryPrice + " DKK"}</h2></div>
        )
    }

    function DeliveryMethods() {
        function selectRadio(price: number, name: string) {
            setDeliveryPrice(price);
            setCurrentDeliver(name)
        }

        return (
            <form>
                <fieldset>
                    {DELIVERYCOSTS.map((method) => {
                        return (
                            <div>
                                <label>
                                    <input type="radio" id={method.name} name="deliveryMethods" value={method.name} onClick={() => selectRadio(method.price, method.name)} checked={method.name == currentDeliver} />
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

    function Total({ products }: Props) {
        let totalPrice = (Math.round(productPrice * 100) / 100) + deliveryPrice
        let total = "Total: " + totalPrice + " DKK"
        return (
            <div>
                <h1>{total}</h1>
                <center>
                    <Link to="/kassen">
                        <button>Til kassen</button>
                    </Link>
                </center>
            </div>
        )
    }

    return (
        <div className='theme-checkout'>
            <div className='theme-c'><h2><center>Ordreoversigt</center></h2></div>
            <Subtotal products={products} />
            <DeliveryCost />
            <DeliveryMethods />
            <Total products={products} />
        </div>
    )
}



