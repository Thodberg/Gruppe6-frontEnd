import {AriaLabelStr} from '../models/AriaLabelStr';
import { FormEvent, useState } from "react";
import { Product } from '../models/Product';

type Props = {
  products: Product[];
}

export const AddressForms = ({ products }: Props) => {
  const [loading, setLoading] = useState(false);
  const [serverAnswerOk, setServerAnswerOk] = useState(false);
  const [error, setError] = useState("");
  const verifyAll = () => {}

  /**
   * Indsaetter by i formular vha. postnr
   */
  async function indsaetByVhaPostnr() { 
    /**const artist = encodeURIComponent(formElements.artist.value);
    const date = encodeURIComponent(formElements.date.value);
    const query = `artist:${artist} AND date:${date}`;
    const url = `https://musicbrainz.org/ws/2/release?fmt=json&query=${query}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const mbResult = (await response.json()) as {
        releases: { title: string; date: string }[];
      };
      const { releases } = mbResult;
      dispatch({
        type: "search",
        payload: {
          artist,
          date,
          results: releases.map(({ title, date }) => `${title} (${date})`),
        },
      });*/ 
  }

async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formElements = form.elements as typeof form.elements & {
      first_name: HTMLInputElement;
      last_name: HTMLInputElement;
      email: HTMLInputElement;
      country: HTMLInputElement;
      adress1: HTMLInputElement;
      post_nr_1:HTMLInputElement;
      post_nr_2:HTMLInputElement;
      phone:HTMLInputElement;
      terms: HTMLInputElement;
    };
    
    if (formElements.email.value === "") {
      formElements.email.setCustomValidity(AriaLabelStr.user_email_err);
      return;
    } else if (formElements.post_nr_1.value === "") {
      formElements.post_nr_1.setCustomValidity(AriaLabelStr.user_postnr_err);
      return;
    } else  if (formElements.phone.value === "") {
      formElements.phone.setCustomValidity(AriaLabelStr.user_telefon_nr_err);
      return;
    } 

    const firstName = encodeURIComponent(formElements.first_name.value);
    const efterName = encodeURIComponent(formElements.last_name.value);
    const email = encodeURIComponent(formElements.email.value);
    const country = encodeURIComponent(formElements.country.value);
    const adress1 = encodeURIComponent(formElements.adress1.value);
    const postnr1 = encodeURIComponent(formElements.post_nr_1.value);
    const postnr2 = encodeURIComponent(formElements.post_nr_2.value);
    const phone = encodeURIComponent(formElements.phone.value);
    const terms = encodeURIComponent(formElements.terms.value);
    //const vatnr = encodeURIComponent(formElements.);
    //const by2 = encodeURIComponent(formElements.);
    //const by1 = encodeURIComponent(formElements.);
    //const adress2 = encodeURIComponent(formElements.);
    //const firmanavn = encodeURIComponent(formElements.);

    // oplysninger om varer, navn, adresse og forsendelse postes til requestbin.com
    try {
      const logResponse = await fetch(
        "https://eo3xhv1luyfvymx.m.pipedream.net",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products,
            delivery: "Bring", // hardcoded skulle egentlig være kommet fra usestate
            firstName : firstName,
            lastName: efterName,
            email: email,
            country: country,
            adress1: adress1,
            postnr1: postnr1, 
            postnr2: postnr2,
            terms: terms,
            phone: phone,
          }),
        }
      );
      if (!logResponse.ok) {
        setError("Din ordre kunne ikke behandles");
      } else if(logResponse.ok) {
        setServerAnswerOk(true)
      }
    } finally {
      setLoading(false);
    }
  }

  function onValidatePhone(e: FormEvent) {
    const target = e.target as HTMLInputElement;
    if (target.validity.patternMismatch) {
      target.setCustomValidity(AriaLabelStr.user_telefon_nr_err);
    } else {
      target.setCustomValidity("");
    }
  }

  function onValidatePostNumber(e: FormEvent) {
    const target = e.target as HTMLInputElement;
    if (target.validity.patternMismatch) {
      target.setCustomValidity(AriaLabelStr.user_postnr_err);
    } else {
      target.setCustomValidity("");
    }
  }

   function onValidateEmail(e: FormEvent) {
    const target = e.target as HTMLInputElement;
    if (target.validity.typeMismatch) {
      target.setCustomValidity(AriaLabelStr.user_email_err);
    } else {
      target.setCustomValidity("");
    }
  }
  

return (

<form aria-label="adresse_form" onSubmit={handleSubmit}> 

  <ul>
    <li>      
      <label htmlFor="first_name">Fornavn*</label>      
      <div className="break"></div>
      <input className="theme-address-forms" type="text" id="first_name" required
      name={AriaLabelStr.user_first_name}   
          aria-label={AriaLabelStr.user_first_name}/>
    </li>
    <li>
      <label htmlFor="last_name">Efternavn*</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="text" id="last_name" required name="user_last_name" 
      aria-label={AriaLabelStr.user_last_name}/>
    </li>
    <li>
      <label htmlFor="email">Email*</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="email" id="email" name={AriaLabelStr.user_email} 
      aria-label={AriaLabelStr.user_email} onInput={onValidateEmail}/>
    </li>
    <li>
      <label htmlFor="country">Choose a country to ship to*</label>
      <div className="break"></div>
      <select className="theme-address-forms" id="country"   required 
      aria-label={AriaLabelStr.user_country}>
         <option value="Denmark">Denmark</option>
         <option value="empty"></option>
       
      </select>
    </li>
    <li>
      <label htmlFor="adress1">Adresse 1*</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="adress1" required name={AriaLabelStr.user_adress_1} 
        aria-label={AriaLabelStr.user_adress_1}/>
      <div className="break"></div>  
        <label htmlFor="post_nr_1">Post nr.*</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="post_nr_1" pattern="[0-9]{4}" 
        name={AriaLabelStr.user_postnr_1} onInput={onValidatePostNumber}
        aria-label={AriaLabelStr.user_postnr_1}/>    
      <div className="break"></div>  
        <label htmlFor="by_nr_1">By</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="by_nr_1" name={AriaLabelStr.user_by_1} 
        aria-label={AriaLabelStr.user_by_1}/>        
    </li>
    <li>
      <label htmlFor="adresse2">Adresse 2 (Udfyldes hvis faktura-adresse er forskellig fra Adresse 1)</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="adress2" name={AriaLabelStr.user_adress_2} 
        aria-label={AriaLabelStr.user_adress_2}/>
      <div className="break"></div>  
        <label htmlFor="post_nr_2">Post nr.</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="post_nr_2" pattern="[0-9]{4}"  
        name={AriaLabelStr.user_postnr_2} onInput={onValidatePostNumber}
        aria-label={AriaLabelStr.user_postnr_2}/>    
      <div className="break"></div>  
        <label htmlFor="By_nr_2">By</label>
      <div className="break"></div>
        <input className="theme-address-forms" type="text" id="by_nr_2"  name={AriaLabelStr.user_by_2} 
        aria-label={AriaLabelStr.user_by_2}/>        
    </li>
    <li>
    <label htmlFor="phone">Telefonnummer*</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="tel" id="phone" name="phone"
       pattern="[0-9]{8}" aria-label={AriaLabelStr.telefon_nr} onInput={onValidatePhone}
       ></input>
    </li>
    <li>
    <label htmlFor="company_name">Firmanavn</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="text" id="company_name" name="company_name" 
      aria-label={AriaLabelStr.firma_navn}/>
    </li>
    <li>
    <label htmlFor="VAT">firma VAT</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="tel" id="VAT" name="VAT"
       pattern="[0-9]{8}" aria-label={AriaLabelStr.firma_vat}
       ></input>
    </li>
    <li>
      <label>Vilkår*</label>
    <div id='dialog-window'>
        <div id='scrollable-content' >
            En masse vilkår for køb kan puttes her. Nu bare dummy tekst så man kan se scrolle virker.
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, earum facere. 
              Eum deserunt esse necessitatibus ipsum doloremque quos expedita odit porro quisquam 
              veritatis deleniti veniam, omnis voluptate repellat ipsam explicabo.</p>
            <label htmlFor = "terms"> </label>
                <input type="checkbox" id="terms" required name="terms"  aria-label={AriaLabelStr.vilkaar_accept}
                /> 
                Jeg accepterer vilkår
            
        </div>
        </div>
        <br />
    </li>    
        <div className='theme-c'>
            <label>
                <input type="checkbox" id="terms" name="terms" aria-label={AriaLabelStr.tilbud_accept}
                />
                 Jeg vil gerne modtage nyhedsbrev og tilbud
            </label>
        </div>
  
        </ul>
        <p>
          * Obligatoriske felter
        </p>
      <p>
          <button type="submit">Til betaling</button>
      </p>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {!loading && serverAnswerOk && (
        <>
          <p>Tak for ordren varerne afsendes snart</p>
          <ol>
            
          </ol>
        </>
      )}

  </form>
 
    )
}