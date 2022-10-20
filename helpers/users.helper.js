import supertest from 'supertest'

export default class UsersHelper{
  response

  async create(){
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/user')
      .send({"companyName": "AAA", "email": "aaaa@bbb.cc", "firstName": "Alla", "lastName": "Ivanova", "password": "123456"})
    return this.response
  }

  async search(){
    this.response = await supertest(process.env.BASE_URL)
      .post('email/search')
      .send({"email": "aaaa@bbb.cc"})
  }
}

