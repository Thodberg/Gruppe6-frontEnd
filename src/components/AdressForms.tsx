import {AriaLabelStr} from '../models/AriaLabelStr';

export const AddressForms = () => {
  const verifyAll = () => {}

  const email = document.getElementById("mail");

/**email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});*/


  return (
      <fieldset>
<form> 
  <ul>
    <li>
      <label htmlFor="fornavn">Fornavn*</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="text" id="first_name" required name={AriaLabelStr.user_first_name}  
          aria-label={AriaLabelStr.user_first_name}/>
    </li>
    <li>
      <label htmlFor="efternavn">Efternavn*</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="text" id="last_name" required name="user_last_name" 
      aria-label={AriaLabelStr.user_last_name}/>
    </li>
    <li>
      <label htmlFor="email">Email*</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="email" id="email" required name={AriaLabelStr.user_email} 
      aria-label={AriaLabelStr.user_email}/>
    </li>
    <li>
      <label htmlFor="country">Choose a country to ship to*</label>
      <div className="break"></div>
      <select className="theme-address-forms" id="countries"   required 
      aria-label={AriaLabelStr.user_country}>
        <option value="Empty"></option>
        <option value="Denmark">Denmark</option>
      </select>
    </li>
    <li>
      <label htmlFor="adresse1">Adresse 1*</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="adress1" required name={AriaLabelStr.user_adress_1} 
        aria-label={AriaLabelStr.user_adress_1}/>
      <div className="break"></div>  
        <label htmlFor="Post_nr_1">Post nr.*</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="post_nr_1" pattern="[0-9]{4}" required name={AriaLabelStr.user_postnr_1} 
        aria-label={AriaLabelStr.user_postnr_1}/>    
      <div className="break"></div>  
        <label htmlFor="By_nr_1">By*</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="by_nr_1" required name={AriaLabelStr.user_by_1} 
        aria-label={AriaLabelStr.user_by_1}/>        
    </li>
    <li>
      <label htmlFor="adresse2">Adresse 2 (Udfyldes hvis faktura-adresse er forskellig fra Adresse 1)</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="adress2" name={AriaLabelStr.user_adress_2} 
        aria-label={AriaLabelStr.user_adress_2}/>
      <div className="break"></div>  
        <label htmlFor="Post_nr_2">Post nr.</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="post_nr_2" pattern="[0-9]{4}" required name={AriaLabelStr.user_postnr_2} 
        aria-label={AriaLabelStr.user_postnr_2}/>    
      <div className="break"></div>  
        <label htmlFor="By_nr_2">By</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="by_nr_2"  name={AriaLabelStr.user_by_2} 
        aria-label={AriaLabelStr.user_by_2}/>        
    </li>
    <li>
    <label htmlFor="telefonnummer">Telefonnummer*</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="tel" id="phone" name="phone"
       pattern="[0-9]{8}" aria-label={AriaLabelStr.telefon_nr}
       required></input>
    </li>
    <li>
    <label htmlFor="firmanavn">Firmanavn</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="text" id="company_name" name="company_name" 
      aria-label={AriaLabelStr.firma_navn}/>
    </li>
    <li>
    <label htmlFor="firma_VAT">firma VAT</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="tel" id="VAT" name="VAT"
       pattern="[0-9]{8}" aria-label={AriaLabelStr.firma_vat}
       ></input>
    </li>
    <li>
      <label htmlFor="vilkår">Vilkår*</label>
    <div id='dialog-window'>
        <div id='scrollable-content' >
            En masse vilkår for køb kan puttes her. Nu bare dummy tekst så man kan se scrolle virker.
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, earum facere. Eum deserunt esse necessitatibus ipsum doloremque quos expedita odit porro quisquam veritatis deleniti veniam, omnis voluptate repellat ipsam explicabo.</p>
            <label>
                <input type="checkbox" id="terms" name="terms"  required  aria-label={AriaLabelStr.vilkaar_accept}/> Jeg accepterer vilkår
            </label>
        </div>
        </div>
        <br />
    </li>    
        <div className='theme-c'>
            <label>
                <input type="checkbox" id="terms" name="terms" aria-label={AriaLabelStr.tilbud_accept}/> Jeg vil gerne modtage nyhedsbrev og tilbud
            </label>
        </div>
  
        </ul>
        <p>
          * Obligatoriske felter
        </p>
      <p>
          <button type="submit">Til betaling</button>
        </p>

  </form>
  </fieldset>
    )
}