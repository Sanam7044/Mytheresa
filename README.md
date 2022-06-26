# Mytheresa
This project tests the following test case:

As a tester owner, I want to verify I can log in to
https://www.mytheresa.com/ende/men.html. 

What I have automated:
Given the user have registered email and password
when the user fillup the user name field with registered email
And the user fillup password field with correct password
And the user click on login button
Then the user should land on the customer account page
And the user should get a welcome message

Steps to run the project:
1. Clone repository: https://github.com/Sanam7044/Mytheresa.git
2. Checkout branch 'mytheresa-test'
3. Go to 'Mytheresa' directory
4. Run 'npx cypress open'
5. From Cypress window, select E2E testing
6. Select desired Browser
7. Select 'Start E2E testing from ''Browser name''
8. Select 'login.step.cy.js'
