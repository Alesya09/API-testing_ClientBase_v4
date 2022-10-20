import UsersHelper from "../helpers/users.helper";
import {expect} from "chai";


describe('Users registration', function () {
  describe("User creation", function () {
    let usersHelper = new UsersHelper()

    before(async function () {
      await usersHelper.create()
    })

    it.skip('response status code is 201', function () {
      expect(usersHelper.response.status).to.eq(201)
    })

    it.skip('response message when register user', function () {
      expect(usersHelper.response.body.message).to.eq("User created successfully. Please check your email and verify it")
    })
  })

  describe("User creation with invalid credential", function () {
    let usersHelper = new UsersHelper()

    before(async function () {
      await usersHelper.create()
    })

    it('response status code is 409 with the same data', function () {
      expect(usersHelper.response.status).to.eq(409)
    })

    it('response message when register with the same data', function () {
      expect(usersHelper.response.body.message).to.eq("User with this e-mail exists")
    })
  })

  describe('Search email for verification', function () {
    let usersHelper = new UsersHelper()

    before(async function () {
      await usersHelper.search()
    })

    it('response status code is 200', function () {
      expect(usersHelper.response.status).to.eq(200)
    })

    it('response message in search email', function () {
      expect(usersHelper.response.body.message).to.eq("EmailSearch ok")
    })
  })
})
