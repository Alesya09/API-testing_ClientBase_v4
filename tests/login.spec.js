import {expect} from "chai"
import LoginHelper from "../helpers/login.helper";


describe('Auth',function (){
  describe('Successful login',function() {
    let loginHelper = new LoginHelper()

    before(async function () {
      await loginHelper.login(process.env.EMAIL, process.env.PASSWORD)
    })

    it('response status code is 200', function () {
      expect(loginHelper.response.status).to.eq(200)
    })

    it('response body contains authorization token', function () {
      expect(loginHelper.response.body.payload.token).not.to.be.undefined
    })

    it('response message', function () {
      expect(loginHelper.response.body.message).to.eq("Auth success")
    })
  })


  describe('Login with invalid credentials',function (){
    let loginHelper = new LoginHelper()

    before(async function(){
      await loginHelper.login("invalid", "invalid")

    })

    it('response status code is 400',async function (){
      expect(loginHelper.response.status).to.eq(400)

    })

    it('response body contains error message',function (){
      expect(loginHelper.response.body.message).to.eq("Auth failed")
    })
  })

  describe('Get data user', function () {
    let loginHelper = new LoginHelper()
    let users

    before(async function () {
      await loginHelper.login()
      users = await loginHelper.response.body
      await loginHelper.get(users.payload)
    })

    it('response status code is 200', function () {
      expect(loginHelper.response.status).to.eq(200)
    })

    it('response message whet get user', function () {
      expect(loginHelper.response.body.message).to.eq("User found")
    })

    it('response message - role verified', function () {
      expect(loginHelper.response.body.payload).to.eq(users.payload.verified)
    })

    it('response body contains user id', function () {
      expect(loginHelper.response.body.payload).to.eq(users.payload._id)
    })
  })
})