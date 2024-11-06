import { test } from '@playwright/test';

test('SEP practice @sep', async ({ page }) => {

    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({
        Authorization: `Basic ${code}`
    });

    await page.goto(process.env.SEP_QA_URL);

    const first_name_input = page.locator("//input[@formcontrolname='firstName']");

    const last_name_input = page.locator("//input[@formcontrolname='lastName']");

    const email_input = page.locator("//input[@formcontrolname='email']");

    const phone_number_input = page.locator("//input[@formcontrolname='phoneNumber']");

    await first_name_input.fill("John");
    await last_name_input.fill("Doe");
    await email_input.fill("john.doe@example.com");
    await phone_number_input.fill("1234567890");

    const how_did_you_hear_dropdown = page.locator("//mat-label[text()='How did you hear about us?']");
    await how_did_you_hear_dropdown.click();

    const email_option = page.locator("//span[text()='Email']");
    await email_option.click();

    const next_button01 = page.locator("//button[@type='submit' and text()=' Next']");
    await next_button01.click();

    const upfront_payment_plan = page.locator("//mat-expansion-panel-header[.//span[contains(text(),'Upfront')]]");
    await upfront_payment_plan.click();

    const next_button02 = page.locator("//button[@class='next-button' and text()='Next']");
    await next_button02.click();

    const payment_iframe = page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']");

    const card_number_input = payment_iframe.locator("//input[@id='Field-numberInput']");
    await card_number_input.fill(process.env.CARD_NUMBER);

    const expiration_date_input = payment_iframe.locator("//input[@id='Field-expiryInput']");
    await expiration_date_input.fill(process.env.EXPIRATION_DATE);

    const cvc_input = payment_iframe.locator("//input[@id='Field-cvcInput']");
    await cvc_input.fill(process.env.CVC);

    const zip_code_input = payment_iframe.locator("//input[@id='Field-postalCodeInput']");
    await zip_code_input.fill(process.env.ZIP_CODE);


    const terms_conditions_checkbox = page.locator("//input[@type='checkbox']");
    await terms_conditions_checkbox.check();

    const pay_button = page.locator("//button[.//span[text()='Pay']]");
    await pay_button.click();

    // pause for 3 seconds
     await page.waitForTimeout(3000);

  
});


// come back at 11:40 am