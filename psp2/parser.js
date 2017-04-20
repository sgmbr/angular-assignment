/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Parser {
    constructor() {
        this.parsed = []
    }

    parseCsv(csv, cb) {
        let lines = csv.split('\r\n')
        lines.splice(0, 1) // Delete header

        lines.forEach(line => {
            let columns = line.split(',')
            cb(columns)
        })
    }

    parseSalesPeopleCsv(csv) {
        this.parsed = []
        this.parseCsv(csv, columns => {
            if (columns.length == 6) {
                let salesPerson = {
                    id: Number(columns[0]),
                    firstName: columns[1],
                    lastName: columns[2],
                    salary: Number(columns[3].replace('$', '') + columns[4]),
                    yearCommenced: Number(columns[5])
                }
                this.parsed.push(salesPerson)
            }
        })
        return this.parsed
    }

    parseProductsCsv(csv) {
        this.parsed = []
        this.parseCsv(csv, columns => {
            if (columns.length == 5) {
                let product = {
                    id: columns[0],
                    name: columns[1],
                    price: Number(columns[2]),
                    quantityOnHand: Number(columns[3]),
                    minimumQuantity: Number(columns[4])
                }
                this.parsed.push(product)
            }
        })
        return this.parsed
    }

    parseStr(str, reg) {
        let lines = str.split('<br>')
        let match
        lines.forEach(line => {
            if (match = line.match(reg)) {
                let tableData = {
                    id: match[1],
                    name: match[2]
                }
                this.parsed.push(tableData)
            }
        })
    }

    parseSalesPeopleStr(str) {
        this.parsed = []
        this.parseStr(str, /(\d*)\s-\s(.*)./)
        return this.parsed
    }

    parseProductsToOrderStr(str) {
        this.parsed = []
        this.parseStr(str, /([A-Z]*)\s-\s(.*)/)
        return this.parsed
    }

    static getReturn() {
        return new Parser()
    }
}
