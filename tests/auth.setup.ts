import { expect, test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("https://demoqa.com/login");
  await page.locator("input[id=userName]").fill("arontest");
  await page.locator("input[id=password]").fill("Password1234$");
  await page.getByRole("button", { name: "Login" }).click();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL("https://demoqa.com/profile");
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.locator("#userName-value")).toHaveText("arontest");

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
