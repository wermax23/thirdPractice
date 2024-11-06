import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {
  // create a beforeEach
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  // create an afterEach
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Handling JS Alerts", async ({ page }) => {

    /*
    page.on("dialog", async (dialog) => {
      console.log(`Alert Message: ${dialog.message()}`);
      await page.waitForTimeout(3000);
      await dialog.accept();
    });
    */

    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSAlertButton.click();

    await expect(page.getByText("You successfully clicked an alert")).toBeVisible();

  });

  test("Handling JS confirm alerts", async ({ page }) => {

    page.on("dialog", async (alert) => {
       // console.log(`Alert Message: ${alert.message()}`);
       // await page.waitForTimeout(3000);
        await alert.accept();
      //  await alert.dismiss();
      });

    let clickForJSConfirmButton= page.locator("//button[@onclick='jsConfirm()']");
    await clickForJSConfirmButton.click();

    await expect(page.getByText("You clicked: Ok")).toBeVisible();

  });


  test("Handling JS prompt alerts", async ({ page }) => {
    page.on("dialog", async (alert) => {
       // await page.waitForTimeout(3000);
        await alert.accept("Cydeo School");
    });

    let clickForJSPromptButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSPromptButton.click();

    await expect(page.locator("//p[@id='result']")).toBeVisible();
    await expect(page.locator("//p[@id='result']")).toContainText("Cydeo School");

  });

});
