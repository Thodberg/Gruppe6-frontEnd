import { Checkout } from "./components/Checkout";
import { Products } from "./components/Products";
import { AddressForms } from "./components/AdressForms";
import { Topbar } from "./components/Topbar";
import MockData from "./mockData.json"
import { Product } from './models/Product';

type Props = {
  products: Product[];
}

export default function App() {
  return (
      <body className='theme-a'>
        <Topbar />
        <div>
          <Products products={MockData} />
        </div>
        <div>
          <Checkout products={MockData} />
        </div>
        <div>
          <AddressForms />
          </div>
      </body>
  );
}
