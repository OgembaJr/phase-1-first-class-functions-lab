// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const firstTwo = drivers.slice(0, 2)
    return firstTwo
  }
  
  function returnLastTwoDrivers(drivers){
    return drivers.slice(2)
  }
  
  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]
  
  const createFareMultiplier = function (interger) {
    return function (fare) {
      return interger * fare;
    }
  }
  
  const fareDoubler = createFareMultiplier(2)
  
  const fareTripler = createFareMultiplier(3)
  
    function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
  }