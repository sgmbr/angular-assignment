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
        let salarySum = this.allMySalesPersons.reduce((acc, cur) => acc + cur.salary, 0)
        let salaryMean = salarySum / this.allMySalesPersons.length
        let molecule = this.allMySalesPersons.reduce((acc, cur) => {
            let distance = Math.abs(cur.salary - salaryMean)
            return acc + distance
        }, 0)
        let meanAbsoluteDeviation = molecule / this.allMySalesPersons.length
        return meanAbsoluteDeviation
    }

    getSampleCovariance() {
        let average = function(array) {
            return array.reduce((acc, cur) => acc + cur, 0) / array.length
        }

        let salaries = this.allMySalesPersons.map(aSalesPerson => aSalesPerson.salary)
        let years = this.allMySalesPersons.map(aSalesPerson => aSalesPerson.yearCommenced)

        let salaryAverage = average(salaries)
        let yearAverage = average(years)

        let molecule = 0
        for (let i = 0; i < salaries.length; i++) {
            molecule += (salaries[i] - salaryAverage) * (years[i] - yearAverage)
        }
        let sampleCovariance = molecule / (salaries.length -1)
        return sampleCovariance
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
