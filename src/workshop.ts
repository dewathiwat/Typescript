interface EmployeeConfig {
    empFristname? : string
    empLastname? : string
    empID? : number
    empAge? : number
    empSalary? : number
    empIsBonus? : boolean

}

function createEmpdata (config:EmployeeConfig) : { empFristname : string,empLastname : string,empID : number,empAge : number,empSalary : number,empIsBonus : boolean } {
    let newEMP ={ empFristname : 'string',empLastname : 'string',empID : 11111111 ,empAge : 0,empSalary : 100000,empIsBonus : true  }

    if(config.empFristname){
        newEMP.empFristname = config.empFristname
    }
    if(config.empLastname){
        newEMP.empLastname = config.empLastname
    }
    if(config.empID){
        newEMP.empID = config.empID
    }
    if(config.empAge){
        newEMP.empAge = config.empAge
    }
    if(config.empSalary){
        newEMP.empSalary = config.empSalary
    }
    if(config.empIsBonus == true){
        if(config.empSalary){
            newEMP.empSalary = config.empSalary * 2.5
        }
        
        
    }
    return newEMP

}
let myEmp = createEmpdata({empFristname : 'Athiwat',empLastname : 'Jansomwong',empID : 632110358 ,empAge : 20,empSalary : 100000,empIsBonus : false} )
console.log(myEmp)




    