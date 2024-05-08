describe('query parameters', ()=>{

    it('get User', ()=>{
        const queryParam = {page: 2}

        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users",
            qs: queryParam
        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).to.have.length(6);
            expect(response.body.total).to.eq(12);
            expect(response.body.total_pages).to.eq(2);
            expect(response.body.data[0].id).to.eq(7);
            expect(response.body.data[0].first_name).to.eq("Michael");
            expect(response.body.data[2].first_name).to.eq("Tobias")
        })
    })
})