import { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import deliveryCosts from "../Delivery.json"
import { AriaLabelStr } from '../models/AriaLabelStr';


type Props = {
    products: Product[];
}

export const Checkout = ({ products }: Props) => {
    const [deliveryPrice, setDeliveryPrice] = useState<number>(0);
    const [currentDeliver, setCurrentDeliver] = useState<string>('Plante Land');
    const [productPriceBeforeRebate, setProductPriceBeforeRebate] = useState<string>('');
    const [rebate, setRebate] = useState<string>('');
    const [productPrice, setProductPrice] = useState<number>(0);
    const [subtotal, setSubtotal] = useState<string>('');
    let totalPrice = (Math.round(productPrice * 100) / 100) + deliveryPrice
    let total = "Total: " + totalPrice + " DKK"
    let rebateLimitPriceOnTotalPrice = 1400
    let rebatePercentOnTotal = 10


    useEffect(() => {
        let rebate = 0
        let productPrice = 0
        let productPriceBeforeRebate = 0
        products.forEach(element => {
            productPriceBeforeRebate += element.priceForQuantity;
        });
        if (productPriceBeforeRebate >= rebateLimitPriceOnTotalPrice) {
            productPrice = productPriceBeforeRebate * (1.0 - ((1.0) / (rebatePercentOnTotal * 1.0)))
            rebate = productPriceBeforeRebate * ((1.0 / rebatePercentOnTotal))
        } else {
            rebate = 0
            productPrice = productPriceBeforeRebate
        }

        setProductPrice(productPrice)
        setProductPriceBeforeRebate("Sum:   " + (Math.round(productPriceBeforeRebate * 100) / 100) + " DKK");
        setRebate("Rabat:   " + (Math.round(rebate * 100) / 100) + " DKK");
        setSubtotal("Subtotal:   " + (Math.round(productPrice * 100) / 100) + " DKK");
    }, [products])

    function deliveryCost() {
        return (
            <div className='theme-c'><h2>{"Levering: " + deliveryPrice + " DKK"}</h2></div>
        )
    }

    function selectRadio(price: number, name: string) {
        setDeliveryPrice(price);
        setCurrentDeliver(name)
    }

    function navigate(newPage: string) {
        history.pushState({}, "", `?page=${newPage}`);// browserens history opdateres
        dispatchEvent(new PopStateEvent("popstate"));
    }

    return (
        <div className='theme-checkout'>
            <div className='theme-c'><h1><center>Ordreoversigt</center></h1></div>
            <p>
                Køb for min {rebateLimitPriceOnTotalPrice} DKK og få {rebatePercentOnTotal}% ekstra i rabat
            </p>

            <div className='theme-c'>
                <h2 aria-label={AriaLabelStr.sum}>{productPriceBeforeRebate}</h2>
                <h2 aria-label={AriaLabelStr.rabat}>{rebate}</h2>
                <h2 aria-label={AriaLabelStr.subtotal}>{subtotal}</h2>
                <h2 aria-label={AriaLabelStr.levering}>{"Levering: " + deliveryPrice + " DKK"}</h2>
            </div>
            <form>
                <fieldset>
                    {deliveryCosts.map((method) => {
                        return (
                            <div>
                                <label>
                                    <p>
                                        <input type="radio" id={method.name} aria-label={method.name} name="deliveryMethods"
                                            value={method.name} onClick={() => selectRadio(method.price, method.name)} checked={method.name == currentDeliver} />
                                        {method.price + " DKK "}
                                        <img
                                            src={method.img}
                                            alt={method.altText}
                                            width="100" />

                                        {method.description}
                                    </p>
                                </label>
                            </div>
                        )
                    })}
                </fieldset>
            </form>

            <div>
                <h1 aria-label={AriaLabelStr.total} >{total}</h1>
                {<center>
                    <button onClick={(ev) => navigate("kassen")}>Kassen</button>
                </center>}
            </div>
        </div>
    )
}



