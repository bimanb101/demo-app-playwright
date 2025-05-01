import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';

test.describe('Editbox Tests', () => {
  let myLandingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    myLandingPage = new LandingPage(page);
  });

  test('Check editbox is visible', async ({ page }) => {
    await expect(myLandingPage.editbox).toBeVisible();
  });

  test('editbox changes to red when red radio button is selected', async ({ page }) => {

    await expect(myLandingPage.editbox).toHaveCSS('background-color', 'rgb(255, 255, 255)');

    await myLandingPage.redRadioButton.click();
    await myLandingPage.submitButton.click();

    await expect(myLandingPage.editbox).toHaveCSS('background-color', 'rgb(255, 0, 0)');
  });

  test('editbox changes to Green when green radio button is selected', async ({ page }) => {

    await expect(myLandingPage.editbox).toHaveCSS('background-color', 'rgb(255, 255, 255)');

    await myLandingPage.greenRadioButton.click();
    await myLandingPage.submitButton.click();

    await expect(myLandingPage.editbox).toHaveCSS('background-color', 'rgb(0, 128, 0)');
  });
})