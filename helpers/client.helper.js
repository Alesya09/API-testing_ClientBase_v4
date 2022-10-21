import supertest from 'supertest'

export default class ClientHelper{
  response

  async create() {
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/client')
      .send({"name": "Pavel Ivanov", "phone": "2223334455", "email": "pavel@gmail.com"})
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async get(clientId = '') {
    this.response = await supertest(process.env.BASE_URL)
      .get(`v4/client/${clientId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async getAllclients() {
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/client/search')
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async delete(clientId = '') {
    this.response = await supertest(process.env.BASE_URL)
      .delete(`v4/client/${clientId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async patch(clientId = '') {
    this.response = await supertest(process.env.BASE_URL)
      .patch(`v4/client/${clientId}`)
      .send({"name": "Ivan Ivanov", "phone": "111-111-1111", "email": "pavel@gmail.com"})
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }
}


