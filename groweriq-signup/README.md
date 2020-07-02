# GroweriqSignup
---
---
## Use of Reactive Forms:
---
The user signup form is an angular reactive form, address form control which by itself an angular reactive form.
## Use of form validators:
---
* **Required Validator**
Required validators for the fields: name, phone number, user type, batches handled, greenhouse locations, and educational qualification
* **Pattern validator**
Phone number field must have the value that matches the pattern `+<country code><10 digit phone number>` or `+<country code><space><10 digit phone number>`.

## Use of routing:
---
Once the valid user information is submitted, the data is posted to the mock api, and the user is navigated to the detail page. In case of any server error when the data is posted to the mock api, the user will be navigated to a page displaying the error information.

Both the user detail page and error page provide the user with the option of navigating back to the users list page through a button (Back to Registered Users List). 

## CSS customizations:
---
I have written custom CSS to achieve vertical layout in the create user form. I have also used bootstrap classes to position and align the HTML elements. 

## Use of Angular Material:
---
* **Material Paginator**
Implemented pagination in users list page using angular material paginator.
* **Material modal dialog control**
Modal popup is used to display the user signup form on click of “Create User” button from the users list page.
* **Angular material form controls & error display controls**
The user signup form contains angular material labels, input controls (text input, numeric input, single-select dropdown, multi-select dropdown, and radio button), buttons.
* **Material card layout**
The users list page, modal popup containing the user signup form, and user detail page uses material card layout to organise the elements.

## Use of custom form control:
---
Address form field is created as a reusable form control which contains the input controls for street address, city, province, country, and postal. This custom Address form control is consumed in the create user form.
## Cypress scripts:
---
I have written test cases with ~90% coverage of use cases.
## Highlights:
---
* Use of directives to dynamically decide the component to be added in user signup form based on the selected ‘User Type’ value.
* Created a custom pipe to display the “display text” for a given value of any enum type.
* Use of Factory Pattern to get the component based on ‘User Type’ value.
