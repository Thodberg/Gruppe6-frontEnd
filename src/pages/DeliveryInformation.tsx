// TODO implement it as a form with data validation

import { AddressForms } from "../components/AdressForms"

export const DeliveryInformation = () => {

    return (
        <div>
            <h4>
                Vi mangler kun de sidste informationer
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
                        <input type="checkbox" id="terms" name="terms" /> Jeg accepterer vilkår
                    </label>
                </div>
            </div>
            <br />
            <div className='theme-c'>
                <label>
                    <input type="checkbox" id="terms" name="terms" /> Jeg vil gerne modtage nyhedsbrev og tilbud
                </label>
            </div>
        </div>
    )
}