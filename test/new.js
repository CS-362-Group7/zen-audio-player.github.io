const assert = require("assert");
const everything = require("../js/everything.js");

// const fs = require( "fs" );
// var path = require( "path" );

// const testHTML = fs.readFileSync( path.join( __dirname, "index.html" ) ).toString();

// const { JSDOM } = require( "jsdom" );
// const jsdom = new JSDOM( testHTML );


describe("everything", function() {
    before(function () {
        global.$ = global.jQuery = require("jquery");
    });
    it("should return a value less than 4", function (done) {
        assert.ok(everything.pickDemo());
        done();
    });
});

