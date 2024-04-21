export class BasePage {
  appHeader() {
    return cy.get("app-header");
  }

  appFooter() {
    return cy.get("app-footer");
  }
}
