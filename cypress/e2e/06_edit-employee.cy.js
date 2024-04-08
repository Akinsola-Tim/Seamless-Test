import editEmployeePage from "../pages/editEmployee";
import loginPage from "../pages/loginPage";

describe('Edit Employee Test', () => {

    beforeEach(function() {
        // executes prior each test within it block
        const loginUsers = new loginPage();
        loginUsers.loginSiteUser('Admin','admin123');
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


