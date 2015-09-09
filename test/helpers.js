var
  assert = require('assert'),
  request = require('request'),
  sinon = require('sinon'),
  helpers = require('../lib/helpers.js')

describe('helpers', function () {
  it('should have a Twitter helper', function (done) {
    assert.ok(helpers.Twitter != null, "Twitter is defined");
    var twitter = helpers.Twitter("url", "login", "password");
    assert.ok(twitter.search != null, "Twitter has search method");
    assert.ok(twitter.count != null, "Twitter has search method");
    done();
  });


  before(function (done) {
    sinon
      .stub(request, 'get')
      .yields(null, null, JSON.stringify({
        results: 100
      }));
    done();
  });

  after(function (done) {
    request.get.restore();
    done();
  });

  // offline test
  it('should return count', function (done) {
    var twitter = helpers.Twitter("url", "login", "password");
    twitter.count("bluemix", function (error, body) {
      done();
    });
  });

  // offline test
  it('should return search results', function (done) {
    var twitter = helpers.Twitter("url", "login", "password");
    twitter.search("bluemix", 20, function (error, body) {
      done();
    });
  });
});
