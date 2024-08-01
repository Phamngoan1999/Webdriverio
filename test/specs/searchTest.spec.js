const { expect } = require('@wdio/globals')
const SearchTest = require('../page/searchTest.page')
const SearchResult = require('../page/searchResult.page')

describe('Demo tests', () => {
    it('Search Test', async () => {
        await SearchTest.open();
        await SearchTest.chooseDepartmentFromTextbox("Han","HAN",'Hà Nội (HAN)');
        await SearchTest.chooseDepartmentToTextbox("Ho C","SGN",'Hồ Chí Minh (SGN)');
        await SearchTest.chooseDateFromTextbox();
        await SearchTest.chooseDateToTextbox();
        await SearchTest.addCustomer();
        await SearchTest.clickSearchButton();
        await SearchResult.verifyResult();
    })
})