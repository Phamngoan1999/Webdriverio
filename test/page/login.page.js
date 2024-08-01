class LoginPage{
    get usernameTextbox(){
        return $('#username');
    }
    get passwordTextbox(){
        return $('#password');
    }
    get LoginButton(){
        return  $('button[type="submit"]')
    }
    get LoginMessage(){
        return  $('#flash')
    }
    async login(username,passwordTextbox){
        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(passwordTextbox)
        await this.LoginButton.click()
    }
    async checkMessage(message){
        await expect(this.LoginMessage).toHaveText(expect.stringContaining(message))
    }
}
module.exports = new LoginPage()