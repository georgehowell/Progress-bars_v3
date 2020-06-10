var expect = require("chai").expect;
var request = require('request');

describe("Contents of API", function() {
  describe("status ok and returning JSON", function() {

    var url = "http://pb-api.herokuapp.com/bars";

    it("returns status 200 (request is OK)", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

    it("returns API contents", function() {
      request(url, function(error, response, body) {
        expect(body).to.contain("buttons");
        expect(body).to.contain("bars");
        expect(body).to.contain("limit");
      });
    });

  });

});