import{expect, test} from '@playwright/test';

// test("Basic interactions demo",async({page}) =>{
//     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
//     const messageInput =  page.locator('(//*[@id="user-message"])[1]')
//     await messageInput.scrollIntoViewIfNeeded()//scroll to the element if its not in the viewport
//     console.log(await messageInput.getAttribute("placeholder"))//to get the value of the placeholder attribute and print it in the console
//     expect(messageInput).toHaveAttribute("placeholder","Please enter your Message")//assert that the placeholder attribute has the expected value

//     await messageInput.type("hi")//type the message in the input field
//     console.log(await messageInput.inputValue())//to get the value of the input field and print it in the console
// })


//testing sum 
test("sum",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/")
    const sumInput1 = page.locator('#sum1')//locate the first input field for sum
    const sumInput2 = page.locator('#sum2')
    const getTotalButton = page.locator('//*[@id="gettotal"]/button')//locate the get total button

    let num1 = 5
    let num2 = 10
    await sumInput1.type("" + num1)//type the first number in the input field
    await sumInput2.type("" + num2)//type the second number in the input field

    await getTotalButton.click()//click the get total button

    const result = page.locator('#addmessage')//locate the result element

    let expectedSum = num1 + num2

    console.log(await result.textContent())//to get the text content of the result element and print it in the console

    expect(result).toHaveText("" + expectedSum)//assert that the result element has the expected text content

})
