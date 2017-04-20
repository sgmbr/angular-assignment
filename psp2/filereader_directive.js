/* jshint undef: true, unused: true, esversion: 6, asi: true */

class OnReadFile {
    constructor(message) {
        this.restrict = 'A'
        this.message = message
    }

    link(scope, element, attrs) {
        let message = this.message
        element.on('change', changeEvent => {
            let files = changeEvent.target.files

            let r = new FileReader()
            r.onload = e => {
                let contents = e.target.result
                message.setMessage(contents)
                scope.$apply()
            }

            r.readAsText(files[0])
        })
    }

    static directiveFactory(message) {
        OnReadFile.instance = new OnReadFile(message)
        return OnReadFile.instance
    }
}

OnReadFile.$inject = ['message']
