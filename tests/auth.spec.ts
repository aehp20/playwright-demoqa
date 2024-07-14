import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoqa.com/login");

  await expect(page.locator("#submit")).toHaveText("Log out");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: "./playwright/screenshots/screen-capture.png",
  });
});
