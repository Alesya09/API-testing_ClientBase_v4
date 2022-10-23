import supertest from "supertest";

export default class OrderHelper{
  response

async create(service, client, clientPrice, clientPaid, vendorPrice, vendorPaid) {
  this.response = await supertest(process.env.BASE_URL)
    .post('v4/order')
    .send({client, service, clientPrice, clientPaid, vendorPrice, vendorPaid})
    .set('Authorization', `${process.env.TOKEN}`)
  return this.response
  }

  async get(orderId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .get('v4/order' + `/${orderId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async getAllOrders(){
    this.response = await supertest(process.env.BASE_URL)
      .post('v4/order/search')
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async changeOrder(orderId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .patch('v4/order' + `/${orderId}`)
      .send({'clientPrice': '777', 'clientPaid': '888', 'vendorPrice': '888', 'vendorPaid': '900'})
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }

  async deleteOrder(orderId = ''){
    this.response = await supertest(process.env.BASE_URL)
      .delete('v4/order' + `/${orderId}`)
      .set('Authorization', `${process.env.TOKEN}`)
    return this.response
  }
}