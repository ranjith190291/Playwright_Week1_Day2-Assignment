//CSS Locators > Class room Activity

import {test} from "@playwright/test"

test("CSS Locators - Classroom Activity", async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com") //Username
    await page.locator("label+input").nth(0).fill("TestLeaf@2025") //Password
    await page.locator('input[type="checkbox"]').click() //Remember Me
    await page.locator('input[type="submit"]').click() //LogIn
  
})