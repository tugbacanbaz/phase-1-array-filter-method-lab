const findMatching = (drivers, name) => {

  return drivers.filter(
    (driver) => (driver = name && driver.toUpperCase() === name.toUpperCase())

  );
};



const fuzzyMatch = (drivers, name) => {
    return drivers.filter((driver) => driver.startsWith(name));
  };



  function matchName(drivers, name){
    const matchNames = drivers.filter(function(item){
        if(item.name === name){
            return item
        }
    })
    return matchNames
}
