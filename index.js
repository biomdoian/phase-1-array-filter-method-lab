// Code your solution here
function findMatching(driverNames, searchString) {
    return driverNames.filter(name => 
      name.toLowerCase().includes(searchString.toLowerCase())
    );
  }
  
  function fuzzyMatch(driverNames, searchString) {
    return driverNames.filter(name => 
      name.toLowerCase().startsWith(searchString.toLowerCase())
    );
  }
  
  function matchName(driverObjects, searchString) {
    return driverObjects.filter(driver => 
      driver.name === searchString
    );
  }