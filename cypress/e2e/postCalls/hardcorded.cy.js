describe('hard-coded req body', ()=>{

    it('hardcoded', ()=>{
        const requestBody = {
            "name": "boyless",
            "job": "leader"
        }
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody
        })
        .then((response) =>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("boyless")
            expect(response.body.job).to.eq("leader")
            expect(response.body.id).to.exist
            expect(response.body.id).to.be.a('string')
        })
    })
})