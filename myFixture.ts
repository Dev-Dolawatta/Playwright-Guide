import {test as myTest} from "playwright/test";
//overriding the test function to add a custom fixture

type Dev = {
    age : number,
    email : string
}


//we can define our custom fixture by extending the test function and adding our own properties
const myFixture = myTest.extend<Dev>({
    age : 25,
    email : "john.doe@example.com"
})
//now we can use the myFixture in our test files to access the age and email properties

export const test = myFixture;
//then need to export the test function to use it in other test files