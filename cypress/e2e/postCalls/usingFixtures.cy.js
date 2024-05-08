describe('random Json', ()=>{

    it('dynamically generated json', ()=>{
        cy.fixture('requestBody.json').then((requestBody)=>{
            cy.request({
                method: "POST",
                url: "https://reqres.in/api/users",
                body: requestBody
            })
            .then((response) =>{
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.job).to.eq(requestBody.job)
                expect(response.body.id).to.exist
                expect(response.body.id).to.be.a('string')
                expect(response.body).to.have.property('name', requestBody.name)
            })
        })
    })
})