#### React Lab 

In this lab, you will create a registration form that will allow users to register for a new account. The form will have the following fields:

- Full Name
- Email
- Password
- Confirm Password

The form will also have a submit button that will be disabled until all fields are filled out. If the user tries to submit the form with an invalid email address, the form will not submit and an error message will be displayed. If the user tries to submit the form with a password that does not match the confirm password field, the form will not submit and an error message will be displayed. If the user tries to submit the form with a password that is less than 8 characters, the form will not submit and an error message will be displayed.

- Use useState to manage the state of the form fields.

- Email validation should be done using a regular expression:
- You can use this regex, `/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/`

- Password validation should be done using a regular expression:
- You can use this regex, `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/`

- The form should be styled using CSS, you can take reference from login form in class activity.