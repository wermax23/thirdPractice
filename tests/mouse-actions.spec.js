import { test } from "@playwright/test";

test.describe("Test Group", () => {

  // create before each
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  // create after each
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });


  test("Left click", async ({ page }) => {
    await page.click("text='A/B Testing'");

   //let abTesting = page.locator("text='A/B Testing'");
  // await abTesting.click({ button: "right" });
  });

  test("Right Click", async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.click("text='A/B Testing'", {button: "right" });
  });

  test("Double Click", async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.dblclick("text='Checkboxes'")
    
  });

  test("Hover", async ({ page }) => {

    await page.click("text='Hovers'");
   // await page.waitForTimeout(3000);
    //await page.hover("//img[@alt='User Avatar']");

    let elements = await page.locator("//img[@alt='User Avatar']").all();

    for(let each of elements){
        await page.waitForTimeout(3000);
        await each.hover();
    }
    
  });

  test("Drag and Drop", async ({ page }) => {
    await page.click("text='Drag and Drop'");
    await page.waitForTimeout(3000);
    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']")
  });

  test("Scroll", async ({ page }) => {
    await page.waitForTimeout(3000);

   // await page.mouse.wheel(0, 1000);

   let inputsLink = page.locator("text='Inputs'");

   await inputsLink.scrollIntoViewIfNeeded(); 

   await page.waitForTimeout(3000);

    await inputsLink.click();
    
  });

});

// come back at 1:15 pm
