import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
  checkLocation() {
    cy.url().should("contain", "/profile");
  }

  profileNameText() {
    return cy.get(".profile_name");
  }

  checkUserInfo({ name, lastName }) {
    this.profileNameText().should("contain", `${name} ${lastName}`);
  }
}

export const profilePageInstance = new ProfilePage();
