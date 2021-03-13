const CeiCrawler = require('cei-crawler');
const { CeiErrorTypes } = require('cei-crawler')


class CarteiraService{
    constructor (username, senha ) {
        this.username = username
        this.senha = senha
    }

     async getWallet () {
      const ceiCrawler = new CeiCrawler(this.username,  this.senha) // 09056276603 senior@1kk //1kk@senior
      let wallets;

        try {
             wallets = await ceiCrawler.getWallet()
            
          } catch (err) {
            if (err.name === 'CeiCrawlerError') {
              return err.type
            }
          }
        
          return wallets 
  }
}

module.exports = CarteiraService