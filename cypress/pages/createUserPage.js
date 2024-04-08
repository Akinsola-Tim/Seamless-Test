class createUserPage{

    elements = {
        adminBtn : () => cy.contains('Admin'),
        addBtn : () => cy.get('.orangehrm-header-container > .oxd-button'),
        openDropdown : () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        selectOptionFromDropdown: () => cy.get('.oxd-select-dropdown').first(),
        autocompleteInput: () => cy.get('.oxd-autocomplete-text-input > input'),
        autocompleteSelect : () => cy.get('.oxd-autocomplete-dropdown').first().wait(5000),
        statusDropdown : () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        statusSelect : () => cy.get('.oxd-select-dropdown').first(),
        adminInput : () => cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        passwdInput : () => cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
        confirmPwdInput : () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        saveBtn : () => cy.get('.oxd-button--secondary'),
        errorMessage : () => cy.get('.oxd-input-field-error-message').as('errorText').wait(2000)


    }

    clickAdmin(admin)
    {
        
        this.elements.adminBtn().click();
    }

    clickAdd(add)
    {
        
        this.elements.addBtn().click();
    }

    clickDropdown(select)
    {
        
        this.elements.openDropdown().click();
    }

    clickAdminOption(adminOption)
    {
       
        this.elements.selectOptionFromDropdown().click();
    }

    autocompleteInput(name)
    {
        
        this.elements.autocompleteInput().type(name);
    }

    selectAutoCompleteOption(enable)
    {
        
        this.elements.autocompleteSelect().click();
    }

    statusDropdown(status){this.elements.statusDropdown().click();}

    selectOption(status){this.elements.statusSelect().click();}

    adminNameInput(userName){this.elements.adminInput().type(userName);}

    passwdStrongInput(passwdInput){this.elements.passwdInput().type(passwdInput);}

    confirmPasswdStrongInput(confirmPwdInput){this.elements.confirmPwdInput().type(confirmPwdInput);}

    clickSave(save){this.elements.saveBtn().click();}
    
    getErrorMessage() { return this.elements.errorMessage(); }
    
    
}

export default createUserPage;