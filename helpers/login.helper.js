import supertest from 'supertest'

export default class LoginHelper {
  response

  async login(email, password) {
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/user/login')
      .send({'email': email, 'password': password})
    return this.response
  }

  async get(usersId){
    this.response = await supertest(process.env.BASE_URL)
      .get(`v4/user/${usersId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }
}