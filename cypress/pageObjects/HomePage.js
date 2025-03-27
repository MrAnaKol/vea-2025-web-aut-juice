import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get userProfileMenuButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchButton() {
    return cy.get("#searchQuery");
  }

  static get searchBar() {
    return cy.get("#searchQuery input");
  }
  
  static get productBox() {
    return cy.get('div.mdc-card');
  }

  static get productCard() {
    return cy.get(".mat-mdc-dialog-container");
  }

  static get closeProductCardButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  static get reviewButton() {
    return cy.get("mat-expansion-panel");
  }

  static get writeReviewField() {
    return cy.get("#mat-input-1");
  }

  static get submitReviewButton() {
    return cy.get("#mat-input-1");
  }

  static get itemsPerPageButton() {
    return cy.get("#mat-select-0");
  }

  static get menuOptions() {
    return cy.get("[role='option']");
  }

  static get addToBasketButton() {
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get shoppingCartButton() {
    return cy.get("button[aria-label='Show the shopping cart']");
  }

  static get orderAndPaymentButton() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }

  static get savedAddressesButton() {
    return cy.get("button[aria-label='Go to saved address page']");
  }

  static get paymentOptionsButton() {
    return cy.get("button[aria-label='Go to saved payment methods page']");
  }
}
