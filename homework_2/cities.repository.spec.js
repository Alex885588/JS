const rewire=require('rewire');
const chai=require('chai');
const {getCityDataByZipCode}=rewire('./cities.repository');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const axios = require('axios');
const sinon = require('sinon');
const expect=chai.expect;


describe("Test for citiesRepository file",()=>{
    describe("Test for getCityDataByZipCode function",()=>{
        it("Returning results",() => {
            sinon.stub(axios, "get").resolves(Promise.resolve({ data:'{"post code":"94122","country":"United States","country abbreviation":"US","places":[{"place name":"San Francisco","longitude":"-122.4836","state":"California","state abbreviation":"CA","latitude":"37.7593"}]}'})); 
            expect(getCityDataByZipCode(94122).should.eventually.be.equal('San Francisco, CA,United States')) ;
        })
        it("Check it be called onky once",()=>{
            expect(sinon.assert.calledOnce(axios.get))
        })
    })
})
