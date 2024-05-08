describe('tokens', ()=>{

    let token = null;
    before('get Token', ()=>{
        cy.request({
            method: 'POST',
            url: "https://simple-books-api.glitch.me/api-clients/",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: Math.random().toString(5).substring(2),
                clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
            }
        })
        .then((response)=>{
            token = response.body.accessToken
        })
    })
    
    let order_Id = null;
    before('create order', ()=>{
        cy.request({
            method: 'POST',
            url: "https://simple-books-api.glitch.me/orders",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body: {
                bookId: 1,
                customerName: "John"
              },
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.created).to.eq(true)
            expect(response.body.orderId).to.be.a('string')
            order_Id = response.body.orderId
        })
    })

    it('get all orders', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            cookies: 'myCookies'
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(1)
        })
    })
})