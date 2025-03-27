import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegisterPage } from "../pageObjects/RegisterPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text","demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.newCustomer.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      RegisterPage.emailField.type(RegisterPage.generateRandomEmail());
      // Save that email address to some variable
      // Fill in password field and repeat password field with same password
      const password = "Demo1@";
      RegisterPage.passwordField.type(password);
      RegisterPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegisterPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.menuOptions.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegisterPage.answerField.type("demo");
      // Click Register button
      RegisterPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(RegisterPage.email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileMenuButton.should("contain.text",RegisterPage.email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchBar.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productBox.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should("contain.text","Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchBar.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productCard.should("contain.text","Sour but full of vitamins.");
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchBar.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.productCard.should("contain.text","Now with even more exotic flavour.");
    // Close the card
    HomePage.closeProductCardButton.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productCard.should("contain.text","Sour but full of vitamins.");
    // Close the card
    HomePage.closeProductCardButton.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productBox.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.productCard.should("contain.text","Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("Read a review", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for King
    HomePage.searchBar.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.productBox.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.reviewButton.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.reviewButton.should("contain.text","K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it("Add a review", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Raspberry
    HomePage.searchBar.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.productBox.contains('Raspberry Juice (1000ml)').click();
    // Type in review - "Tastes like metal"
    HomePage.writeReviewField.type("Tastes like metal");
    // Click Submit
    HomePage.submitReviewButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.reviewButton.click();
    // Validate review -  "Tastes like metal"
    HomePage.reviewButton.should("contain.text","Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    HomePage.itemsPerPageButton.should("contain.text","12");
    // Change items per page (at the bottom of page) to 24
    HomePage.itemsPerPageButton.click();
    HomePage.menuOptions.contains("24").click();
    // Validate that the amount of cards is 24
    HomePage.itemsPerPageButton.should("contain.text","24");
    // Change items per page (at the bottom of page) to 36
    HomePage.itemsPerPageButton.click();
    HomePage.menuOptions.contains("36").click();
    // Validate that the amount of cards is 36
    HomePage.itemsPerPageButton.should("contain.text","36");
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Girlie
    HomePage.searchBar.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addToBasketButton.click();
    // Click on "Your Basket" button
    HomePage.shoppingCartButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.addressInfo.contains('United Fakedom').click();
    // Click Continue button
    SelectAddressPage.continueButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.deliveryInfo.contains('Standard Delivery').click();
    // Click Continue button
    DeliveryMethodPage.continueButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.paymentInfo.contains('5678').parents("[role='row']").find("mat-radio-button").click();
    // Click Continue button
    PaymentOptionsPage.continueButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.checkoutButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.allInformation.should("contain.text","OWASP Juice Shop CTF Girlie-Shirt")
    .and("contain.text", "Your order will be delivered in 5 days.")
    .and("contain.text", "Tim Tester")
    .and("contain.text", "Dummystreet 42, Mocktown, Testilvania, 12345")
    .and("contain.text", "United Fakedom")
    .and("contain.text", "Phone Number 4917000000");
    });

    // Create scenario - Add address
    it("Add address", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.orderAndPaymentButton.click();
    // Click on My saved addresses
    HomePage.savedAddressesButton.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.addNewAddressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.contryField.type("Latvija");
    CreateAddressPage.nameField.type("Anatolijs");
    CreateAddressPage.mobileNumberField.type("22334455");
    CreateAddressPage.zipCodeField.type("LV-4001");
    CreateAddressPage.addressField.type("Pētera iela 10a");
    CreateAddressPage.cityField.type("Limbaži");
    // Click Submit button
    CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
    SavedAddressesPage.addressInfo.should("contain.text","Anatolijs")
    .and("contain.text", "Pētera iela 10a, Limbaži, , LV-4001")
    .and("contain.text", "Latvija");
    });

    // Create scenario - Add payment option
    it("Add payment option", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.orderAndPaymentButton.click();
    // Click on My payment options
    HomePage.paymentOptionsButton.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addCardButton.click();
    // Fill in Name
    SavedPaymentMethodsPage.nameField.type("Anatolijs");
    // Fill in Card Number
    SavedPaymentMethodsPage.cardNumberField.type("2222333344445555");
    // Set expiry month to 7
    SavedPaymentMethodsPage.expiryMonth.select("7");
    // Set expiry year to 2090
    SavedPaymentMethodsPage.expiryYear.select("2090");
    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.cardInfo.should("contain.text","5555")
    .and("contain.text", "Anatolijs")
    .and("contain.text", "7/2090");
    });
  });
});
