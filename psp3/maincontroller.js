/* jshint undef: true, unused: true, esversion: 6, asi: true */

class MainCtrl {
    constructor(message, parser) {
        this.title = 'PSP3: Finalization'
        this.message = message.getMessage()
        this.parser = parser
        this.company = new Company()
        this.salesPersonTable = [] // [{id:123, name:'Doe, John'}, {id:234, name: 'Doe, Jane'}...]
        this.productsToOrderTable = [] // [{id:'BO', name:'Bolt'}, {id:'NU', name:'Nut'}...]
    }

    setupSalesPersonTable() {
        let salesPeopleStr = this.company.getAllSalesPeople()
        this.salesPersonTable = this.parser.parseSalesPeopleStr(salesPeopleStr)
    }

    addSalesPeople() {
        let parsed = this.parser.parseSalesPeopleCsv(this.message.list[0])
        parsed.forEach(newSalesPerson => {
            this.company.addSalesPerson(newSalesPerson.id, newSalesPerson.firstName, newSalesPerson.lastName, newSalesPerson.salary, newSalesPerson.yearCommenced)
        })
        this.setupSalesPersonTable()
    }

    setupProductsToOrderTable() {
        let productsToOrderStr = this.company.getProductsToOrder()
        this.productsToOrderTable = this.parser.parseProductsToOrderStr(productsToOrderStr)
    }

    addProducts() {
        let parsed = this.parser.parseProductsCsv(this.message.list[0])
        parsed.forEach(newProduct => {
            this.company.addProduct(newProduct.id, newProduct.name, newProduct.price, newProduct.quantityOnHand, newProduct.minimumQuantity)
        })
        this.setupProductsToOrderTable()
    }
}

MainCtrl.$inject = ['message', 'parser']
