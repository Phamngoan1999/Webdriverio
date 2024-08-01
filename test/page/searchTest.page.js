const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchTest  extends Page {

    get departmentFromTextbox(){
        return $('input[placeholder="Chọn điểm đi"]');
    }

    get departmentFromSearchTextbox(){
        return $('//span[contains(@style,"display")]/input[@data-id="flight_from"]');
    }

    async departmentChooseTextbox(departmentText){
        await $('//strong[contains(text(),"'+departmentText+'")]').click();
    }

    async verifySelecFromDepartment(departmentFromTextFull){
        await   expect(this.departmentFromTextbox).toHaveAttribute('value', departmentFromTextFull);
    }

    get departmentToTextbox(){
        return $('input[placeholder="Chọn điểm đến"]');
    }

    get departmentToSearchTextbox(){
        return $('//span[contains(@style,"display")]/input[@data-id="flight_to"]');
    }

    async verifySelecToDepartment(departmentToTextFull){
        await   expect(this.departmentToTextbox).toHaveAttribute('value', departmentToTextFull);
    }

    async chooseDepartmentFromTextbox(departmentFromSearch,departmentFromText,departmentFromTextFull){
        await this.departmentFromTextbox.click();
        await expect(this.departmentFromSearchTextbox).toBePresent();
        await this.departmentFromSearchTextbox.setValue(departmentFromSearch);
        await this.departmentChooseTextbox(departmentFromText);
        this.verifySelecFromDepartment(departmentFromTextFull);
    }

    async chooseDepartmentToTextbox(departmentToSearch,departmentToText,departmentToTextFull){
        await this.departmentToTextbox.click();
        await expect(this.departmentToSearchTextbox).toBePresent();
        await this.departmentToSearchTextbox.setValue(departmentToSearch);
        await browser.executeAsync((done) => {
            console.log('Wake me up before you go!');
            setTimeout(done, 300);
        }); 
        await this.departmentChooseTextbox(departmentToText);
        this.verifySelecToDepartment(departmentToTextFull);
    }
    
    get dateLabelFromTextbox(){
        return $('//label[text()="Ngày đi"]//following-sibling::input[@placeholder="Chọn ngày"]');
    }
    
    get dateFromTextbox(){
        return $('//span[text()="Hôm nay"]');
    }

    async chooseDateFromTextbox(){
        await this.dateLabelFromTextbox.click();
        await this.dateFromTextbox.click();
    }

    get dateLabelToTextbox(){
        return $('//label[text()="Ngày về"]//following-sibling::input[@placeholder="Chọn ngày"]');
    }

    get dateToTextbox(){
        return $('//div[@class="ui-datepicker-group ui-datepicker-group-last"]//span[contains(@class,"ui-datepicker-day") and text()="28"]');
    }

    async chooseDateToTextbox(){
        await this.dateLabelToTextbox.click();
        await this.dateToTextbox.click();
    }

    get customerLabelTextbox(){
        return $('//form[@id="flight_search_form"]//input[@id="flight_passenger"]');
    }

    async verifyCustomer(){
        expect($('//label[contains(string(),"Trẻ em")]')).toBePresent();
    }

    get btnPlusChildren(){
        return $('//div[contains(@class,"popover cus-popover")]//label[contains(string(),"Trẻ em")]/parent::*//following-sibling::div[@class="col-xs-7 col-sm-7"]//div[@type="button" and @data-type="plus"]');
    }

    async verifyaddCustomer(){
        await   expect(this.customerLabelTextbox).toHaveAttribute('value', "2 khách");
    }

    async addCustomer(){
        await this.customerLabelTextbox.click();
        await this.verifyCustomer(); 
        await  this.btnPlusChildren.click();
        this.verifyaddCustomer();
    }
    
    get btnSearch(){
        return $('//button[@id="search_button"]');
    }
 
    async clickSearchButton(){
        await this.btnSearch.click();
    }

}

module.exports = new SearchTest()