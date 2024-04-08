import editEmployeePage from "../pages/editEmployee";

describe('Edit Employee Test', () => {

    beforeEach(function() {
        // executes prior each test within it block
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.wait(2000)

   })
   
    it('Edit Employee Successful', () => {
      const editEmployeeObj = new editEmployeePage();
      editEmployeeObj.pimClick();
      editEmployeeObj.searchName('Bread');
      editEmployeeObj.selectOption();
      editEmployeeObj.searchEmployee();
      editEmployeeObj.employeeEdit();
      editEmployeeObj.middleNameEdit('King');
      editEmployeeObj.saveChangesEmp();
      //msg: Successfully Updated
      //assert that Page Title: Personal Details is visible
    })
  
    it('Verify that MiddleName is not Required', () => {
      const editEmployeeObj = new editEmployeePage();
      editEmployeeObj.pimClick();
      editEmployeeObj.searchName('Bread');
      editEmployeeObj.selectOption();
      editEmployeeObj.searchEmployee();
      editEmployeeObj.employeeEdit();
      editEmployeeObj.middleNameEdit('');
      editEmployeeObj.saveChangesEmp();
      //msg: Successfully Updated
    })
})


