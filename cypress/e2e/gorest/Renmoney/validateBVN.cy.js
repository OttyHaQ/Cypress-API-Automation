describe('validate API', ()=>{
    
    it('validate API', ()=>{
        cy.request({
            method: 'POST',
            url: "https://api-sandbox-v3.renmoney.com/bvn/api/v3/validate_v2",
            body: {
                bvn: "22480052324",
                redirectUrl: ""
            },
            headers: {
                'sourceAppID': 'ckpu7zo0p0000gg5436coo7xm'
            }
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Successful")
            expect(response.body.code).to.eq("MwI01")
            expect(response.body.status).to.eq("Successful")
            expect(response.body.data.lastName).to.eq("EKANDEM")
            expect(response.body.data.maritalStatus).to.eq("Single")
        })
    })
})