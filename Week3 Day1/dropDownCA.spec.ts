//Dropdown locator > Classroom Activity

import {test} from "@playwright/test"

test("Dropdown CA", async ({page}) => {

    await page.goto("https://www.leafground.com/select.xhtml")

    await page.locator('[class="ui-selectonemenu"]').selectOption({label:"Playwright"})
    await page.waitForTimeout(2000);

    /* 
    await page.locator('[class="ui-selectonemenu"]').selectOption({index:3})
    await page.waitForTimeout(2000)
    await page.locator('[class="ui-selectonemenu"]').selectOption({Value:""}) */

    const dropDown = page.locator('[class="ui-selectonemenu"]>option')
    const dropDownValue = await dropDown.count()
    console.log("The Dropdown value is ",dropDownValue);

    for(let index=0;index<dropDownValue;index++){
        console.log(await dropDown.nth(index).innerText());
        
    }
    
    
})