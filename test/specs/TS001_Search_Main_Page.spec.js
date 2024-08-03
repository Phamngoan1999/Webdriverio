const { expect } = require('@wdio/globals')
const SearchTest = require('../page/search_test.page')
const SearchResult = require('../page/search_result.page')

describe('TS001_Search_Main_Page', () => {
    it('TC001_Search_Main_Page', async () => {
        
        const CHOOSE_DEPARTMENT_FROM_TEXT = "Chọn điểm đi";
        const CHOOSE_DEPARTMENT_FROM_TEXT_SEARCH = "HAN";
        const CHOOSE_ATTRIBUTE_VALUE = "value";
        const CHOOSE_DEPARTMENT_FROM_ID = "HAN";
        const CHOOSE_DEPARTMENT_FROM_NAME = "Hà Nội (HAN)";
        const CHOOSE_DEPARTMENT_TO_TEXT = "Chọn điểm đến";
        const CHOOSE_DEPARTMENT_FROM_TO_SEARCH = "Ho C";
        const CHOOSE_DEPARTMENT_TO_ID = "SGN";
        const CHOOSE_DEPARTMENT_TO_NAME = 'Hồ Chí Minh (SGN)';
        const FLAG_DEPARTMENT_FROM = 'From';
        const FLAG_DEPARTMENT_TO = 'To';

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