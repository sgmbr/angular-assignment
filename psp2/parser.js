/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Parser {
    constructor() {
        this.parsed = []
    }

    parseCsv(csv) {
        this.parsed = []

        let lines = csv.split('\r\n')
        lines.splice(0, 1) // Delete header

        lines.forEach(line => {
            let columns = line.split(',')
            let salesPerson = {
                id: columns[0],
                firstName: columns[1],
                lastName: columns[2],
                salary: Number(columns[3].replace('$', '') + columns[4]),
                yearCommenced: Number(columns[5])
            }
            this.parsed.push(salesPerson)
        })
        return this.parsed
    }

    parseAllSalesPeople(text) {
        this.parsed = []

        let lines = text.split('<br>')
        let match
        lines.forEach(line => {
            if (match = line.match(/(\d*)\s-\s(.*)./)) {
                let tableData = {
                    id: match[1],
                    name: match[2]
                }
                this.parsed.push(tableData)
            }
        })
        return this.parsed
    }

    static getReturn() {
        return new Parser()
    }
}
