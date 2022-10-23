import {expect} from "chai"
import OrderHelper from "../helpers/order.helper"
import ClientHelper from "../helpers/client.helper"
import ServiceHelper from "../helpers/service.helper"
import VendorHelper from "../helpers/vendor.helper";

describe('Order', function (){
  describe('Create order', function (){
    let orderHelper = new OrderHelper()
    let clientHelper = new ClientHelper()
    let serviceHelper = new ServiceHelper()
    let vendorHelper = new VendorHelper()
    let client
    let vendor
    let service
    let order

    before(async function (){
      vendor = (await vendorHelper.create()).body
      service = (await serviceHelper.create(vendor.payload)).body.payload
      client = (await clientHelper.create()).body.payload
      order = await orderHelper.create(service, client, 1000, 200, 1000, 300)
    })

    after(async function() {
      vendor = await vendorHelper.response.body
      await vendorHelper.deleteVendor(vendor.payload)
      client = await clientHelper.response.body
      await clientHelper.delete(client.payload)
      service = await serviceHelper.response.body
      await serviceHelper.deleteService(service.payload)
      order = await orderHelper.response.body
      await orderHelper.deleteOrder(order.payload)
    })

    it('response status code is 200', function (){
      expect(orderHelper.response.status).to.eq(200)
    })

    it('response message', function (){
      expect(orderHelper.response.body.message).to.eq('Order created')
    })

    it('response for created id', function (){
      expect(orderHelper.response.body.payload).to.be.a('string')
    })
  })

  describe ('Get order by orderId', function () {
    let orderHelper = new OrderHelper()
    let clientHelper = new ClientHelper()
    let serviceHelper = new ServiceHelper()
    let vendorHelper = new VendorHelper()
    let client
    let vendor
    let service
    let order

    before(async function () {
      vendor = (await vendorHelper.create()).body
      service = (await serviceHelper.create(vendor.payload)).body.payload
      client = (await clientHelper.create()).body.payload
      order = (await orderHelper.create(service, client, 1000, 200, 1000, 300)).body.payload
      await orderHelper.get(order)
    })

    after(async function () {
      await vendorHelper.deleteVendor(vendor.payload)
      await clientHelper.delete(client)
      await serviceHelper.deleteService(service)
      await orderHelper.deleteOrder(order)
    })

    it('response status code is 200', function () {
      expect(orderHelper.response.status).to.eq(200)
    })

    it('response message when create order', function () {
      expect(orderHelper.response.body.message).to.eq('Get Order by id ok')
    })
  })

    describe ('Get All data for orders', function () {
      let orderHelper = new OrderHelper()
      let clientHelper = new ClientHelper()
      let serviceHelper = new ServiceHelper()
      let vendorHelper = new VendorHelper()
      let client
      let vendor
      let service
      let order

      before(async function (){
        vendor = (await vendorHelper.create()).body
        service = (await serviceHelper.create(vendor.payload)).body.payload
        client = (await clientHelper.create()).body.payload
        order = (await orderHelper.create(service, client, 1000, 200, 1000, 300)).body.payload
        await orderHelper.getAllOrders(order)
      })

      after (async function() {
        await vendorHelper.deleteVendor(vendor.payload)
        await clientHelper.delete(client)
        await serviceHelper.deleteService(service)
        await orderHelper.deleteOrder(order)
      })

      it('response status code is 200', function () {
        expect(orderHelper.response.status).to.eq(200)
      })

      it('response message for all orders', function () {
        expect(orderHelper.response.body.message).to.eq('OrderSearch ok')
      })
    })

  describe ('Change order', function (){
    let orderHelper = new OrderHelper()
    let clientHelper = new ClientHelper()
    let serviceHelper = new ServiceHelper()
    let vendorHelper = new VendorHelper()
    let client
    let vendor
    let service
    let order

    before(async function (){
      vendor = (await vendorHelper.create()).body.payload
      service = (await serviceHelper.create(vendor)).body.payload
      client = (await clientHelper.create()).body.payload
      order = (await orderHelper.create(service, client, 8000, 900, 8000, 900)).body.payload
      await orderHelper.changeOrder(order)
    })

    after (async function() {
      await vendorHelper.deleteVendor(vendor)
      await clientHelper.delete(client)
      await serviceHelper.deleteService(service)
      await orderHelper.deleteOrder(order)
    })

    it('response status code is 200', function (){
      expect(orderHelper.response.status).to.eq(200)
    })

    it('response message', function (){
      expect(orderHelper.response.body.message).to.eq('Order updated')
    })

  })

  describe ('Delete order', function (){
    let orderHelper = new OrderHelper()
    let clientHelper = new ClientHelper()
    let serviceHelper = new ServiceHelper()
    let vendorHelper = new VendorHelper()
    let client
    let vendor
    let service
    let order

    before(async function (){
      vendor = (await vendorHelper.create()).body
      service = (await serviceHelper.create(vendor.payload)).body.payload
      client = (await clientHelper.create()).body.payload
      order = (await orderHelper.create(service, client, 800, 900, 800, 900)).body.payload
      await orderHelper.deleteOrder(order)
    })

    after (async function() {
      await vendorHelper.deleteVendor(vendor.payload)
      await clientHelper.delete(client)
      await serviceHelper.deleteService(service)
      await orderHelper.deleteOrder(order)
    })

    it('response status code is 200', function (){
      expect(orderHelper.response.status).to.eq(200)
    })

    it('response message', function (){
      expect(orderHelper.response.body.message).to.eq('Order deleted')
    })

  })
})