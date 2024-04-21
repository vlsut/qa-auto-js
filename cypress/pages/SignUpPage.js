import { BASIC_PASSWORD, BASIC_USERNAME } from "../fixtures/constants";
import { BasePage } from "./BasePage";

export class SignUpPage extends BasePage {
  visit() {
    cy.visit({
      url: Cypress.env().baseUrl,
      auth: { username: BASIC_USERNAME, password: BASIC_PASSWORD },
    });
  }

  signUpButton() {
    return cy.contains("Sign up");
  }

  nameInput() {
    return cy.get("#signupName");
  }

  lastNameInput() {
    return cy.get("#signupLastName");
  }

  emailInput() {
    return cy.get("#signupEmail");
  }

  passwordInput() {
    return cy.get("#signupPassword");
  }

  repeatPasswordInput() {
    return cy.get("#signupRepeatPassword");
  }

  registerButton() {
    return cy.get("button").contains("Register");
  }

  registerUser({ name, email, lastName, password }) {
    this.visit();
    this.signUpButton().should("be.visible").click();
    this.nameInput().should("be.visible").type(name);
    this.lastNameInput().should("be.visible").type(lastName);
    this.emailInput().should("be.visible").type(email);
    this.passwordInput().should("be.visible").type(password);
    this.repeatPasswordInput().should("be.visible").type(password);
    this.registerButton().should("be.visible").click();
  }
}

export const signUpPageInstance = new SignUpPage();
