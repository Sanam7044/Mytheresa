class LoginPage {
    email() {
        return cy.get('#qa-login-email > #email');
    }
    password() {
        return cy.get('#qa-login-password > #pass');
    }
    loginBtn() {
        return cy.get('#qa-login-button > #send2 > :nth-child(1) > span');
    }
    }
export default LoginPage