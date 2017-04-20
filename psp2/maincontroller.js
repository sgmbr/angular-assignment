/* jshint undef: true, unused: true, esversion: 6, asi: true */

class MainCtrl {
    constructor(message, parser) {
        this.title = 'PSP2: AngularJS-based Prototyping'
        this.message = message.getMessage()
        this.parser = parser
        this.salesPersonTable = [] // [{id:123, name:'Doe, John'}, {id:234, name: 'Doe, Jane'}...]
    }

    show() {
        let salesPeopleString = this.company.getAllSalesPeople()
        this.salesPersonTable = this.parser.parseAllSalesPeople(salesPeopleString)
        this.meanAbsoluteDeviation = this.company.getMeanAbsoluteDeviation()
    }

    add() {
        this.company = new Company()
        let parsed = this.parser.parseCsv(this.message.list[0])
        parsed.forEach(newSalesPerson => {
            this.company.addSalesPerson(newSalesPerson.id, newSalesPerson.firstName, newSalesPerson.lastName, newSalesPerson.salary, newSalesPerson.yearCommenced)
        })
        this.show()
    }
}

MainCtrl.$inject = ['message', 'parser']
