import { test, expect } from "@playwright/test";

test.describe("Test Group @group2", () => {
  // create beforeEach function that will navigate to https://practice.cydeo.com/
  test.beforeEach(async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
  });

  // create afterEach
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Get the title of the page", async ({ page }) => {
    let actualTitle = await page.title();
    let expectedTitle = "Practice";
    expect(actualTitle).toEqual(expectedTitle);
  });

  test("get the URL of the page", async ({ page }) => {
    let actualURL = page.url();
    expect(actualURL).toContain("cydeo");
  });

  test("CLick the A/B Testing link @group2-3", async ({ page }) => {
    let abTestingLink = page.locator("a[href='/abtest']");
    //let abTestingLink = page.getByText("A/B Testing");
    // expect( await abTestingLink.isEnabled()).toBeTruthy();
    await expect(abTestingLink).toBeEnabled();
    await abTestingLink.click();
  });
});
