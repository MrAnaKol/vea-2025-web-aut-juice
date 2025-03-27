import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get paymentInfo() {
    return cy.get("[role='row']");
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to review']");
  }

}
