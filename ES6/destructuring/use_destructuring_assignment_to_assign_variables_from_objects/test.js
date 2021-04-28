const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const highToday = HIGH_TEMPERATURES.today;
  const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  
/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables highToday and highTomorrow the values of today and 
tomorrow from the HIGH_TEMPERATURES object.
*/  

const HIGH_TEMPERATURES_ASSIGN = {
    yesterdayAssign: 75,
    todayAssign: 77,
    tomorrowAssign: 80
};

const { todayAssign: highTodayAssign, tomorrowAssign: highTomorrowAssign } = HIGH_TEMPERATURES_ASSIGN;

console.log(highTodayAssign, highTomorrowAssign);


