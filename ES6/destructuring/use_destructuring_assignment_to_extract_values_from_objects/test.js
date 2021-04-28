const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  /*
  Replace the two assignments with an equivalent destructuring assignment. 
  It should still assign the variables today and tomorrow the values of today and tomorrow from the 
  HIGH_TEMPERATURES object.
  */

  const HIGH_TEMPERATURES_DESTRUCTURING = {
      yesterdayDestruct: 75,
      todayDestruct: 77,
      tomorrowDestruct: 80
  };

  const { todayDestruct, tomorrowDestruct } = HIGH_TEMPERATURES_DESTRUCTURING;

  console.log(todayDestruct, tomorrowDestruct);
   

