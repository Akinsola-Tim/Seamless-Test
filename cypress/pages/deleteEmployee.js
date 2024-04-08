class deleteEmployeePage{

    elements = {
        pimBtn : () => cy.contains('PIM'),
        employeeNameSearchInput : () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        selectSearchOption : () => cy.get('.oxd-autocomplete-dropdown').first().wait(5000),
        searchEmployeeBtn : () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        deleteBtn : () => cy.get('.oxd-table-cell-actions > :nth-child(1)'),
        confirmDelete : () => cy.get('.oxd-button--label-danger')

    }

    pimClick(pim)
    {
        this.elements.pimBtn().click();
    }
    
    searchName(namesearch)
    {
        this.elements.employeeNameSearchInput().type(namesearch);
    }

    selectOption(searchresult)
    {
        this.elements.selectSearchOption().click();
    }

    searchEmployee(search)
    {
        this.elements.searchEmployeeBtn().click();
    }

    deleteEmployee(employeeremoval)
    {
        this.elements.deleteBtn().click();

    }

    confirmRemoval(confirmdelete)
    {
        this.elements.confirmDelete().click();

    }
}

export default deleteEmployeePage;