class editUserPage{

    elements = {
        adminBtn : () => cy.contains('Admin'),
        editBtn : () => cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)'),
        editUsernameInput : () => cy.get(':nth-child(2) > .oxd-input'),
        saveChangesBtn : () => cy.get('.oxd-button--secondary'),
        errorMessage : () => cy.get('.oxd-input-field-error-message').wait(5000)
    }

    clickAdmin(admin)
    {
        this.elements.adminBtn().click();
    }
    
    editUser(useredit)
    {
        this.elements.editBtn().click();
    }

    editUserName(newusername)
    {
        this.elements.editUsernameInput().clear();
        this.elements.editUsernameInput().type(newusername);
    }

    saveChanges(savenewusername)
    {
        this.elements.saveChangesBtn().click();
    }

    getErrorMessage() { return this.elements.errorMessage(); }
    
}

export default editUserPage;