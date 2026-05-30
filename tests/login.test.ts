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

})