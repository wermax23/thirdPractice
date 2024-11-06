import { test } from '@playwright/test';

test('SEP Login', async ({ page }) => {

    const encodedCredentials= Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
    page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCredentials}` });

    await page.goto(process.env.SEP_QA_URL);

    await page.waitForTimeout(3000);

  
});