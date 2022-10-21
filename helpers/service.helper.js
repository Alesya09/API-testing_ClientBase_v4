import supertest from "supertest";

export default class ServiceHelper{
  response

  async create(){
    this.response = await supertest(process.env.BASE_URL)
    .post('v4/service')
    .send({"name": "Tutoring", "vendorPrice": "100", "clientPrice": "200", "description": "Good morning"})
    .set('Authorization', `${process.env.TOKEN}`)
  return this.response
  }

  async get(serviceId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .get('v4/service' + `/${serviceId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async getAllServices(){
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/service/search')
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async changeService(serviceId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .patch('v4/service' + `/${serviceId}`)
      .send({"name": "Company Name", "vendorPrice": "1000", "clientPrice": "200", "description": "Good evening!"})
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async deleteService(serviceId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .delete('v4/service' + `/${serviceId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }
}
