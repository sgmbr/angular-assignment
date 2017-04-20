/* jshint undef: true, unused: true, esversion: 6, asi: true */

class Message {
    constructor() {
        this.info = {}
        this.info.list = []
    }

    setMessage(newInfo) {
        this.info.list = []
        this.info.list.push(newInfo)
    }

    getMessage() {
        return this.info
    }

    deleteMessage() {
        this.info.list = []
    }

    static getReturn() {
        return new Message()
    }
}
