import { expect, test } from '@playwright/test';

test.describe('Test Group', () => {

    let elements; // array of locator objects

    // create beforeEach
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');
        elements = await page.locator("//ul[@class='list-group']/li/a").all(); // array of locator objects
    });


  test('Verify that there exactly 50 link elements within the <ul> element', async ({ page }) => {
    expect( elements.length ).toBe(50); // exactly 50 links
    //expect( elements.length ).toBeGreaterThanOrEqual(30); // at least 30 links
   // expect( elements.length ).toBeLessThan(100); // less than 100 links
  });

  test('Verify that each of the 50 link elements within the <ul> element is visible', async ({ page }) => {
    for(let element of elements) {
        await expect(element).toBeVisible(); // each link element is visible
    }
  });

  test('Verify that each of the 50 link elements within the <ul> element is clcikable', async ({ page }) => {
    for(let element of elements) {
        await expect(element).toBeEnabled(); // each link element is clickable
    }
  });

  test('Verify that each of the 50 link elements within the <ul> element has a href attribute', async ({ page }) => {
    for(let element of elements) {
       // console.log(await element.getAttribute("href"));
        await expect(element).toHaveAttribute("href"); // each link element has a href attribute
    }
  });

});