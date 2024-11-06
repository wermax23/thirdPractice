import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
    
    
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
   
  });


  test("check() checks the radio button and checkboxes if they havent checked", async ({
    page,
  }) => {
    // navigate to https://practice.cydeo.com/
    let checkBoxesLink = page.locator("a[href='/checkboxes']");

    await checkBoxesLink.click();

    let checkbox1 = page.locator("input#box1");

    await checkbox1.check();

    let checkbox2 = page.locator("input#box2");

    await checkbox2.check();

    await expect(checkbox1).toBeChecked(); // passing locator object (Webelemnt) to the assertions
    // expect(await checkbox1.isChecked()).toBeTruthy();
    // expect(await checkbox1.isChecked()).not.toBeFalsy();

    await expect(checkbox2).toBeChecked();
  });

  test("Unchecked", async ({ page }) => {

    let checkBoxesLink = page.locator("a[href='/checkboxes']");

    await checkBoxesLink.click();

    let checkbox1 = page.locator("input#box1");
    let checkbox2 = page.locator("input#box2");

    await checkbox1.uncheck();

    await checkbox2.uncheck();

    await expect(checkbox1).not.toBeChecked();
    //expect(await checkbox1.isChecked()).toBeFalsy();
  });

  test("selectOption() used for dropdowns", async ({ page }) => {
    
    let dropDownLink = page.locator("text='Dropdown'");
    await dropDownLink.click();

    let simpleDropDownBox = page.locator("//select[@id='dropdown']");

    // select by the value:
    //await simpleDropDownBox.selectOption("1");

    // select by the text:
    // await simpleDropDownBox.selectOption({label: "Option 1"});

    // select by index:
    await simpleDropDownBox.selectOption({index: 1});

   // let  selectedValue = await simpleDropDownBox.inputValue();
   // expect(selectedValue).toEqual("Option 1");

    // console.log(selectedValue);
    
  });

  test("innerText() retrives the visible text of the element", async ({ page }) => {

    let headerElement = page.locator("//span[@class='h1y']");

    let actualText = await headerElement.innerText();
    let expectedTest = "Test Automation Practice";

    expect(actualText).toEqual(expectedTest);
    
  });

  test("inputValue() only works with <input>, <textarea>, <select>", async ({ page }) => {

    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await inputBox.fill("12345678");

    let inputValue = await inputBox.inputValue();

    expect(inputValue).toEqual("12345678");
    
  });

  test("getAttribute() retrives the attribute value", async ({ page }) => {

   let inputsLink = page.getByText("Inputs");
   let href = await inputsLink.getAttribute("href");

   expect(href).toEqual("/inputs");
    
  });


  test("state methods of locator object", async ({ page }) => {

    let availableExamples = page.locator("//span[@class='h2']");

    expect( await availableExamples.isVisible()).toBeTruthy();
    await expect(availableExamples).toBeVisible();

    console.log("----------------------------------------------------------------");

    let abTestingLink = page.getByText("A/B Testing");

    expect(await abTestingLink.isEnabled()).toBeTruthy();
    await expect(abTestingLink).toBeEnabled();
     
   });



});


// come back at 12:55 pm