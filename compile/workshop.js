"use strict";
function createEmpdata(config) {
    var newEMP = { empFristname: 'string', empLastname: 'string', empID: 11111111, empAge: 0, empSalary: 100000, empIsBonus: true };
    if (config.empFristname) {
        newEMP.empFristname = config.empFristname;
    }
    if (config.empLastname) {
        newEMP.empLastname = config.empLastname;
    }
    if (config.empID) {
        newEMP.empID = config.empID;
    }
    if (config.empAge) {
        newEMP.empAge = config.empAge;
    }
    if (config.empSalary) {
        newEMP.empSalary = config.empSalary;
    }
    if (config.empIsBonus == true) {
        if (config.empSalary) {
            newEMP.empSalary = config.empSalary * 2.5;
        }
    }
    return newEMP;
}
var myEmp = createEmpdata({ empFristname: 'Athiwat', empLastname: 'Jansomwong', empID: 632110358, empAge: 20, empSalary: 100000, empIsBonus: false });
console.log(myEmp);
