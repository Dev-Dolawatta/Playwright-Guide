import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')//since test recorder cant record every action need to say to hover before click
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'This is a dummy website for' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('dt@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Dolawaththa ');
  await page.getByRole('button', { name: 'Continue' }).click();
});