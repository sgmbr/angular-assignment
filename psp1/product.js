/* jshint undef:true, unused:true, esversion:6, asi:true */
class Product {
    constructor(newId, newName, newPrice, newQuantityOnHand, newMinimumQuantity, theCompany) {
        this.id = newId
        this.name = newName
        this.price = Number(newPrice).toFixed(2)
        this.quantityOnHand = Number(newQuantityOnHand)
        this.minimumQuantity = Number(newMinimumQuantity)
        this.myCompany = theCompany
    }

    moreNeeded() {
        return this.quantityOnHand < this.minimumQuantity
    }

    toString() {
        return `${this.id} - ${this.name}`
    }

    getFullInfo() {
        return `${this.id} ${this.name} ${this.price} ${this.quantityOnHand} ${this.minimumQuantity}`
    }
}
