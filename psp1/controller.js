/* jshint undef:true, unused:true, esversion:6, asi:true */
class Controller {
    constructor(newCompany, newView) {
        //this.theCompany = new Company()
        Controller.theCompany = newCompany
        Controller.view = newView

        window.addEventListener('addSalesPersonEvent', Controller.addSalesPersonEventHandler, false)
        window.addEventListener('addProductEvent', Controller.addProductEventHandler, false)
        window.addEventListener('displayEvent', Controller.displayEventHandler, false)
    }

    setup() {
    }

    static toTableFromString() {
        let salesPersonsTitle = `ID FirstName LastName Salary Commenced\n`
        let allSalesPersons = Controller.theCompany.getAllSalesPersonFullInfo()
        let salesPersonTable = salesPersonsTitle + allSalesPersons.substring(0, allSalesPersons.length-1)

        salesPersonTable = salesPersonTable.split(' ')
        salesPersonTable = Controller.view.tableColumnLeft() + salesPersonTable.join(Controller.view.tableColumnRight() + Controller.view.tableColumnLeft()) + Controller.view.tableColumnRight()
        salesPersonTable = salesPersonTable.split('\n')
        salesPersonTable = salesPersonTable.join(Controller.view.tableRowRight() + Controller.view.tableRowLeft() + Controller.view.tableColumnLeft())
        salesPersonTable = Controller.view.tableRowLeft() + salesPersonTable + Controller.view.tableRowRight()
        salesPersonTable = Controller.view.tableLeftTag() + salesPersonTable + Controller.view.tableRightTag()

        let productTitle = `ID Name Price QuantityOnHand MinimumQuantity\n`
        let allProducts = Controller.theCompany.getAllProductFullInfo()
        let productTable = productTitle + allProducts.substring(0, allProducts.length-1)

        productTable = productTable.split(' ')
        productTable = Controller.view.tableColumnLeft() + productTable.join(Controller.view.tableColumnRight() + Controller.view.tableColumnLeft()) + Controller.view.tableColumnRight()
        productTable = productTable.split('\n')
        productTable = productTable.join(Controller.view.tableRowRight() + Controller.view.tableRowLeft() + Controller.view.tableColumnLeft())
        productTable = Controller.view.tableRowLeft() + productTable + Controller.view.tableRowRight()
        productTable = Controller.view.tableLeftTag() + productTable + Controller.view.tableRightTag()

        return `${salesPersonTable}${Controller.view.br()}${productTable}`
    }

    static addSalesPersonEventHandler(event) {
        let newId = Controller.view.getTagValue('eId')
        let newFirstName = Controller.view.getTagValue('firstName')
        let newLastName = Controller.view.getTagValue('lastName')
        let newSalary = Controller.view.getTagValue('salary')
        let newYearCommenced = Controller.view.getTagValue('commencedYear')

        Controller.view.clearSalesPersonInputBoxes()

        Controller.theCompany.addSalesPerson(newId, newFirstName, newLastName, newSalary, newYearCommenced)
    }

    static addProductEventHandler(event) {
        let newId = Controller.view.getTagValue('pId')
        let newName = Controller.view.getTagValue('productName')
        let newPrice = Controller.view.getTagValue('price')
        let newQuantityOnHand = Controller.view.getTagValue('onhand')
        let newMinimumQuantity = Controller.view.getTagValue('minimum')

        Controller.view.clearProductInputBoxes()

        Controller.theCompany.addProduct(newId, newName, newPrice, newQuantityOnHand, newMinimumQuantity)
    }

    static displayEventHandler(event) {
        Controller.view.out('result', Controller.toTableFromString())
        Controller.view.out('getAllSalesPeople', Controller.theCompany.getAllSalesPeople())
        Controller.view.out('getProductsToOrder', Controller.theCompany.getProductsToOrder())
    }
}
