import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="topbar">
            <h1>
                <center>Planteland</center>
            </h1>
            <ul >
                <li>
                    <Link to="/">Indkøbskurv</Link>
                </li>
                <li>
                    <Link to="/kassen">Kassen</Link>
                </li>
            </ ul>



        </div>
    )
}

