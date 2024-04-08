import deleteEmployeePage from "../pages/deleteEmployee";
import loginPage from "../pages/loginPage";

describe('Delete Employee Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      const loginUsers = new loginPage();
      loginUsers.loginSiteUser('Admin','admin123');
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