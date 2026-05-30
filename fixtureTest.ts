import{test} from "./myFixture";
//now we can use the myFixture in our test files to access the age and email properties


test("test demo",async({age,email}) => {
    //we can access the age and email properties in our test,just like the page object
    console.log(age,email.toLowerCase);
    //we can also use the age and email properties in our test logic
    
})

