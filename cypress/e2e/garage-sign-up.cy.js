import { generateRandomEmail } from "../support/utils";
import { signUpPageInstance } from "../pages/SignUpPage";
import {
  USER_LAST_NAME,
  USER_NAME,
  USER_PASSWORD,
} from "../fixtures/constants";
import { garagePageInstance } from "../pages/GaragePage";
import { profilePageInstance } from "../pages/ProfilePage";

describe("Sign up flow", () => {
  const userInfo = {
    email: generateRandomEmail(),
    name: USER_NAME,
    lastName: USER_LAST_NAME,
    password: USER_PASSWORD,
  };

  it("should register user", () => {
    signUpPageInstance.visit();
    signUpPageInstance.registerUser(userInfo);

    garagePageInstance.checkLocation();
    garagePageInstance.profileButton().click();

    profilePageInstance.checkLocation();
    profilePageInstance.checkUserInfo({
      name: userInfo.name,
      lastName: userInfo.lastName,
    });
  });

  // When test above fails, `after` hook below fails to open "remove account" modal window
  // TODO: uncomment when this issue resolved
  // after(() => {
  //     cy.visit('https://qauto2.forstudy.space/panel/settings', {
  //         auth: {
  //             username: 'guest',
  //             password: 'welcome2qauto'
  //         }
  //     });
  //     cy.get('button').contains('Remove my account').focus().click();
  //     cy.get('button.btn.btn-danger').contains('Remove').click();
  // });
});
