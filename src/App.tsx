import { Checkout } from "./components/Checkout";
import { Products } from "./components/Products";
import { Topbar } from "./components/Topbar";
import MockData from "./mockData.json"

export default function App() {
  return (
    <>
      <Topbar />
      <body>
        <div>
          <Products products={MockData} />
        </div>
        <div>
          <Checkout />
        </div>
      </body>
    </>
  );
}
