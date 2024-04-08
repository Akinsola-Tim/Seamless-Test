class createEmployeePage {
    elements = {
        pimBtn : () => cy.contains('PIM'),
        addBtn : () => cy.get('.orangehrm-header-container > .oxd-button'),
        firstNameInput : () => cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'),
        middlenameInput : () => cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
        lastNameInput : () => cy.get(':nth-child(3) > :nth-child(2) > .oxd-input'),
        toggleSwitch : ()  => cy.get('.oxd-switch-input'),
        userNameInput : () => cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        paswdInput : () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmpaswdInput : () => cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveEmployee : () => cy.get('.oxd-button--secondary')

    }

    clickPIM(pim)
    {
        this.elements.pimBtn().click();
    }

    addEmployee(add)
    {
        this.elements.addBtn().click();
    }

    enterFirstName(firstname)
    {
        this.elements.firstNameInput().type(firstname);
    }

    enterMiddleName(middlename)
    {
        this.elements.middlenameInput().type(middlename);
    }

    enterLastName(lastname)
    {
        this.elements.lastNameInput().type(lastname);
    }

    clickToggle(switchtoggle)
    {
        this.elements.toggleSwitch().click();
    }

    enterUserName(username)
    {
        this.elements.userNameInput().type(username);
    }

    enterPassword(psword)
    {
        this.elements.paswdInput().type(psword);
    }

    enterConfirmPswd(confirmpswd)
    {
        this.elements.confirmpaswdInput().type(confirmpswd);
    }

    saveBtnClick(saveemployee)
    {
        this.elements.saveEmployee().click();
    }


}

export default createEmployeePage;