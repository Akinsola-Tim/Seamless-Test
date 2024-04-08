import deleteUserPage from "../pages/deleteUserPage";

describe('Delete User Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.wait(2000)
   })
   
    it('Delete User Successful', () => {
      const deleteUserObj = new deleteUserPage();
      deleteUserObj.clickAdmin();
      deleteUserObj.deleteUser();
      deleteUserObj.saveDelete();
      deleteUserObj.beVisibleBtn().should('be.visible') 
      //verify that delete button is visible
      //msg: Successfully Deleted
    })
   
    
   })