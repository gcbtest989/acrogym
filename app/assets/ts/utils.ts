

class Utils {

    static instance?: Utils

    constructor() {
        if(!Utils.instance){
            Utils.instance = this
        }
        return Utils.instance
    }

}

const instance: Utils = new Utils()
Object.freeze(instance)

export default instance