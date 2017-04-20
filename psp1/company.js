/* jshint undef:true, unused:true, esversion:6, asi:true */
class Company {
    constructor() {
        this.allMyProducts = []
        this.allMySalesPersons = []
    }

    addSalesPerson(newId, newFirstName, newLastName, newSalary, newYearCommenced) {
        let newSalesPerson = new SalesPerson(newId, newFirstName, newLastName, newSalary, newYearCommenced, this)
        this.allMySalesPersons.push(newSalesPerson)
    }

    sortSalesPersons() {
        this.allMySalesPersons.sort((a, b) => {
            if(a.lastName < b.lastName) {
                return -1
            }
            if(a.lastName > b.lastName) {
                return 1
            }
            return 0
        })
    }

    sortProducts() {
        this.allMyProducts.sort((a, b) => a.id > b.id)
    }

    getAllSalesPeople() {
        // [{id:123, name:'Doe, John'}, {id:234, name: 'Doe, Jane'}...]
        this.sortSalesPersons()
        let out = []
        this.allMySalesPersons.forEach(aSalesPerson => {
            // out.push({id: aSalesPerson.id, name: `${aSalesPerson.lastName}, ${aSalesPerson.firstName}`})
            out += `${aSalesPerson}${View.br()}`
        })
        return out
    }

    getAllSalesPersonFullInfo() {
        let out = ''
        for (let aSalesPerson of this.allMySalesPersons) {
            out += aSalesPerson.getFullInfo() + '\n'
        }
        return out
    }

    getMeanAbsoluteDeviation() {
        let salarySum = this.allMySalesPersons.reduce((acc, val) => acc + val.salary, 0)
        let salaryMean = salarySum / this.allMySalesPersons.length
        let molecule = this.allMySalesPersons.reduce((acc, val) => {
            let distance = Math.abs(val.salary - salaryMean)
            return acc + distance
        }, 0)
        let meanAbsoluteDeviation = molecule / this.allMySalesPersons.length
        return meanAbsoluteDeviation
    }

    addProduct(newId, newName, newPrice, newQuantityOnHand, newMinimumQuantity) {
        let newProduct = new Product(newId, newName, newPrice, newQuantityOnHand, newMinimumQuantity, this)
        this.allMyProducts.push(newProduct)
    }

    getProductsToOrder() {
        this.sortProducts()
        let out = ''
        this.allMyProducts.forEach(aProduct => {
            if (aProduct.moreNeeded()) {
                out += `${aProduct}${View.br()}`
            }
        })
        return out
    }

    getAllProductFullInfo() {
        let out = ''
        for (let aProduct of this.allMyProducts) {
            out += aProduct.getFullInfo() + '\n'
        }
        return out
    }
}
