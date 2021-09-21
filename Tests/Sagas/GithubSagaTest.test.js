const rewire = require("rewire")
const GithubSagaTest = rewire("./GithubSagaTest")
const stepper = GithubSagaTest.__get__("stepper")
// @ponicode
describe("stepper", () => {
    test("0", () => {
        let callFunction = () => {
            stepper("callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            stepper(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
