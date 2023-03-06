//replace with orders
const PRODUCTSTOTAL = [
  {category: "Fruits", price: 1, stocked: true, name: "Apple"},
  {category: "Fruits", price: 2, stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: 6, stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: 31, stocked: true, name: "Spinach"},
  {category: "Vegetables", price: 1, stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: 2, stocked: true, name: "Peas"}
];

//replace URLs with more permanent solution
const DELIVERYCOSTS = [
  {name: "GLS", 
  price: 42, 
  img: "https://seekvectorlogo.com/wp-content/uploads/2022/01/general-logistics-systems-gls-vector-logo-2022.png", 
  altText: "GLS", 
  description: "Valgfri pakkeshop 1-2 hverdage"}, 
  {name: "Bring", 
  price: 46, 
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bring_logo.svg/1280px-Bring_logo.svg.png", 
  altText: "Bring", 
  description: "Valgfri pakkeshop 1-2 hverdage"}, 
  {name: "Plante Land", 
  price: 0, 
  img: "https://seekvectorlogo.com/wp-content/uploads/2022/01/general-logistics-systems-gls-vector-logo-2022.png", 
  altText: "Plante Land", 
  description: "Hent i butik"}
]

/*
function ProductRow({product}) {

  function handleRemoveClick(){
    document.getElementById(product.name).style.visibility = "hidden";
  }

  function handleAddQuantityClick(){
    product.amount++;
    document.getElementById(product.name + "amount").innerHTML = product.amount + " stk";
  }
  function handleRemoveQuantityClick(){
    product.amount--;
    document.getElementById(product.name + "amount").innerHTML = product.amount + " stk";
  }
  return (
    <tr id = {product.name}>
      <h1>{product.name + " "}</h1>
      <tr>
        <td><button onClick={handleAddQuantityClick}>+</button></td>
        <h4 id = {product.name + "amount"}>{product.amount + " stk"}</h4>
        <td><button onClick={handleRemoveQuantityClick}>-</button></td>
      </tr>
      <td><h2>{product.price}</h2></td>
      <td><button onClick={handleRemoveClick}>🗑️</button></td>
    </tr>
  );
}
*/

/*
function ProductTable<Type>(arr: Type[]) {
  const rows = [];
  products.forEach((product) => {
    rows.push(
      <ProductRow
        product={product}/>
    );
       });

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
  
}
*/



const PRODUCTSCATEGORY = [
  {price: "40 kr", amount:2, name: "Rose"},
  {price: "35 kr", amount:1, name: "Scheffler"},
  {price: "120 kr", amount:4, name: "Pions"},
];

//need to remove centering once its included in css
function Title(){
  return(
  <div><h1><center>Ordreoversigt</center></h1></div>
  )
}
function Subtotal(){
  let prodcutPrice = 0
  PRODUCTSTOTAL.forEach(element => {
    prodcutPrice += element.price;
  });
  let subtotal = "Subtotal: " + prodcutPrice;
  return(
  <div><h2>{subtotal}</h2></div>
  )
}

//TODO need to include the option to choose
function DeliveryCost(){
  let deliveryPrice
  deliveryPrice = "Levering: " + DELIVERYCOSTS[0].price
  return(
  <div><h2>{deliveryPrice}</h2></div>
  )
}

function DeliveryMethods(){
  const list = DELIVERYCOSTS.map (method =>
  <li key={method.name}>
  <img
  src={method.img}
  alt={method.altText} 
  width="100"/>
  <p>
    {method.description}
  </p>

</li>);
  return (
    <article>
        <ul>{list}</ul>
    </article>
  )
}

function Total(){
  let prodcutPrice = 0
  PRODUCTSTOTAL.forEach(element => {
    prodcutPrice += element.price;
  });
  let deliveryPrice = DELIVERYCOSTS[0].price
  let totalPrice = prodcutPrice + deliveryPrice
  let total = "Pris i alt: " + totalPrice
  return(
      <div><h1>{total}</h1><button>Til kassen</button></div>
  )
}

function Summary(){
  return (
    <section>
  <Title />
  <Subtotal />
  <DeliveryCost />
  <DeliveryMethods />
  <Total />
  </section>
  )
}

export default function App() {
  return (
    <section>
  <Summary/>
  </section>
    );
}
