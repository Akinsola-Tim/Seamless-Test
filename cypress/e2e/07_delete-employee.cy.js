import deleteEmployeePage from "../pages/deleteEmployee";

describe('Delete Employee Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.wait(2000)
   })
   
    it('Delete Employee Successful', () => {
      const deleteEmployeeObj = new deleteEmployeePage();
      deleteEmployeeObj.pimClick();
      deleteEmployeeObj.searchName('Bread');
      deleteEmployeeObj.selectOption();
      deleteEmployeeObj.searchEmployee();
      deleteEmployeeObj.deleteEmployee();
      deleteEmployeeObj.confirmRemoval();
      cy.get('.oxd-button--secondary').should('be.visible')
      //verify that delete button is visible
      //msg: Successfully Deleted
    })
   
    
   })