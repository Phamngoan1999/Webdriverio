const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchTest  extends Page {
    
    get departmentFromSearchTextbox(){
        return $('//span[contains(@style,"display")]/input[@data-id="flight_from"]');
    }

    get departmentToSearchTextbox(){
        return $('//span[contains(@style,"display")]/input[@data-id="flight_to"]');
    }
    
    get btnSearch(){
        return $('//button[@id="search_button"]');
    }

    get dateLabelFromTextbox(){
        return $('//label[text()="Ngày đi"]//following-sibling::input[@placeholder="Chọn ngày"]');
    }
    
    get dateFromTextbox(){
        return $('//span[text()="Hôm nay"]'); 
    }

    get dateLabelToTextbox(){
        return $('//label[text()="Ngày về"]//following-sibling::input[@placeholder="Chọn ngày"]');
    }

    get dateToTextbox(){
        return $('//div[@class="ui-datepicker-group ui-datepicker-group-last"]//span[contains(@class,"ui-datepicker-day") and text()="28"]');
    }

    get customerLabelTextbox(){
        return $('//form[@id="flight_search_form"]//input[@id="flight_passenger"]');
    }

    get btnPlusChildren(){
        return $('//div[contains(@class,"popover cus-popover")]//label[contains(string(),\
            "Trẻ em")]/parent::*//following-sibling::div[@class="col-xs-7 col-sm-7"]//div[@type="button" and @data-type="plus"]');
    }

    get inputPlusChildren(){
        return $('//div[contains(@class,"popover cus-popover")]//label[contains(string(),\
            "Trẻ em")]/parent::*//following-sibling::div[@class="col-xs-7 col-sm-7"]//input[@data-name="nb_children"]');
    }
    
    async departmentChooseTextbox(departmentText){
        await $('//strong[contains(text(),"'+departmentText+'")]').waitForDisplayed()
        await $('//strong[contains(text(),"'+departmentText+'")]').click();
    }

    async verifyCustomer(){
        await expect($('//div[@id="popover_content_passenger_hotel"]//label[contains(string(),"Trẻ em")]')).toBePresent();
    }

    async verifySelecDepartment(textPlace, attribute, departmentFromTextFull){
        await   expect($('input[placeholder="'+textPlace+'"]')).toHaveAttribute(attribute, departmentFromTextFull);
    }

    async departmentTextbox(textPlace){
        await $('input[placeholder="'+textPlace+'"]').click();
    }

    async verifyDateFrom(attribute){
        let options = [{day: '2-digit'}, {month: '2-digit'}, {year: 'numeric'}];
        let dateFrom = super.verifyDate(new Date, options, '/');
        await expect(this.dateLabelFromTextbox).toHaveAttribute(attribute, dateFrom);
    }

    async verifyDateTo(attribute){
        let datecurent = new Date();
        let month;
        await browser.executeAsync((done) => { month = datecurent.getMonth() + 2; setTimeout(done, 300);});
        let date = new Date(datecurent.getFullYear()+"-"+month+"-28");
        await expect(this.dateLabelFromTextbox).toHaveAttribute(attribute, date.toLocaleDateString());
    }

    async chooseDepartmentTextbox(selectFromOrTo, department, attribute, departmentSearch, departmentText, departmentTextFull){
        await this.departmentTextbox(department);
        if (selectFromOrTo == "From") {
            await expect(this.departmentFromSearchTextbox).toBePresent();
            await this.departmentFromSearchTextbox.setValue(departmentSearch);
        } else {
            await expect(this.departmentToSearchTextbox).toBePresent();
            await this.departmentToSearchTextbox.setValue(departmentSearch);
        }
        await this.departmentChooseTextbox(departmentText);
        this.verifySelecDepartment(department, attribute, departmentTextFull);
    }

    async chooseDateFromTextbox(attribute){
        await this.dateLabelFromTextbox.click();
        await this.dateFromTextbox.click();
        this.verifyDateFrom(attribute);
    }

    async chooseDateToTextbox(attribute){
        await this.dateLabelToTextbox.click();
        await this.dateToTextbox.click(); 
        this.verifyDateTo(attribute)
    }

    async clickSearchButton(){
        await this.btnSearch.click();
    }

    async addCustomer(attribute, numberCustomer){
        await this.customerLabelTextbox.click(); 
        await this.verifyCustomer();
        await this.btnPlusChildren.click();
        expect(await this.inputPlusChildren.getProperty(attribute)).toEqual(""+numberCustomer+"");
    }

}

module.exports = new SearchTest()