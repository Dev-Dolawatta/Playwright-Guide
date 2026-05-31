import{expect, test} from '@playwright/test';

test("Basic interactions demo",async({page}) =>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
    const messageInput =  page.locator('(//*[@id="user-message"])[1]')
    await messageInput.scrollIntoViewIfNeeded()//scroll to the element if its not in the viewport
    console.log(await messageInput.getAttribute("placeholder"))//to get the value of the placeholder attribute and print it in the console
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")//assert that the placeholder attribute has the expected value

    await messageInput.type("hi")//type the message in the input field
    console.log(await messageInput.inputValue())//to get the value of the input field and print it in the console
})
