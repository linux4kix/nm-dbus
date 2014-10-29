var assert = require("assert"),
    expect = require('expect.js'),
    NmManager = require("../lib/nmManager");

//var _defaultConnection = {
//    "connection": {
//        "id": "dummyConnection",
//        "uuid": "8920a029-957d-4da4-9b1a-b5c6c7cbeee2",
//        "autoconnect": false,
//        "type": "gsm"
//    },
//    "ppp": {
//        "lcp-echo-failure": 3,
//        "lcp-echo-interval": 30
//    },
//    "gsm": {
//        "number": "*99#",
//        "apn": "plus"
//    }
//};
//
//function _createConnection(data) {
//    if (!data)
//        data = _defaultConnection;
//    return NmManager.addConnection(data);
//}

describe('active connection suite', function(){

    var deviceId;

    it('activate gsm connection', function(done){

        var device3g, connection3g;

        NmManager.getDevices(8)
            .then(function(devices){
                expect(devices).to.be.an(Array);
                expect(devices).to.not.be.empty();
                device3g = devices[0];
                return NmManager.getConnections("gsm");
            })
            .then(function(connections){
                expect(connections).to.be.an(Array);
                expect(connections).to.not.be.empty();
                connection3g = connections[0];
                return NmManager.activateConnection(connection3g, device3g);
            })
            .then(function(udi){
                console.log(device3g)
                console.log(connection3g)
                return done();
            })
    });

})