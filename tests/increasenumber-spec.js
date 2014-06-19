var expect = require('expect.js');
var IncreaseNumber = require('../IncreaseNumber');

describe('increasenumber', function() {

  it('increasenumber is existed', function() {
    expect(IncreaseNumber).to.be.ok();
    expect(IncreaseNumber.moneyFormat).to.be.ok();
    expect(IncreaseNumber.moneyFormat).to.be.a('function');
  });

  it('moneyFormat success', function() {
    expect(IncreaseNumber.moneyFormat(123456789, 0)).to.eql('123,456,789');
    expect(IncreaseNumber.moneyFormat(12345.6789, 2)).to.eql('12,345.68');
  });

});
