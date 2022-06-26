import config from '../config'
import ManPage from '../page-objects/man.page.cy'
import LoginPage from '../page-objects/login.page.cy'
import AccountPage from '../page-objects/account.page.cy'

const manPage = new ManPage()
const loginPage = new LoginPage()
const accountPage = new AccountPage()
describe('Test login feature', () => {
   
    it('Login and check the welcome text', () =>{
        cy.visit((`${config.url}`), {
            headers: {
                "Accept": "application/json, text/plain, */*",
                "User-Agent": "axios/0.18.0"
            }

        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test by corss policy error
        return false
        })

        manPage.myAccount().click()
        loginPage.email().type(`${config.user}`)
        loginPage.password().type(`${config.pass}`)
        loginPage.loginBtn().click()
        accountPage.welcomeText().contains('Hello, Abdullah Al Sanam!')
    })
})