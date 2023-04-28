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
        </div>
    )
}