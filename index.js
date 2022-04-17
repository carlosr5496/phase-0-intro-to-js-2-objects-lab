// Write your solution in this file!
let employee = {
    name : "John",
    streetAddress : "2900 Old Adobe Rd"
}
const employeeUsingSpreadOp = {...employee};

function updateEmployeeWithKeyAndValue() {
    let employeeUsingSpreadOp = {
        name : "Sam",
        streetAddress : "11 Broadway"
    };
    return employeeUsingSpreadOp;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey() {
    return {
        [employee.name] : "",
    };
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}