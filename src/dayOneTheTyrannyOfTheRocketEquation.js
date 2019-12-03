const axios = require('axios');
const fuelCounterUpper = require('./fuelCounterUpper');

axios.get('https://adventofcode.com/2019/day/1/input', {
    headers: {
      Cookie: '_ga=GA1.2.423532157.1575256458; _gid=GA1.2.2103923852.1575256458; session=53616c7465645f5fc612f1cfe0e1d787817e3d613e6dfe75ebda766f5a77d3abf4090702417e623e5bca8587002249b8'
    }
  })
  .then(res => {
    const input = res.data.trim().split('\n');
    const sumOfFuel = input.reduce((accum, el) => {
      console.log(el);
      accum += fuelCounterUpper(Number(el));
      return accum;
    }, 0);
    console.log('Sum of Fuel:', sumOfFuel);
  })
  .catch(err => console.error(err));
