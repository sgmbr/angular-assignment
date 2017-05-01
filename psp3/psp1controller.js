/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Psp1Ctrl {
    constructor() {
        this.title = 'PSP1: AngularJS version'
        this.company = new Company()
    }

    addSalesPeople() {
        let sp = this.newSalesPerson
        if (sp.id && sp.firstName && sp.lastName && sp.salary && sp.yearCommenced) {
            this.company.addSalesPerson(sp.id, sp.firstName, sp.lastName, sp.salary, sp.yearCommenced)
            sp.id = sp.firstName = sp.lastName = sp.salary = sp.yearCommenced = sp.errorMsg = ''
        } else {
            sp.errorMsg = 'ERROR: All fields are required'
        }
    }

    addProduct() {
        let pr = this.newProduct
        if (pr.id && pr.name && pr.price && pr.quantityOnHand && pr.minimumQuantity) {
            this.company.addProduct(pr.id, pr.name, pr.price, pr.quantityOnHand, pr.minimumQuantity)
            pr.id = pr.name = pr.price = pr.quantityOnHand = pr.minimumQuantity = pr.errorMsg = ''
        } else {
            pr.errorMsg = 'ERROR: All fields are required'
        }
    }

    showAllSalesPeople() {
        let out = this.company.getAllSalesPeople().split('<br>')
        return out
    }

    showProductsToOrder() {
        let out = this.company.getProductsToOrder().split('<br>')
        return out
    }
}
