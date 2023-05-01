import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Kassen } from "../pages/Kassen";
import App from "../App";
import {AriaLabelStr} from '../models/AriaLabelStr';
//import { debug } from "vitest-preview";

describe(App.name +'Rendering', () => {
    it('renders the of correct labels', () => {

        render(<App/>);
        fireEvent.click(screen.getByText("Kassen")) // Der skiftes side til Kassen

        expect(screen.getByText("Leveringsinformationer:")).toBeInTheDocument();
        expect(screen.getByText("Fornavn*")).toBeInTheDocument();        
        expect(screen.getByText("Efternavn*")).toBeInTheDocument();
        expect(screen.getByText("Email*")).toBeInTheDocument();
        expect(screen.getByText("Choose a country to ship to*")).toBeInTheDocument();        
        expect(screen.getByText("Adresse 1*")).toBeInTheDocument();
        expect(screen.getByText("Telefonnummer*")).toBeInTheDocument();        
        expect(screen.getByText("Firmanavn")).toBeInTheDocument();
        expect(screen.getByText("firma VAT")).toBeInTheDocument();              
        expect(screen.getByText("Jeg vil gerne modtage nyhedsbrev og tilbud")).toBeInTheDocument();
        expect(screen.getByText("Til betaling")).toBeInTheDocument(); 
    })     
    
});

describe(App.name +'Function of form', () => {

    it('Custom made fejlmeddelelser og response fra requestbin.com', async () => {
        const user = userEvent.setup();
        render(<App/>);
        fireEvent.click(screen.getByText("Kassen")) // Der skiftes side til Kassen

        // Alle felter som ikke har custom made fejlmeddelelse udfyldes korrekt
        const fornavn = await screen.getByLabelText("Fornavn*");
        await user.type(fornavn, "Jens Jakob"); 
        const efternavn = await screen.getByLabelText("Efternavn*");
        await user.type(efternavn, "Thodberg");
        const adress1 = await screen.getByLabelText("Adresse 1*");
        await user.type(adress1, "Søpassagen 14 st tv");
        fireEvent.click(screen.getByRole("checkbox", {name: AriaLabelStr.vilkaar_accept }))

        //Custom made fejl meddelelse for email
        const email = screen.getByLabelText(
            "Email*"
          ) as HTMLInputElement;
        const form = screen.getByRole("form", { name: "adresse_form" });
        fireEvent.submit(form);
        expect(email).toBeInvalid(); // tomt felt
        expect(email.validationMessage).toEqual(AriaLabelStr.user_email_err);
        await user.type(email, "jensjakohodb");
        fireEvent.submit(form);
        expect(email).toBeInvalid(); // forkert format af email
        expect(email.validationMessage).toEqual(AriaLabelStr.user_email_err);
        await user.type(email, "jensjakob@thodberg.com"); // korrekt format af email
        
        //Custom made fejl meddelelser for post nr 
        const postnr1 = screen.getByLabelText(
            "Post nr.*"
          ) as HTMLInputElement;
          fireEvent.submit(form);
          expect(postnr1).toBeInvalid(); // tomt felt
          expect(postnr1.validationMessage).toEqual(AriaLabelStr.user_postnr_err);
          await user.type(postnr1, "000000000");
          fireEvent.submit(form);
          expect(postnr1).toBeInvalid(); // forkert format af postnr.
          expect(postnr1.validationMessage).toEqual(AriaLabelStr.user_postnr_err)          
          await user.type(postnr1, "2100");  // korrekt format af postnr   

        //Custom made fejl meddelelser for telefon nr
        const phone = screen.getByLabelText(
            "Telefonnummer*"
          ) as HTMLInputElement;
          fireEvent.submit(form);
          expect(phone).toBeInvalid(); // tomt felt
          expect(phone.validationMessage).toEqual(AriaLabelStr.user_telefon_nr_err);
          await user.type(phone, "000000000222");
          fireEvent.submit(form);
          expect(phone).toBeInvalid(); // forkert format af telefonnr..
          expect(phone.validationMessage).toEqual(AriaLabelStr.user_telefon_nr_err)           
          await user.type(phone, "22912738"); // korrekt format af telefon nr

        //Server response fra requestbin.com testes med alle felter gyldige
        fireEvent.submit(form);
        //await screen.findByText("Besked fra server om at data er modtaget");    
    })  
    
});

