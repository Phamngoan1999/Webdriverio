const { expect } = require('@wdio/globals')
const SearchTest = require('../page/searchTest.page')
const SearchResult = require('../page/searchResult.page')

describe('TS001_Search_Main_Page', () => {
    it('TC001_Search_Main_Page', async () => {
        
        let CHOOSE_DEPARTMENT_FROM_TEXT = "Chọn điểm đi";
        let CHOOSE_DEPARTMENT_FROM_TEXT_SEARCH = "HAN";
        let CHOOSE_ATTRIBUTE_VALUE = "value";
        let CHOOSE_DEPARTMENT_FROM_ID = "HAN";
        let CHOOSE_DEPARTMENT_FROM_NAME = "Hà Nội (HAN)";
        let CHOOSE_DEPARTMENT_TO_TEXT = "Chọn điểm đến";
        let CHOOSE_DEPARTMENT_FROM_TO_SEARCH = "Ho C";
        let CHOOSE_DEPARTMENT_TO_ID = "SGN";
        let CHOOSE_DEPARTMENT_TO_NAME = 'Hồ Chí Minh (SGN)';
        let FLAG_DEPARTMENT_FROM = 'From';
        let FLAG_DEPARTMENT_TO = 'To';

        await SearchTest.open();
        await SearchTest.chooseDepartmentTextbox(FLAG_DEPARTMENT_FROM, CHOOSE_DEPARTMENT_FROM_TEXT, CHOOSE_ATTRIBUTE_VALUE, CHOOSE_DEPARTMENT_FROM_TEXT_SEARCH, CHOOSE_DEPARTMENT_FROM_ID, CHOOSE_DEPARTMENT_FROM_NAME);
        await SearchTest.chooseDepartmentTextbox(FLAG_DEPARTMENT_TO, CHOOSE_DEPARTMENT_TO_TEXT, CHOOSE_ATTRIBUTE_VALUE, CHOOSE_DEPARTMENT_FROM_TO_SEARCH,CHOOSE_DEPARTMENT_TO_ID, CHOOSE_DEPARTMENT_TO_NAME);
        await SearchTest.chooseDateFromTextbox(CHOOSE_ATTRIBUTE_VALUE);
        await SearchTest.chooseDateToTextbox(CHOOSE_ATTRIBUTE_VALUE);
        await SearchTest.addCustomer();
        await SearchTest.clickSearchButton();
        await SearchResult.verifyResult();
        
    })
})