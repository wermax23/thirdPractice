import { expect, test } from "@playwright/test";

test.describe("Test Group", () => {

    let table;

  // create beforeEach
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");
    table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    
  });

  test("Verify that there are at least 8 rows and 11 columns and at least 80 cells", async ({
    page,
  }) => {
    
    let rows = await table.locator("//tr").all();
    console.log(`Total Number of rows: ${rows.length}`);
    expect(rows.length >= 8).toBeTruthy();
    expect(rows.length === 9).toBeTruthy();

    let columnsOnRow = await table.locator("//th").all();
    console.log(`Total Number of columns: ${columnsOnRow.length}`);
    expect(columnsOnRow.length >= 11).toBeTruthy();
    expect(columnsOnRow.length === 13).toBeTruthy();

    let cells = await table.locator("//td").all();
    console.log(`Total Number of cells: ${cells.length}`);
    expect(cells.length >= 80).toBeTruthy();
    expect(cells.length === 104).toBeTruthy();
  });

  test("Read all the data from web table", async ({ page }) => {

    /*
    let rows = await table.locator("//tr").all();
    for (let i = 1; i < rows.length; i++) {
      let columns = await rows[i].locator("//td").all();
      for (let j = 1; j < columns.length - 1; j++) {
        let cellText = await columns[j].innerText();
        console.log(cellText);
      }
      console.log("----------------------------------------");
    }
*/
    let cells = await table.locator("//td").all();
    for (let cell of cells) {
      let cellText = await cell.innerText();
      console.log(cellText);
    }
  });

  test("Check all the checkboxes of the web table", async ({ page }) => {
    

    let checkboxes = await table.locator("//input[@type='checkbox']").all();

    for (let checkbox of checkboxes) {
      await page.waitForTimeout(500);
      await checkbox.check();
    }

  });
});
