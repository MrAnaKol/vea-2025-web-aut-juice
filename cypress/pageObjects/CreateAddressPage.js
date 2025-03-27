import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get contryField() {
    return cy.get("#mat-input-1");
  }

  static get nameField() {
    return cy.get("#mat-input-2");
  }

  static get mobileNumberField() {
    return cy.get("#mat-input-3");
  }

  static get zipCodeField() {
    return cy.get("#mat-input-4");
  }

  static get addressField() {
    return cy.get("#address");
  }

  static get cityField() {
    return cy.get("#mat-input-6");
  }

  static get submitButton() {
    return cy.get("#submitButton");
  }
  
}
