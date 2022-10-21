import {expect} from "chai";
import VendorHelper from "../helpers/vendor.helper";

describe ('Vendor', function () {
  describe('Create vendor', function () {
    let vendorHelper = new VendorHelper()

    before(async function () {
      await vendorHelper.create()
    })

    it('response status code is 200', function () {
      expect(vendorHelper.response.status).to.eq(200)
    })

    it('response message', function () {
      expect(vendorHelper.response.body.message).to.eq("Vendor created")
    })

    it('response for created id', function () {
      expect(vendorHelper.response.body.payload).to.be.a('string')
    })
  })

  describe('Get data vendor', function () {
    let vendorHelper = new VendorHelper()
    let vendor

    before(async function () {
      await vendorHelper.create()
      vendor = await vendorHelper.response.body
      await vendorHelper.get(vendor.payload)
    })

    it('response status code is 200', function () {
      expect(vendorHelper.response.status).to.eq(200)
    })

    it('response message when get data vendor', function () {
      expect(vendorHelper.response.body.message).to.eq('Get Vendor by id ok')
    })

    it('response body contains vendor name', function () {
      expect(vendorHelper.response.body.payload.name).to.eq("Ada Ada")
    })
  })

  describe('Get All data for vendors', function () {
    let vendorHelper = new VendorHelper()

    before(async function () {
      await vendorHelper.getAllVendors()
    })

    it('response status code is 200', function () {
      expect(vendorHelper.response.status).to.eq(200)
    })

    it('response message for all vendors', function () {
      expect(vendorHelper.response.body.message).to.eq('VendorSearch ok')
    })
  })

  describe('Change vendor', function () {
    let vendorHelper = new VendorHelper()
    let vendor

    before(async function () {
      await vendorHelper.create()
      vendor = await vendorHelper.response.body
      await vendorHelper.changeVendor(vendor.payload)
    })

    it('response status code is 200', function () {
      expect(vendorHelper.response.status).to.eq(200)
    })

    it('response message for change vendors', function () {
      expect(vendorHelper.response.body.message).to.eq('Vendor updated')
    })
  })

  describe('delete vendor', function () {
    let vendorHelper = new VendorHelper()
    let vendor

    before(async function () {
      await vendorHelper.create()
      vendor = await vendorHelper.response.body
      await vendorHelper.deleteVendor1(vendor.payload)
    })

    it('response status code is 200', function () {
      expect(vendorHelper.response.status).to.eq(200)
    })

    it('response message foe delete vendor', function () {
      expect(vendorHelper.response.body.message).to.eq('Vendor deleted')
    })
  })
})

  // describe.only('delete the same vendor', function (){
  //   let vendorHelper = new VendorHelper()
  //   let vendor
  //
  //   before (async function (){
  //     await vendorHelper.deleteVendor1()
  //     vendor = await vendorHelper.response.body
  //     await vendorHelper.deleteVendor2(vendor)
  //   })
  //
  //   it('response status code is 400', function (){
  //     expect(vendorHelper.response.status).to.eq(400)
  //   })
  //
  //   it('response message foe delete vendor', function (){
  //     expect(vendorHelper.response.body.message).to.eq('Vendor not found')
  //   })
  // })
