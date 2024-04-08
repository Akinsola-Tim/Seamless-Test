class editEmployeePage{

    elements = {
        pimBtn : () => cy.contains('PIM'),
        employeeNameSearchInput : () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        selectSearchOption : () => cy.get('.oxd-autocomplete-dropdown').first().wait(5000),
        searchEmployeeBtn : () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
        editEmployeeBtn : () => cy.get('.oxd-table-cell-actions > :nth-child(2)'),
        editMiddleName : () => cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
        saveEmployeeChanges : () => cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button')
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

    employeeEdit(clickedit)
    {
        this.elements.editEmployeeBtn().click();
    }


    middleNameEdit(editname)
    {
        this.elements.editMiddleName().clear();
        this.elements.editMiddleName().type(editname);
    }

    saveChangesEmp(saveemp)
    {
        this.elements.saveEmployeeChanges().click();
    }
    
}

export default editEmployeePage;