import loginPage from "../pages/loginPage";

describe('Login Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://opensource-demo.orangehrmlive.com/');
   })
   
    it('Verify Login successful', () => {
      const loginObj = new loginPage();
      loginObj.enterUsername('Admin')
      loginObj.enterPassword('admin123')
      loginObj.clickLogin();
      
    })
   
    it('Verify Login unsuccessful for invalid username/password', () => {
      const loginObj = new loginPage();
      loginObj.enterUsername('Admiin')
      loginObj.enterPassword('admin1234')
      loginObj.clickLogin();
      
    })
   })