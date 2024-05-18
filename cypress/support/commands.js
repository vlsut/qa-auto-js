Cypress.Commands.add("createExpense", ({ cookie, body }) => {
  return cy
    .request({
      method: "POST",
      url: `${Cypress.env().apiUrl}/expenses`,
      headers: { cookie },
      body,
    })
    .then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.status).to.eql("ok");

      return response.body;
    });
});
