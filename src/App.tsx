import { useState } from "react";
import { Checkout } from "./components/Checkout";
import { Products } from "./components/Products";
import { Topbar } from "./components/Topbar";
import MockData from "./mockData.json"
import { Product } from './models/Product';

type Props = {
  products: Product[];
}

export default function App() {
  const [products, setProducts] = useState<Product[]>(MockData);

  return (
    <body className='theme-a'>
      <Topbar />
      <div>
        <Products products={products} setProducts={setProducts} />
      </div>
      <div>
        <Checkout products={products} />
      </div>
    </body>
  );
}
