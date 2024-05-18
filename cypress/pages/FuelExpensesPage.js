import { BasePage } from "./BasePage";

export class FuelExpensesPage extends BasePage {
  checkLocation() {
    cy.url().should("include", "/expenses");
  }

  addExpenseButton() {
    return cy.get("button").contains("Add an expense");
  }

  vehicleSelect() {
    return cy.get("#addExpenseCar");
  }

  reportDatePicker() {
    return cy.get("#addExpenseDate");
  }

  MileageInput() {
    return cy.get("#addExpenseMileage");
  }

  litersInput() {
    return cy.get("#addExpenseLiters");
  }

  totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  finishExpenseCreationButton() {
    return cy.get("button").contains("Add");
  }
}

export const fuelExpensesPageInstance = new FuelExpensesPage();
