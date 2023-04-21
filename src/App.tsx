import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Product } from './models/Product';
import { DeliveryInformation } from "./pages/DeliveryInformation";
import { Home } from "./pages/Home";

export default function App() {

  return (
    /**<body className='theme-a'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/kassen' element={<DeliveryInformation />} />
        </Routes>
      </BrowserRouter>
    </body>*/
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
