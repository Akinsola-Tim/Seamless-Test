class loginPage{

    elements = {
        usernameInput : () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        passwordInput : () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        loginBtn : () => cy.get('.oxd-button'),
        baseURL : () => 'https://opensource-demo.orangehrmlive.com/'
    }

    enterUsername(username)
    {
        //this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }

    enterPassword(password)
    {
        //this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }

    clickLogin()
    {
        this.elements.loginBtn().click();
    }

    loginSiteUser(a, b)
    {
        cy.visit(this.elements.baseURL());
        cy.wait(2000);
        this.enterUsername(a);
        this.enterPassword(b);
        this.clickLogin();
        cy.wait(2000);
    }
    
}

export default loginPage;