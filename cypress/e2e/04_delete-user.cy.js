import deleteUserPage from "../pages/deleteUserPage";
import loginPage from "../pages/loginPage";

describe('Delete User Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      const loginUsers = new loginPage();
      loginUsers.loginSiteUser('Admin','admin123');
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