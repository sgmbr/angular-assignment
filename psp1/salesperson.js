/* jshint undef:true, unused:true, esversion:6, asi:true */
class SalesPerson {
    constructor(newId, newFirstName, newLastName, newSalary, newYearCommenced, theCompany) {
        this.id = Number(newId)
        this.firstName = newFirstName
        this.lastName = newLastName
        this.salary = Number(newSalary)
        this.yearCommenced = Number(newYearCommenced)
        this.myCompany = theCompany
    }

    toString() {
        return `${this.id} - ${this.lastName}, ${this.firstName}.`
    }

    getFullInfo() {
        return `${this.id} ${this.firstName} ${this.lastName} ${this.salary} ${this.yearCommenced}`
    }
}
