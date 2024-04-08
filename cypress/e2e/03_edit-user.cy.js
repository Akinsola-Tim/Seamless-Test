import editUserPage from "../pages/editUserPage";
import loginPage from "../pages/loginPage";

describe('Edit User Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      const loginUsers = new loginPage();
      loginUsers.loginSiteUser('Admin','admin123');
   })
   
    it('Edit User Successful', () => {
      const editUserObj = new editUserPage();
      editUserObj.clickAdmin();
      editUserObj.editUser();
      editUserObj.editUserName('Admin112');
      editUserObj.saveChanges();
      
      //msg: Successfully Updated
    })
    
    it('Verify that Username is not less than five words', () => {
      const editUserObj = new editUserPage();
      editUserObj.clickAdmin();
      editUserObj.editUser();
      editUserObj.editUserName('Adm');
      editUserObj.saveChanges();
      //editUserObj.getErrorMessage().should('have.text', 'Should be at least 5 characters')
      cy.get('.oxd-input-field-error-message').as('errorText').wait(2000);
      cy.get('@errorText').should('have.text', 'Should be at least 5 characters')

      //msg: Should be at least 5 characters
    })
    
   })