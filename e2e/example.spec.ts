import { expect, test } from "@playwright/test"

test("has header", async ({ page }) => {
  await page.goto("./")

  const locator = page.locator("header")
  await expect(locator).toHaveCount(1)
})
