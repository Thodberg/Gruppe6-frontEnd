import { SetStateAction, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Checkout } from "./components/Checkout";
import { NavBar } from "./components/NavBar";
import { Products } from "./components/Products";
import MockData from "./mockData.json"
import { Product } from './models/Product';
import { DeliveryInformation } from "./pages/DeliveryInformation";
import { Home } from "./pages/Home";

type Props = {
  products: Product[];
}

export default function App() {
  const [products, setProducts] = useState<Product[]>(MockData);

  return (
    <body className='theme-a'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/kassen' element={<DeliveryInformation />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}
