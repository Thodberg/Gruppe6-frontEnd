// TODO implement it as a form with data validation

import { boolean } from "yargs"
import { AddressForms } from "../components/AdressForms"
import { useState } from "react";

export const Kassen = () => {
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

    function isChecked() {
        if (termsAccepted === true) {
            setTermsAccepted(false)
        } else {
            setTermsAccepted(true)
        }
    }

    const verifyAll = () => {
        // Add verification of leveringsinformationer er udfyldt
        if (termsAccepted === true) {
            alert("Alt er udfyldt du føres til betalingssiden. (ikke implementeret)")
        }
        else if (termsAccepted === false) {
            alert("Venligst accepter vilkår og betingelser. Du finder knappen nederst.")
        }
    }

    return (
        <div>
            <h4>
                Leveringsinformationer:
            </h4>

            <div>
                <AddressForms />
            </div>
            <br />
            <div id='dialog-window'>
                <div id='scrollable-content' >
                    En masse vilkår for køb kan puttes her. Nu bare dummy tekst så man kan se scrolle virker.
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, earum facere. Eum deserunt esse necessitatibus ipsum doloremque quos expedita odit porro quisquam veritatis deleniti veniam, omnis voluptate repellat ipsam explicabo.</p>
                    <label>
                        <input type="checkbox" id="terms" name="terms" onChange={isChecked} /> Jeg accepterer vilkår
                    </label>
                </div>
            </div>
            <br />
            <div className='theme-c'>
                <label>
                    <input type="checkbox" id="terms" name="terms" /> Jeg vil gerne modtage nyhedsbrev og tilbud
                </label>
            </div>
            <button onClick={verifyAll}>Til betaling</button>
        </div>
    )
}