import{test as baseTest} from "playwright/test";//overriding the test function to add a custom fixture


type pages = {
    registerPage : RegisterPage;//we can add any properties we want to the page object
    loginPage : LoginPage;
    homePage : HomePage;
    specialPage : SpecialPage;

}

//we can define our custom fixture by extending the test function and adding our own properties
const testPages = baseTest.extend<pages>({
    registerPage:async({page},use) =>{
        await use(new RegisterPage(page));
    },
    loginPage:async({page},use) =>{
        await use(new LoginPage(page));
    },
    homePage:async({page},use) =>{
        await use(new HomePage(page));
    },
    specialPage:async({page},use) =>{
        await use(new SpecialPage(page));
    }

})
export const test = testPages;//then need to export the test function to use it in other test files
export const expect = test.expect;//we can also export the expect function to use it in our test files