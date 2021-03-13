var Excel = require('exceljs');
var FII = require('../domain/fii');


class FileManager {


    async process_file(wallets) {

       console.log('INICIANDO PROCESSAMENTO DA CARTEIRA DO CLIENTE')

        try {
            let filename = '/Users/gabrielfelix/Documents/centralizador_carteira/api/file/wallet.xlsx'
            let workbook = new Excel.Workbook();
            await workbook.xlsx.readFile(filename);
            let worksheet = workbook.worksheets[0];
            let fiis = [];
            
            await this.writeStocks(wallets, worksheet, fiis)
            await this.writeFIIs(worksheet, fiis)

            workbook.xlsx.writeFile(filename);
        
        }catch (err) {
                console.log(err)
        }

        console.log('"carteira processada com sucesso"')
        return "carteira processada com sucesso"
    } 

    writeFIIs( worksheet, fiis){
        let rowIndex = 20
            for(var fii of fiis) {                    
                    const is_end_of_stocks_table = rowIndex == 42
                    if (is_end_of_stocks_table) {
                        break
                    }

                    let row = worksheet.getRow(++rowIndex);

                    row.getCell(1).value = fii.code;
                    row.getCell(2).value = fii.quantity;
                    row.getCell(4).value = fii.price;
                    row.getCell(9).value = fii.institution;
                    row.commit();    
                
                    row++
            }
    }   

    writeStocks(wallets, worksheet, fiis){
        let rowIndex = 43
            for(var wallet of wallets) {
                for(var stockWallet of wallet['stockWallet']){
                    
                    const is_end_of_stocks_table = rowIndex == 70
                    if (is_end_of_stocks_table) {
                        break
                    }
                    
                    if (this.is_fii(stockWallet)) {
                        let fii = new FII(stockWallet['code'], stockWallet['quantity'], stockWallet['price'], wallet['institution'])
                        fiis.push(fii)
                        continue
                    }

                    let row = worksheet.getRow(++rowIndex);

                    row.getCell(1).value = stockWallet['code'];
                    row.getCell(2).value = stockWallet['quantity'];
                    row.getCell(4).value = stockWallet['price'];
                    row.getCell(9).value = wallet['institution'];
                    row.commit();    
                
                    row++
                }
            }
    }   

    is_fii(stockWallet){
        let code = stockWallet['code'] 
        let is_fii = code.slice(- 2) 
        
        if (is_fii == 11 || is_fii == 12) {
            return true
        }

        return false

    }

}




module.exports = FileManager