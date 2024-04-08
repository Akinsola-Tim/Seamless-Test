class deleteUserPage{

    elements = {
        adminBtn : () => cy.contains('Admin'),
        deleteBtn : () => cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'),
        confirmDeleteBtn : () => cy.get('.oxd-button--label-danger'),
        assertDelete : () => cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').should('be.visible')
        
    }

    clickAdmin(admin)
    {
        this.elements.adminBtn().click();
    }
    
    deleteUser(userdelete)
    {
        this.elements.deleteBtn().click();
    }

    saveDelete(confirm)
    {
        this.elements.confirmDeleteBtn().click();
    }

    beVisibleBtn() { return this.elements.assertDelete(); }
    
}

export default deleteUserPage;