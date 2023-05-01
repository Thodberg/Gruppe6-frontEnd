import { useEffect, useState } from "react";
import { Kassen } from "./pages/Kassen";
import { Home } from "./pages/Home";
import { Product } from "./models/Product";
import MockData from "./mockData.json"

export default function App() {
  const [products, setProducts] = useState<Product[]>(MockData);
  const[page, setPage] = useState("home");
  const[count, setCount] = useState(0);
  const [navigating, setNavigating] = useState(true);
  /**  UseEffect bruges til at synkronisee noget state inde i applicationen, med
   med noget state udenfor applikationen, hvilket i dette tilfælde er en
   state i URL'en 
   Efter hver rendering køres Effect hooks igen, hvis deres depedencies er blevet ændret*/
   useEffect(() => {
    function popstateHandler() {
      const url = new URLSearchParams(window.location.search);
      const urlPage = url.get("page");
      console.log("popstate", { urlPage });
      setPage(urlPage || "home");
      setNavigating(true);
    }
    addEventListener("popstate", popstateHandler);
    popstateHandler();
    return () => {
      removeEventListener("popstate", popstateHandler);
    };
  }, []);
  useEffect(() => {
    setNavigating(false);
  }, [navigating]);
  function navigate(ev: React.MouseEvent<HTMLAnchorElement>, newPage: string) {
    ev.preventDefault();
    history.pushState({}, "", `?page=${newPage}`);// browserens history opdateres
    dispatchEvent(new PopStateEvent("popstate"));
  } 
  return (
    <body className='theme-a'>
        <div className="topbar">
            <h1>
                <center>Planteland</center>
            </h1>
            <ul className="theme-navBar">
                <li>
                <a aria-label="home" onClick={(ev) => navigate(ev, "home")}>Home</a>                 
                </li>
                <li>
                <a  aria-label="kassen"  onClick={(ev) => navigate(ev, "kassen")}>Kassen</a>
                </li>
            </ ul>
        </div>
        {page === "home" && (          
            <Home products={products} setProducts={setProducts} />          
        )}
        {page === "kassen" && (          
            <Kassen products={products} setProducts={setProducts}/>          
        )}
    </body>
  );
}
