const Ajv = require('ajv')
const ajv = new Ajv()

describe('Schema Validation', ()=>{

    it('validate schema', ()=>{

        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users/2",
        })
        .then((response)=>{
            const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "object",
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "number"
                      },
                      "email": {
                        "type": "string"
                      },
                      "first_name": {
                        "type": "string"
                      },
                      "last_name": {
                        "type": "string"
                      },
                      "avatar": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "id",
                      "email",
                      "first_name",
                      "last_name",
                      "avatar"
                    ]
                  },
                  "support": {
                    "type": "object",
                    "properties": {
                      "url": {
                        "type": "string"
                      },
                      "text": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "url",
                      "text"
                    ]
                  }
                },
                "required": [
                  "data",
                  "support"
                ]
            }
            const validate = ajv.compile(schema)
            const isValid = validate(response.body)
            expect(isValid).to.be.true
        })
    })
})