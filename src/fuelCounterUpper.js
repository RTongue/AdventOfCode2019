const fuelCounterUpper = mass => {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) return 0;
  return fuel + fuelCounterUpper(fuel);
};

module.exports = fuelCounterUpper;
