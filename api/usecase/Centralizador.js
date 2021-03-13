const CarteiraService = require('../services/CarteiraService')
const FileManager = require('../services/FileManager')


class Centralizador {
    constructor ( login, senha ) {
        this.login = login
        this.senha = senha
    }

    async process () {
        const service = new CarteiraService(this.login, this.senha)
        const wallets = await service.getWallet()

        const fileManager = new FileManager()
        const result = await fileManager.process_file(wallets)

        return result
    }
}


module.exports = Centralizador