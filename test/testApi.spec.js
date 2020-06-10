var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');

var API = {
    IsAlive: function(address) {
        try {
           var pingOneSuccess = this.Ping(address);
           var pingTwoSuccess = this.Ping(address);
           var pingThreeSuccess = this.Ping(address);
        } catch (e) {
            return new Error('ping threw exception');
        } if(pingOneSuccess && pingTwoSuccess && pingThreeSuccess){
            return true;
        }
        return false;
    },
    Ping: function(address) {
        return true;
    },
    KillServer: function() {

    }
}

describe('Server "IsAlive" Tests', function() {
    it('should call ping the server it is passed', function() {
        var address = "http://pb-api.herokuapp.com/bars";

        var mockAPI = sinon.mock(API);
        mockAPI.expects('Ping').withExactArgs(address);

        API.IsAlive(address);

        mockAPI.verify;
        mockAPI.restore();
    })

    it('should call ping atleast one time', function() {
        var mockAPI = sinon.mock(API);
        mockAPI.expects('Ping').atLeast(1);

        API.IsAlive();

        mockAPI.verify;
        mockAPI.restore();
    })

    it('should call ping no more than 3 times but atleast once', function() {
        var mockAPI = sinon.mock(API);
        mockAPI.expects('Ping').atMost(3).atLeast(1);

        API.IsAlive();

        mockAPI.verify;
        mockAPI.restore();
    })
})