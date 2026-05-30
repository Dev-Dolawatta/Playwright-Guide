import{chromium,test} from "@playwright/test"




test("Login test demo",async() =>{
    //launching the browser
    const browser = await chromium.launch({
        headless : false
    });

    //creating a new context
    const context = await browser.newContext();
    //creating a new page
    const page = await context.newPage();

    //navigating to the login page
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    //using hover on the my acc icon to open the dropdown menu
    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')//remove the " and use '
    //clicking on the login link
    await page.click('//*[@id="widget-navbar-217834"]/ul/li[6]/ul/li[1]/a')

    //filling the email 
    await page.fill('//*[@id="input-email"]', 'dt@gmail.com')
    //filling the password
    await page.fill('//*[@id="input-password"]', '12345678')
    //clicking on the login button
    await page.click('//*[@id="content"]/div/div[2]/div/div/form/input')

    //adding a timeout cuz the result is really fast 
    await page.waitForTimeout(5000);

    //------------------------------------------------------
    //opening a new page to check if the login was successful by checking the presence of the my account icon
    const newPage = await context.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/")

    //checking that the login opens from another browser =simultaneous action 
    const newContext = await browser.newContext();
    const newPage2 = await newContext.newPage();
    await newPage2.goto("https://ecommerce-playground.lambdatest.io/")

})