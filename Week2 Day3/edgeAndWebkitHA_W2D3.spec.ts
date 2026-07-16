/* Home Assignment to launch two separate browsers */

import { chromium, webkit, test } from "@playwright/test";

test ('Case1: RedBus in Edge', async () => {
    
    const browser = await chromium.launch({channel:'msedge', headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.redbus.in/")

    console.log(await page.title());
    console.log(await page.url());

    await browser.close()
    
} )

test ('Case2: Flipkart in Webkit',async () => {
    
    const browser = await webkit.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.flipkart.com/")

    console.log(await page.title());
    console.log(await page.url());

    await browser.close()

})