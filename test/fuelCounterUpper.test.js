const fuelCounterUpper = require('../src/fuelCounterUpper');

describe('Fuel Counter-Upper', () => {

  it('converts mass to required fuel', () => {
    expect(fuelCounterUpper(12)).toEqual(2);
    expect(fuelCounterUpper(14)).toEqual(2);
    expect(fuelCounterUpper(1969)).toEqual(654);
    expect(fuelCounterUpper(100756)).toEqual(33583);
  });

});
