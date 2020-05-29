# CODE CHALLENGE

The challenge is to create a simple application in Angular that consists of:
 
### 1. Angular section

The first page is a user list that displays the name, phone number and type of user (grower or
warehouse employee) of all users. It should also contain a button 'create user' that opens a modal with the
'sign up form'. 
The second page should be the detail page that displays the information entered in the 'sign up form'.
The 'sign up form' has a dropdown to check if the user is a Grower or a Warehouse Employee. 
Based on the user's selection,

If the user is Grower, then the next set of fields should be shown

	* name
	* address
	* phone number
	* gender
	* batches handled
	* yield acquired (in kg)
	* greenhouse locations (dropdown with multiple select)

If the user is a Warehouse Employee, then the next set of fields should be shown

	* name
	* address
	* phone number
	* gender
	* years of experience
	* educational qualification
	* inventory management certification (yes/no)

On submitting the 'sign up form', the modal should be closed and the user should be directed to the detail page.
The user list page should also be updated with the latest user. 


### 2. Cypress section (Optional)

Using  https://www.cypress.io/ , write an automation test script to test the sign up form for both Growers 
and Warehouse Employees. The test should ensure that the entire flow works - from signing up to verifying the 
information in the list and detail pages.


## Evaluation Criteria 

1. Use of Reactive Forms + 
2. Appropriate use of form validators +
3. Use of routing +
3. CSS customizations +
4. Use of Angular Material ++
4. Reactive programming using Observables, use of RXJS library +++
5. Create a component and use it as a custom form field. For example, the 'address' field can be 
   an angular component which can then be exported as a form field +++++
5. Robustness of your Cypress scripts +++++ (optional)

This repository consists of an angular project with Cypress installed. 
 
 user-list-component - User List Page
 user-detail-component - User Detail Page
 
 
## You should

* Clone this repo
*	Create a branch in your clone
* Make sure all code is clean and follows best practices
* You have 24h to complete this challenge
* When finished, make a pull request against the master branch in your clone and send us a link to your repo.

Good Luck
 



