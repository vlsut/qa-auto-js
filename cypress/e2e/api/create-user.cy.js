import { cyReqPromise, generateRandomUser } from "../../support/utils";

describe("Create User", () => {
  let randomUser;
  let cookie;

  before(() => {
    randomUser = generateRandomUser();
  });

  it("should create a new user", () => {
    cy.request({
      method: "POST",
      url: Cypress.env().apiUrl + "/auth/signup",
      body: randomUser,
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });

  it("should sign in with new user", () => {
    cy.request({
      method: "POST",
      url: Cypress.env().apiUrl + "/auth/signin",
      body: {
        email: randomUser.email,
        password: randomUser.password,
        remember: false,
      },
    }).then((response) => {
      cookie = response.headers["set-cookie"][0];
      const body = response.body;

      expect(response.status).to.eql(200);
      expect(body.data.userId).to.a("number");
    });
  });

  it("should create a car", () => {
    cy.request({
      method: "GET",
      url: Cypress.env().apiUrl + "/cars/brands",
      headers: {
        cookie,
      },
    }).then((response) => {
      const brands = response.body.data;

      cy.request({
        method: "GET",
        url: Cypress.env().apiUrl + "/cars/models",
        headers: {
          cookie,
        },
      }).then((response) => {
        const models = response.body.data;

        cy.request({
          method: "POST",
          url: Cypress.env().apiUrl + "/cars",
          headers: {
            cookie,
          },
          body: {
            carBrandId: brands[0].id,
            carModelId: models[0].id,
            mileage: 100,
          },
        }).then((response) => {
          const body = response.body;

          expect(response.status).to.eql(201);
        });
      });
    });
  });

  it("should return all cars", () => {
    cy.request({
      method: "GET",
      url: Cypress.env().apiUrl + "/cars",
      headers: {
        cookie,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response));
      const body = response.body;

      expect(response.status).to.eql(200);
      expect(body.data.length).to.eql(1);
    });
  });
});
