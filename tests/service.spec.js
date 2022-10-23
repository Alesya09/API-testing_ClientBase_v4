import VendorHelper from "../helpers/vendor.helper";
import {expect} from "chai";
import ServiceHelper from "../helpers/service.helper";


describe('Service', function (){
  describe('Create service', function (){
    let vendorHelper = new VendorHelper()
    let serviceHelper = new ServiceHelper()
    let vendor
    let service

    before(async function (){
      vendor = (await vendorHelper.create()).body
      service = (await serviceHelper.create(vendor.payload))
    })

    after(async function() {
      await vendorHelper.deleteVendor(vendor.payload)
      await serviceHelper.deleteService(service.body.payload)
    })

    it('response status code is 200', function (){
      expect(serviceHelper.response.status).to.eq(200)
    })

    it('response message when create service', function (){
      expect(serviceHelper.response.body.message).to.eq('Service created')
    })

    it('response for created id', function () {
      expect(vendorHelper.response.body.payload).to.be.a('string')
    })
  })

  describe ('Get service by serviceId', function () {
    let vendorHelper = new VendorHelper()
    let serviceHelper = new ServiceHelper()
    let vendor
    let service

    before(async function () {
      vendor = (await vendorHelper.create()).body
      service = (await serviceHelper.create(vendor.payload)).body
      await serviceHelper.get(service.payload)
    })

    after(async function() {
      await vendorHelper.deleteVendor(vendor.payload)
      await serviceHelper.deleteService(service.payload)
    })

    it('response status code is 200', function () {
      expect(serviceHelper.response.status).to.eq(200)
    })

    it('response message when create service', function () {
      expect(serviceHelper.response.body.message).to.eq('Get Service by id ok')
    })

    it('response body contains client id', function () {
      expect(serviceHelper.response.body.payload._id).to.eq(service.payload)
    })
  })

  describe ('Get All data for services', function () {
    let serviceHelper = new ServiceHelper()

    before(async function () {
      await serviceHelper.getAllServices()
    })

    it('response status code is 200', function () {
      expect(serviceHelper.response.status).to.eq(200)
    })

    it('response message for all vendors', function () {
      expect(serviceHelper.response.body.message).to.eq('Service Search ok')
    })
  })

  describe ('Change service', function () {
    let vendorHelper = new VendorHelper()
    let serviceHelper = new ServiceHelper()
    let vendor
    let service

    before(async function (){
      vendor = (await vendorHelper.create()).body
      service = (await serviceHelper.create(vendor.payload)).body
      await serviceHelper.changeService(service.payload)
    })

    after(async function() {
      await vendorHelper.deleteVendor(vendor.payload)
      await serviceHelper.deleteService(service.payload)
    })

    it('response status code is 200', function () {
      expect(serviceHelper.response.status).to.eq(200)
    })

    it('response message for change vendors', function () {
      expect(serviceHelper.response.body.message).to.eq('Service updated')
    })
  })

  describe ('Delete service', function () {
    let vendorHelper = new VendorHelper()
    let serviceHelper = new ServiceHelper()
    let vendor
    let service

    before(async function (){
      vendor = (await vendorHelper.create()).body
      service = (await serviceHelper.create(vendor.payload)).body
      await serviceHelper.deleteService(service.payload)
    })

    after(async function() {
      await vendorHelper.deleteVendor(vendor.payload)
    })

    it('response status code is 200', function () {
      expect(serviceHelper.response.status).to.eq(200)
    })

    it('response message for change vendors', function () {
      expect(serviceHelper.response.body.message).to.eq('Service deleted')
    })
  })
})
