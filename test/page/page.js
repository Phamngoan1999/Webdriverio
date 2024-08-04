const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

function join(date, options, separator) {
    function format(option) {
       let formatter = new Intl.DateTimeFormat('en', option);
       return formatter.format(date);
    }
    return options.map(format).join(separator);
}

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        browser.url(`https://www.bestprice.vn/`)
        return browser.maximizeWindow()
    }

    verifyDate (date, options, separator) {
        return  join(date, options, separator);
    }

    timeReverse(){
        return  100;
    }
}
