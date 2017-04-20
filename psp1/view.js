/* jshint undef:true, unused:true, esversion:6, asi:true */

class View {
    static setUp() {
        View.clr()
        View.setUpAddSalesPersonBtn('btnAddSalesPerson')
        View.setUpAddProductBtn('btnAddProduct')
        View.setUpDisplayBtn('btnDisplay')
    }

    static fireCustomEvent(eventName) {
        let eventInput = new Event(eventName)
        window.dispatchEvent(eventInput)
    }

    static addSalesPersonBtnClickHandler(event) {
        View.fireCustomEvent('addSalesPersonEvent')
    }

    static addProductBtnClickHandler(event) {
        View.fireCustomEvent('addProductEvent')
    }

    static displayBtnClickHandler(event) {
        View.fireCustomEvent('displayEvent')
    }

    static setUpAddSalesPersonBtn(tagId) {
        document.getElementById(tagId).onclick = View.addSalesPersonBtnClickHandler
    }

    static setUpAddProductBtn(tagId) {
        document.getElementById(tagId).onclick = View.addProductBtnClickHandler
    }

    static setUpDisplayBtn(tagId) {
        document.getElementById(tagId).onclick = View.displayBtnClickHandler
    }

    static getTagValue(tagId) {
        return document.getElementById(tagId).value
    }

    static clearTagValue(tagId) {
        document.getElementById(tagId).value = ''
    }

    static clearSalesPersonInputBoxes() {
        View.clearTagValue("eId")
        View.clearTagValue("firstName")
        View.clearTagValue("lastName")
        View.clearTagValue("salary")
        View.clearTagValue("commencedYear")
    }

    static clearProductInputBoxes() {
        View.clearTagValue("pId")
        View.clearTagValue("productName")
        View.clearTagValue("price")
        View.clearTagValue("onhand")
        View.clearTagValue("minimum")
    }

    static out(tagId, msg) {
        document.getElementById(tagId).innerHTML = msg
    }

    static clr() {
        document.body.style.fontFamily = "Courier New"
    }

    static tableLeftTag() {
        return '<table>'
    }

    static tableRightTag() {
        return '</table>'
    }

    static tableRowLeft() {
        return "<tr>"
    }

    static tableRowRight() {
        return "</tr>"
    }

    static tableColumnLeft() {
        return "<td>"
    }

    static tableColumnRight() {
        return "</td>"
    }

    static br() {
        return "<br>"
    }

    /*
    static elt(name) {
        return document.createElement(name)
    }

    static drawTable(title, body) {
        let table = View.elt('table')
        let headerElt = table.appendChild(View.elt('thead'))
        let headerRowElt = headerElt.appendChild(View.elt('tr'))
        title = title.split(' ')
        title.forEach(value => {
            let cell = View.elt('th')
            cell.innerHTML = value
            headerRowElt.appendChild(cell)
        })
        let bodyElt = table.appendChild(View.elt('tbody'))
        body = body.split('\n')
        body.forEach(row => {
            let bodyRowElt = bodyElt.appendChild(View.elt('tr'))
            row = row.split(' ')
            row.forEach(value => {
                let cell = View.elt('td')
                cell.innerHTML = value
                bodyRowElt.appendChild(cell)
            })
        })
        return table
    }
    */
}
