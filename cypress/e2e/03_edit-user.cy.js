import editUserPage from "../pages/editUserPage";

describe('Edit User Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.wait(2000)

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