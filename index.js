// Code your solution here
const drivers = ["John", "Tim", "Lucy"];

function findMatching(drivers, John){
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === John.toLowerCase()
    });
};

function fuzzyMatch(drivers, John){
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, John.length) === John.toLowerCase()

    });
};
function matchName(drivers, Lucy) {
    return drivers.filter(function (driver) {
        return driver.name === Lucy
    });
};