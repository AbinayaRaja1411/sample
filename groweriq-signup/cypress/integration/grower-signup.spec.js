context('Grower Signup Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
        cy.contains('Create User').click()
    })

    it('Modal Popup open onclick of create user', () => {
        cy.get('.mat-dialog-container').find('h1').should('have.text', 'User SignUp Form')
    })

    it('Verify action buttons in create user modal popup', () => {
        cy.get('.mat-dialog-container')
            .find('h1').should('have.text', 'User SignUp Form')
            .get('.mat-dialog-actions').contains('Create')
            .get('.mat-dialog-actions').contains('Cancel')
    })

    it('Modal Popup close on cancel button click', () => {
        cy.get('.mat-dialog-container').should('exist');
        cy.get('.mat-dialog-container').get('.mat-dialog-actions').contains('Cancel').click()
        cy.get('.mat-dialog-container').should('not.exist');
    })

    it('Submit form without filling any information and verifying error messages', () => {
        cy.get('.mat-dialog-container').get('.mat-dialog-actions').contains('Create')
        cy.get('#userSignUpForm').submit()

        cy.get('#name')
            .get('mat-error').should('be.visible').should('have.attr', 'role', 'alert').contains('Name is required')
            .get('label').should('have.class', 'mat-form-field-empty')
        cy.get('#phone')
            .get('mat-error').should('be.visible').should('have.attr', 'role', 'alert').contains('Please enter valid phone number')
            .get('label').should('have.class', 'mat-form-field-empty')
        cy.get('#userType')
            .get('mat-error').should('be.visible').should('have.attr', 'role', 'alert').contains('User Type is required')
            .get('label').should('have.class', 'mat-form-field-empty')
    })

    it('Submit form by selecting only user type to "Grower" and verifying error messages', () => {
        cy.get('#userType').get('#ddUserType').click()
        cy.get('.mat-select-panel').contains('Grower').click({ force: true })
        cy.get('#userSignUpForm').submit()

        cy.get('#name')
            .get('mat-error').should('be.visible').should('have.attr', 'role', 'alert').contains('Name is required')
            .get('label').should('have.class', 'mat-form-field-empty').contains('Name *')
        cy.get('#phone')
            .get('mat-error').should('be.visible').should('have.attr', 'role', 'alert').contains('Please enter valid phone number')
            .get('label').should('have.class', 'mat-form-field-empty').contains('Phone Number (with country code) *')
        cy.get('#batchesHandled')
            .get('mat-error').should('be.visible').should('have.attr', 'role', 'alert').contains('Batches Handled is required')
            .get('label').should('have.class', 'mat-form-field-empty').contains('Batches Handled *')
        cy.get('#greenhouseLocations')
            .get('mat-error').should('be.visible').should('have.attr', 'role', 'alert').contains('Please select atleast one greenhouse location')
            .get('label').should('have.class', 'mat-form-field-empty').contains('Greenhouse Locations *')
    })

    it('Verify form controls text, placeholders in create user modal popup', () => {
        cy.get('#name')
            .contains('Name *')
            .get('#txtName').should('have.attr', 'placeholder', 'Enter your fullname')
        cy.get('#phone')
            .contains('Phone Number (with country code) *')
            .get('#txtPhone').should('have.attr', 'placeholder', 'eg. +1 1234567890')
        cy.get('#gender')
            .contains('Gender')
            .get('#rdoGender').find('mat-radio-button:first').contains('Female')
            .get('#rdoGender').find('mat-radio-button:last').contains('Male')
        cy.get('#stAddress')
            .contains('Street Address')
            .get('#txtStAddress').should('have.attr', 'placeholder', 'Street Number & Street Name')
        cy.get('#city')
            .contains('City')
            .get('#txtCity').should('have.attr', 'placeholder', 'City')
        cy.get('#province')
            .contains('Province')
            .get('#txtProvince').should('have.attr', 'placeholder', 'Province')
        cy.get('#country')
            .contains('Country')
            .get('#txtCountry').should('have.attr', 'placeholder', 'Country')
        cy.get('#postalCode')
            .contains('Postal Code')
            .get('#txtPostalCode').should('have.attr', 'placeholder', 'Postal Code')
        cy.get('#userType')
            .contains('User Type *')
            .get('#ddUserType').click()
        cy.get('.mat-select-panel').contains('-- None --')
        cy.get('.mat-select-panel').contains('Grower')
        cy.get('.mat-select-panel').contains('Warehouse Employee')

    })

    it('Verify display "Grower" specific controls', () => {
        cy.get('.mat-dialog-container')
            .should('not.contain', 'Batches Handled *')
            .should('not.contain', 'Yield Acquired (in kg)')
            .should('not.contain', 'Greenhouse Locations *')
            .should('not.contain', 'Years of Experience')
            .should('not.contain', 'Educational Qualification *')
            .should('not.contain', 'Are you Inventory Management Certified?')
        cy.get('.mat-dialog-container').find('#txtBatchesHandled').should('not.exist');
        cy.get('.mat-dialog-container').find('#txtYieldAcquired').should('not.exist');
        cy.get('.mat-dialog-container').find('#ddGreenhouseLocations').should('not.exist');
        cy.get('.mat-dialog-container').find('#txtYearsOfExp').should('not.exist');
        cy.get('.mat-dialog-container').find('#txtEduQual').should('not.exist');
        cy.get('.mat-dialog-container').find('#rdoInvMgmtCert').should('not.exist');
        cy.get('#userType').get('#ddUserType').click()
        cy.get('.mat-select-panel').contains('Grower').click({ force: true })
        cy.get('.mat-dialog-container')
            .should('contain', 'Batches Handled *')
            .should('contain', 'Yield Acquired (in kg)')
            .should('contain', 'Greenhouse Locations *')
            .should('not.contain', 'Years of Experience')
            .should('not.contain', 'Educational Qualification *')
            .should('not.contain', 'Are you Inventory Management Certified?')
        cy.get('.mat-dialog-container').find('#txtBatchesHandled').should('exist');
        cy.get('.mat-dialog-container').find('#txtYieldAcquired').should('exist');
        cy.get('.mat-dialog-container').find('#ddGreenhouseLocations').should('exist');
        cy.get('.mat-dialog-container').find('#txtYearsOfExp').should('not.exist');
        cy.get('.mat-dialog-container').find('#txtEduQual').should('not.exist');
        cy.get('.mat-dialog-container').find('#rdoInvMgmtCert').should('not.exist');

    })

    it('Submit form without filling details does not close modal popup', () => {
        cy.get('.mat-dialog-container').should('exist');
        cy.get('.mat-dialog-container').get('.mat-dialog-actions').contains('Create').click()
        cy.get('.mat-dialog-container').should('exist');
    })

    it('Submit valid "Grower" form with all field values and verify user detail & list page', () => {
        cy.get('#txtName').type('Grower User')
        cy.get('#txtPhone').type('+1 1234567890')
        cy.get('#rdoGender').find('mat-radio-button:first').contains('Female').click({ force: true })
        cy.get('#txtStAddress').type('123 Abc Drive')
        cy.get('#txtCity').type('Toronto')
        cy.get('#txtProvince').type('Ontario')
        cy.get('#txtCountry').type('Canada')
        cy.get('#txtPostalCode').type('M1A 1Q1')
        cy.get('#userType').get('#ddUserType').click()
        cy.get('.mat-select-panel').contains('Grower').click({ force: true })
        cy.get('#txtBatchesHandled').type('30')
        cy.get('#txtYieldAcquired').type('500')
        cy.get('#ddGreenhouseLocations').click();
        cy.get('.mat-select-panel').contains('Toronto').click()
        cy.get('.mat-select-panel').contains('Mississauga').click()

        cy.server()
        cy.route('POST', 'users').as('createUserAPI')
        cy.get('#userSignUpForm').submit()
        cy.get('.mat-dialog-container').should('not.exist');
        cy.wait('@createUserAPI').its('status').should('eq', 201)
        cy.location('pathname').should('eq', '/userdetail')

        cy.get('.mat-dialog-title').contains('Created User Details')
        cy.get('.mat-dialog-content').get('.row')
            .first().should('contain', 'Name:').should('contain', 'Grower User')
            .next().should('contain', 'Phone Number:').should('contain', '+1 1234567890')
            .next().should('contain', 'Gender:').should('contain', 'Female')
            .next().should('contain', 'User Type:').should('contain', 'Grower')
            .next().should('contain', 'Address:').should('contain', '123 Abc Drive, Toronto, Ontario, Canada, M1A 1Q1')
            .next().should('contain', 'Number of batches handled:').should('contain', '30')
            .next().should('contain', 'Yield Acquired (in kgs):').should('contain', '500')
            .next().should('contain', 'Greenhouse Locations:').should('contain', 'Toronto,Mississauga‎')
        cy.server()
        cy.route('GET', 'users').as('getUsersAPI')
        cy.get('.mat-raised-button').contains('Back to Registered Users List').click({ force: true })
        cy.wait('@getUsersAPI').its('status').should('eq', 200)
        cy.location('pathname').should('eq', '/')
        cy.get('mat-table').get('mat-row').first()
            .should('contain', 'Grower User')
            .should('contain', '+1 1234567890')
            .should('contain', 'Grower')
    })

    it('Submit valid "Grower" form values with only mandatory fields and verify user detail & list page', () => {
        cy.get('#txtName').type('Grower User')
        cy.get('#txtPhone').type('+1 1234567890')
        cy.get('#userType').get('#ddUserType').click()
        cy.get('.mat-select-panel').contains('Grower').click({ force: true })
        cy.get('#txtBatchesHandled').type('30')
        cy.get('#ddGreenhouseLocations').click();
        cy.get('.mat-select-panel').contains('Toronto').click()
        cy.get('.mat-select-panel').contains('Mississauga').click()

        cy.server()
        cy.route('POST', 'users').as('createUserAPI')
        cy.get('#userSignUpForm').submit()
        cy.get('.mat-dialog-container').should('not.exist');
        cy.wait('@createUserAPI').its('status').should('eq', 201)
        cy.location('pathname').should('eq', '/userdetail')

        cy.get('.mat-dialog-title').contains('Created User Details')
        cy.get('.mat-dialog-content').get('.row')
            .first().should('contain', 'Name:').should('contain', 'Grower User')
            .next().should('contain', 'Phone Number:').should('contain', '+1 1234567890')
            .next().should('contain', 'Gender:').should('contain', 'N/A')
            .next().should('contain', 'User Type:').should('contain', 'Grower')
            .next().should('contain', 'Address:').should('contain', '')
            .next().should('contain', 'Number of batches handled:').should('contain', '30')
            .next().should('contain', 'Yield Acquired (in kgs):').should('contain', '')
            .next().should('contain', 'Greenhouse Locations:').should('contain', 'Toronto,Mississauga‎')
        cy.server()
        cy.route('GET', 'users').as('getUsersAPI')
        cy.get('.mat-raised-button').contains('Back to Registered Users List').click({ force: true })
        cy.wait('@getUsersAPI').its('status').should('eq', 200)
        cy.location('pathname').should('eq', '/')
        cy.get('mat-table').get('mat-row').first()
            .should('contain', 'Grower User')
            .should('contain', '+1 1234567890')
            .should('contain', 'Grower')
    })
})