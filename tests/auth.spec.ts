import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(`${process.env.APP_BASE_URL}/login`);

  await expect(page.locator("#submit")).toHaveText("Log out");
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: "./playwright/screenshots/screen-capture.png",
  });
});
