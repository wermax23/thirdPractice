import { expect, test } from "@playwright/test";

test("Bypass authetication by embedding the credentials in the URL", async ({
  page,
}) => {
  // https://username:password@domainAddress

  // https://admin:admin@practice.cydeo.com/basic_auth

  await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");

  await page.waitForTimeout(3000);

  let congratsMessage = page.locator(
    "//p[contains(text(),'Congratulations!')]"
  );

  await expect(congratsMessage).toBeVisible();
});


test("Bypass authentication by encoding credentials in base64 format", async ({
  page,
}) => {

  // encoding credentials in base64 format
  let encodedCredentials = Buffer.from("admin:admin").toString("base64");

  // set up the authentication header
  page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCredentials}` });

  await page.goto("https://practice.cydeo.com/basic_auth");

  await page.waitForTimeout(3000);

  let congratsMessage = page.locator(
    "//p[contains(text(),'Congratulations!')]"
  );

  await expect(congratsMessage).toBeVisible();

});
