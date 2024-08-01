const LoginPage = require('../page/login.page')

describe('Demo tests', () => {
    it('Login test', async () => {
        browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkMessage('You logged into a secure area!')

    })
})

