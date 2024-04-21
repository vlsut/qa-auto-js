import { BasePage } from "./BasePage";

export class GaragePage extends BasePage {
  checkLocation() {
    cy.url().should("include", "/garage");
  }

  profileButton() {
    return cy.get('[routerlink="profile"]').contains("Profile");
  }

  addCarButton() {
    return cy.get("button").contains("Add car");
  }

  carBrandSelect() {
    return cy.get("#addCarBrand");
  }

  carModelSelect() {
    return cy.get("#addCarModel");
  }

  carMileageInput() {
    return cy.get("#addCarMileage");
  }

  addExpenseButton() {
    return cy.get("button").contains("Add");
  }
}

export const garagePageInstance = new GaragePage();
