import createUserPage from "../pages/createUserPage";

describe('Create User Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      //loginUserAction('Admin','admin123');
   })
   
    it('Create User Successful', () => {
      const createUserObj = new createUserPage();
      createUserObj.clickAdmin();
      createUserObj.clickAdd();
      createUserObj.clickDropdown();
      createUserObj.clickAdminOption();
      createUserObj.autocompleteInput('Roshan');
      createUserObj.selectAutoCompleteOption();
      createUserObj.statusDropdown();
      createUserObj.selectOption();
      createUserObj.adminNameInput('Admin111');
      createUserObj.passwdStrongInput('admin@123');
      createUserObj.confirmPasswdStrongInput('admin@123');
      createUserObj.clickSave();
      //msg: Successfully Saved
    })

    it('Verify that username is not less than five words', () => {
      const createUserObj = new createUserPage();
      createUserObj.clickAdmin();
      createUserObj.clickAdd();
      createUserObj.clickDropdown();
      createUserObj.clickAdminOption();
      createUserObj.autocompleteInput('Roshan');
      createUserObj.selectAutoCompleteOption();
      createUserObj.statusDropdown();
      createUserObj.selectOption();
      createUserObj.adminNameInput('Adm');
      createUserObj.passwdStrongInput('admin@123');
      createUserObj.confirmPasswdStrongInput('admin@123');
      createUserObj.clickSave();
      createUserObj.getErrorMessage().should('have.text', 'Should be at least 5 characters')
    })

    it('Verify that password have at least seven characters', () => {
      const createUserObj = new createUserPage();
      createUserObj.clickAdmin();
      createUserObj.clickAdd();
      createUserObj.clickDropdown();
      createUserObj.clickAdminOption();
      createUserObj.autocompleteInput('Roshan');
      createUserObj.selectAutoCompleteOption();
      createUserObj.statusDropdown();
      createUserObj.selectOption();
      createUserObj.adminNameInput('Tola01');
      createUserObj.passwdStrongInput('admin@123');
      createUserObj.confirmPasswdStrongInput('admin@123');
      createUserObj.clickSave();
      //createUserObj.getErrorMessage().should('have.text', 'Should have at least 7 characters')
      //createUserObj.getErrorMessage().should('Should have at least 7 characters')
      cy.get('.oxd-input-field-error-message').as('errorText').wait(2000);
      cy.get('@errorText').should('have.text', 'Should have at least 7 characters')

      //msg: Should have at least 7 characters
    })

    it('Verify that password have at least one number', () => {
      const createUserObj = new createUserPage();
      createUserObj.clickAdmin();
      createUserObj.clickAdd();
      createUserObj.clickDropdown();
      createUserObj.clickAdminOption();
      createUserObj.autocompleteInput('Roshan');
      createUserObj.selectAutoCompleteOption();
      createUserObj.statusDropdown();
      createUserObj.selectOption();
      createUserObj.adminNameInput('Giffy11222');
      createUserObj.passwdStrongInput('admint');
      createUserObj.confirmPasswdStrongInput('admint');
      createUserObj.clickSave();
      //createUserObj.getErrorMessage().should('have.text', 'Your password must contain minimum 1 number')
      cy.get('.oxd-input-field-error-message').as('errorText').wait(2000);
      cy.get('@errorText').should('have.text', 'Your password must contain minimum 1 number')
      //msg: Your password must contain minimum 1 number
    })
   
    it('Verify that passwords match', () => {
      const createUserObj = new createUserPage();
      createUserObj.clickAdmin();
      createUserObj.clickAdd();
      createUserObj.clickDropdown();
      createUserObj.clickAdminOption();
      createUserObj.autocompleteInput('Roshan');
      createUserObj.selectAutoCompleteOption();
      createUserObj.statusDropdown();
      createUserObj.selectOption();
      createUserObj.adminNameInput('BlessAdm');
      createUserObj.passwdStrongInput('admin@123');
      createUserObj.confirmPasswdStrongInput('admin@12');
      createUserObj.clickSave();
      
      cy.get('.oxd-input-field-error-message').as('errorText').wait(2000);
      cy.get('@errorText').should('have.text', 'Passwords do not match')
      //msg: Passwords do not match
    })
   
    
   })