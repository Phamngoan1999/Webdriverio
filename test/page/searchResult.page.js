const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchResult  extends Page {
    
    async verifyTitle(){
        await  expect($('//a[contains(string(),"Hà Nội - Sài Gòn (TP.HCM)")]')).toBePresent()
    }

    async verifyDateFrome(){
        let options = [{day: '2-digit'}, {month: '2-digit'}, {year: 'numeric'}];
        let dateFrom = super.verifyDate(new Date, options, '/');
        await expect($('//span[contains(text(),"'+dateFrom+'")]')).toBePresent();
    }

    async verifyResult(){
        this.verifyTitle()
        this.verifyDateFrome();
    }

}

module.exports = new SearchResult()