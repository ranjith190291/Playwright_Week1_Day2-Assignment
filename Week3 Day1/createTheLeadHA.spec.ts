//Home Assignment => Create a Lead Using CSS Locators

import {test} from "@playwright/test"

test("Create a Lead using CSS Locators",async ({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("democsr2") //Username
    await page.locator("#password").fill("crmsfa") //Password
    await page.locator('input[type="submit"]').click() //Click Login

    await page.locator("#button").click() //Click CRM/SFA
    await page.waitForTimeout(2000)

    await page.locator('a[href*="leadsMain"]').click() //Click Create Lead
    await page.waitForTimeout(3000)

    await page.locator('a[href*="createLeadForm"]').nth(0).click()  //Click Create Lead
    await page.locator("#createLeadForm_companyName").fill("Optimum") //Company Name
    await page.locator("#createLeadForm_firstName").fill("Ramesh") //First Name
    await page.locator("#createLeadForm_lastName").fill("Kumar") //Last Name
    await page.locator("#createLeadForm_personalTitle").fill("Mr") //Title
    await page.locator("#createLeadForm_generalProfTitle").fill("Automation QA") //Professional Title
    await page.locator("#createLeadForm_annualRevenue").fill("1270000") //Annual Revenue
    await page.locator("#createLeadForm_departmentName").fill("Banking") //Department Name

    const sourcedropDown = await page.locator('[name="dataSourceId"]>option')
    const sourcedropDownValue= await sourcedropDown.count()
    console.log("The Value for Source is ", sourcedropDownValue);
    
    for(let index=0; index<sourcedropDownValue; index++){

        console.log(await sourcedropDown.nth(index).innerText());
        
    }

    await page.waitForTimeout(3000)

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9090223401")

    await page.locator('[name="submitButton"]').click()
    
})