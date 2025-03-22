/* Your Code Here */
function createEmployeeRecord(employeeArr) {
    return {
        firstName: employeeArr[0] || '',
        familyName: employeeArr[1] || '',
        title: employeeArr[2] || '',
        payPerHour: employeeArr[3] || 0,
        timeInEvents: [],
        timeOutEvents: [],
    };
}
function createEmployeeRecords(employeesArr) {
    return employeesArr.map(createEmployeeRecord);
}
function createTimeInEvent(dateTime){
    let [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return this
};
function createTimeOutEvent(dateTime){
    let [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this
};
function hoursWorkedOnDate(date){
    const timeOutEvents = this.timeOutEvents.find((item)=> item.date === date).hour;
    const timeInEvents = this.timeInEvents.find((item)=> item.date === date).hour
    return (timeOutEvents - timeInEvents)/100
};
function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hoursWorked
};
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, employee) => {
        return total + allWagesFor.call(employee);
    }, 0);
};
function findEmployeeByFirstName(employees,firstName) {
    return employees.find(employee => employee.firstName === firstName);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};