// Code your solution in this file!

const returnFirstTwoDrivers = (scuberDrivers) => {
    return scuberDrivers.slice(0, 2);
  };
  
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 



  const returnLastTwoDrivers = (scuberDrivers) => {
    const lastIndex = scuberDrivers.length - 1;
    return scuberDrivers.slice(lastIndex - 1, lastIndex + 1);
  };
  
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // => ['Amari', 'Mo']



  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); 


const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier;
    };
  };
 
  const quadrupleFare = createFareMultiplier(4);
  console.log(quadrupleFare(100)); // => 400
  
  const doubleFare = createFareMultiplier(2);
  console.log(doubleFare(100)); // => 200




  const fareDoubler = createFareMultiplier(2);
  
  console.log(fareDoubler(100)); // => 200



  const fareTripler = createFareMultiplier(3);
  
  console.log(fareTripler(100)); // Output: 300


  const selectDifferentDrivers = (drivers, selectorFunction) => {
    return selectorFunction(drivers);
  };
  
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const selectedDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(selectedDrivers); // ['Antonia', 'Nuru']

const selectedDrivers2 = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(selectedDrivers2); // ['Amari', 'Mo']