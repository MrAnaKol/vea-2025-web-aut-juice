import { BasePage } from "../pageObjects/basePage";

export class RegisterPage extends BasePage {
  static email;

  static get url() {
    return "/#/register";
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  static generateRandomEmail(){
    this.email = "email_" + 
                this.getRandomInt(10) + 
                this.getRandomInt(10) + 
                this.getRandomInt(10) + 
                this.getRandomInt(10) + 
                "@ebox.com";    
    return this.email;
  }

  static get emailField() {
    return cy.get("#emailControl");
  }

  static get passwordField() {
    return cy.get("#passwordControl");
  }

  static get repeatPasswordField() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQuestionField() {
    return cy.get("#mat-select-value-3");
  }
  
  static get menuOptions() {
    return cy.get("[role='option']");
  }

  static get answerField() {
    return cy.get("#securityAnswerControl");
  }

  static get registerButton() {
    return cy.get("button#registerButton");
  }
}
