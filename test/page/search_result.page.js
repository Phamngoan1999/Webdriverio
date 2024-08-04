const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchResult  extends Page {

    async verifyTitle(){
        await  $('//a[contains(string(),"Hà Nội - Sài Gòn (TP.HCM)")]').waitForDisplayed();
    }

    async verifyDate(date){
        await $('//div[@class="title" and contains(string(),"Hồ Chí Minh") and contains(string(),"Hà Nội")  and contains(string(),"'+date+'")]")]').waitForDisplayed();
    }

    async verifyDateFrom(){
        let options = [{day: '2-digit'}, {month: '2-digit'}, {year: 'numeric'}];
        let dateFrom = super.verifyDate(new Date, options, '/');
        this.verifyDate(dateFrom);
    }

    async verifyDateTo(){
        let datecurent = new Date();
        let month = datecurent.getMonth() + 2;
        let dateTo = new Date(datecurent.getFullYear()+"-"+month+"-28");
        this.verifyDate(dateTo.toLocaleDateString());
    }

    async verifyResult(){
        this.verifyTitle()
        this.verifyDateFrom();
        this.verifyDateTo()
    }

}

module.exports = new SearchResult()