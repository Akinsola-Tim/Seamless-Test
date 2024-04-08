import createEmployeePage from "../pages/createEmployee";

describe('Create Employee Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.wait(2000)
   })
   
    it('Create Employee Successful', () => {
      const createEmployeeObj = new createEmployeePage();
      createEmployeeObj.clickPIM();
      cy.get('.orangehrm-header-container > .oxd-button').should('be.visible')
      createEmployeeObj.addEmployee();
      createEmployeeObj.enterFirstName('Bread');
      createEmployeeObj.enterMiddleName('Butter');
      createEmployeeObj.enterLastName('Yam');
      cy.get('.oxd-switch-input').should('be.visible')
      createEmployeeObj.clickToggle();
      createEmployeeObj.enterUserName('Hippy');
      createEmployeeObj.enterPassword('Brekingnews@123');
      createEmployeeObj.enterConfirmPswd('Brekingnews@123');
      cy.get('.oxd-button--secondary').should('be.visible')
      createEmployeeObj.saveBtnClick();
      
       // yields <nav>
      //verify that the page contains Add button
      //verify that page contains Toggle switch
      //msg: Successfully Saved
      //assert that Save button is visible
    })

    it('FirstName and LastName are Required', () => {
      const createEmployeeObj = new createEmployeePage();
      createEmployeeObj.clickPIM();
      createEmployeeObj.addEmployee();
      createEmployeeObj.enterFirstName('');
      cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('have.text', 'Required');
      createEmployeeObj.enterMiddleName('Butter');
      createEmployeeObj.enterLastName('');
      cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('have.text', 'Required')
      createEmployeeObj.clickToggle();
      createEmployeeObj.enterUserName('Hippy');
      createEmployeeObj.enterPassword('Brekingnews@123');
      createEmployeeObj.enterConfirmPswd('Brekingnews@123');
      createEmployeeObj.saveBtnClick();
      //assert that FirstName and LastName are Required 
    })

    it('UserName, Password and Confirm Password are Required', () => {
      const createEmployeeObj = new createEmployeePage();
      createEmployeeObj.clickPIM();
      createEmployeeObj.addEmployee();
      createEmployeeObj.enterFirstName('Bread');
      createEmployeeObj.enterMiddleName('Butter');
      createEmployeeObj.enterLastName('Yam');
      createEmployeeObj.clickToggle();
      createEmployeeObj.enterUserName('');
      createEmployeeObj.enterPassword('');
      createEmployeeObj.enterConfirmPswd('');
      createEmployeeObj.saveBtnClick();
      //assert that UserName, Password and Confirm Password are Required 
    })

    
  it('Password and Confirm Password must match', () => {
    const createEmployeeObj = new createEmployeePage();
    createEmployeeObj.clickPIM();
    createEmployeeObj.addEmployee();
    createEmployeeObj.enterFirstName('Bread');
    createEmployeeObj.enterMiddleName('Butter');
    createEmployeeObj.enterLastName('Yam');
    createEmployeeObj.clickToggle();
    createEmployeeObj.enterUserName('Hippy');
    createEmployeeObj.enterPassword('Brekingnews@123');
    createEmployeeObj.enterConfirmPswd('Brekingnews@123');
    createEmployeeObj.saveBtnClick();
    //assert that Password and Confirm Password 
    //msg: Passwords do not match 
  })
    
   })



 


