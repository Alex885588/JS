const chai=require('chai');
const {getCityByZipCode}=require('./cities.service');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;
const faker = require('faker');

describe("Test for citiesService file",function(){
    describe("Test for getCityByZipCode function",function(){
        it("Returning results",function(){
            getCityByZipCode(94122).should.eventually.be.equal("San Francisco, CA,United States" )
        })
        it('Returning error if data is not found.', function () {
             expect(
                getCityByZipCode(faker.address.zipCode())
            ).to.eventually.be.
                rejectedWith('No cities found!');
        })
    })
})
