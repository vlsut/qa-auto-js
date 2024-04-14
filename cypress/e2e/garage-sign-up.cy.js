import {generateRandomEmail} from "../support/utils";

describe('Sign up flow', () => {
    const BASIC_USERNAME = 'guest';
    const BASIC_PASSWORD = 'welcome2qauto';

    const USER_NAME = 'John';
    const USER_LAST_NAME = 'Johnson';
    const USER_EMAIL = generateRandomEmail();
    const USER_PASSWORD = 'T_r_u_e_3_$P';

    it('should register user', () => {
        cy.visit({url: 'https://qauto2.forstudy.space/', auth: {username: BASIC_USERNAME, password: BASIC_PASSWORD}})
        cy.contains('Sign up').should('be.visible').click();
        cy.get('#signupName').should('be.visible').type(USER_NAME);
        cy.get('#signupLastName').should('be.visible').type(USER_LAST_NAME);
        cy.get('#signupEmail').should('be.visible').type(USER_EMAIL);
        cy.get('#signupPassword').should('be.visible').type(USER_PASSWORD);
        cy.get('#signupRepeatPassword').should('be.visible').type(USER_PASSWORD);
        cy.get('button').contains('Register').should('be.visible').click();
        cy.url().should('include', '/garage');
        cy.get('[routerlink="profile"]').contains('Profile').click();
        cy.get('.profile_name').should('contain', `${USER_NAME} ${USER_LAST_NAME}`);
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
})
