export interface Product {
    id: string,
    name: string,
    price: number,
    priceForQuantity: number,
    currency: string,
    quantity: number,
    rebateQuantity: number,
    rebatePercent: number,
    upsellProductId: string,
}