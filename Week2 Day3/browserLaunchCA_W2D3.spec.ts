/* Browser
Browser Context
Page */

import {chromium, firefox, test} from "@playwright/test"

test('Browser Launch', async () => {
    
   const browser = await chromium.launch({channel:"msedge", headless:false})
   const context = await browser.newContext()
   const page = await context.newPage()

   await page.goto("https://leaftaps.com/opentaps/control/main")
})