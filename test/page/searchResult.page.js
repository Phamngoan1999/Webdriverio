const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchResult {
    
    async verifyResult(){
        await expect($('//a[contains(string(),"Hà Nội - Sài Gòn (TP.HCM)")]')).toBePresent()
        await expect($('//div[@class="title" and contains(string(),"Hà Nội")]')).toBePresent()
    }

}

module.exports = new SearchResult()