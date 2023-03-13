export const AddressForms = () => {
    return (
        <fieldset>
<form> 
  <ul>
    <li>
      <label htmlFor="fornavn">Fornavn</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="text" id="first_name" required name="user_first_name" />
    </li>
    <li>
      <label htmlFor="efternavn">Efternavn</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="text" id="last_name" required name="user_last_name" />
    </li>
    <li>
      <label htmlFor="email">Email</label>
      <div className="break"></div>
      <input className="theme-address-forms" type="email" id="email" required name="user_email" />
    </li>
    <li>
      <label htmlFor="country">Choose a country to ship to</label>
      <div className="break"></div>
      <select className="theme-address-forms" id="countries">
        <option value="Empty"></option>
        <option value="Denmark">Denmark</option>
      </select>
    </li>
    <li>
    <label htmlFor="adresse1">Adresse 1</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="text" id="adress1" required name="user_adress1" />
    </li>
    <li>
    <label htmlFor="adresse2">Adresse 2</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="text" id="adress2" name="user_adress1" />
    </li>
    <li>
    <label htmlFor="telefonnummer">Telefonnummer</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="tel" id="phone" name="phone"
       pattern="[0-9]{8}"
       required></input>
    </li>
    <li>
    <label htmlFor="firmanavn">Firmanavn</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="text" id="company_name" name="company_name" />
    </li>
    <li>
    <label htmlFor="firma_VAT">firma VAT</label>
    <div className="break"></div>
      <input className="theme-address-forms" type="tel" id="VAT" name="VAT"
       pattern="[0-9]{8}"
       ></input>
    </li>
  </ul>
  <p>
    <button type="submit">Submit</button>
  </p>
        </form>
        </fieldset>
    )
}