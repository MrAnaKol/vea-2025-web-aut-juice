import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get deliveryInfo() {
    return cy.get("[role='row']");
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to delivery method selection']");
  }

}
