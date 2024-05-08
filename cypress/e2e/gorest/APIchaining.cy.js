describe("HTTP Requests", () => {
  const token =
    'Bearer c27fa61a79bebeb66cf9aa2fe7d7e38e7deef99316f79ab90c622d5f3af74eaf';

  it("API Chaining", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: token
      },
      body: {
        name: "Johnson Boyles",
        gender: "male",
        email: Math.random().toString(5).substring(2)+'@gmail.com',
        status: "inactive",
      },
    })
      .then((response) => {
        expect(response.status).to.eq(201);
        const userId = response.body.id;
        
        cy.request({
          method: "PUT",
          url: `https://gorest.co.in/public/v2/users/${userId}`,
          headers: {
            Authorization: token
          },
          body: {
            name: "James Travis",
            email: Math.random().toString(5).substring(2)+'@gmail.com',
            status: "active",
          },
        })
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq("James Travis")
            expect(response.body.id).to.eq(userId);
  
            cy.request({
              method: "DELETE",
              url: `https://gorest.co.in/public/v2/users/${userId}`,
              headers: {
                Authorization: token
              },
            }).then((response) => {
              expect(response.status).to.be.eq(204);
            });
          });
      });
  });
});
