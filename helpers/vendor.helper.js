import supertest from 'supertest'

export default class VendorHelper{
  response

  async create(){
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/vendor')
      .send({"name": "Ada Ada", "phone": "123-123-4567", "email": "ada@gmail.com"})
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async get(vendorId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .get('v4/vendor' + `/${vendorId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async getAllVendors(){
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/vendor/search')
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async changeVendor(vendorId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .patch('v4/vendor' + `/${vendorId}`)
      .send({"name": "Ada Ivanova", "phone": "123-123-8888", "email": "ada@gmail.com"})
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async deleteVendor(vendorId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .delete('v4/vendor' + `/${vendorId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }
}






