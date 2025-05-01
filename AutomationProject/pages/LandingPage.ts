import { Locator, Page } from "@playwright/test";

export class LandingPage {
  public readonly editbox: Locator;
  public readonly greenRadioButton: Locator;
  public readonly redRadioButton: Locator;
  public readonly submitButton: Locator;

  constructor(page: Page) {
    this.editbox = page.locator('#editbox');
    this.greenRadioButton = page.locator('#green');
    this.redRadioButton = page.locator('#red');
    this.submitButton = page.locator('#submitButton');
  }
}