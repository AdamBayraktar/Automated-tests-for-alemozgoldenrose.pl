import { Page, Locator, expect } from '@playwright/test'

export class FooterMenuPage{

    readonly page: Page;
    // subscription field
    readonly subscriptionField: Locator;
    readonly subscriptionSubmitButton: Locator;
    // information
    readonly promotionsLink: Locator;
    readonly newProductsLink: Locator;
    readonly topSellersLink: Locator;
    readonly ourShopsLink: Locator;
    readonly contactWithUsLink: Locator;
    readonly competitionRegulationLink: Locator;
    readonly siteMapLink: Locator;
    // my account
    readonly myOrdersLink: Locator;
    readonly myProductReturnsLink: Locator;
    readonly myBillsLink: Locator;
    readonly myAddressesLink: Locator;
    readonly myPersonalInformationLink: Locator;
    readonly myCouponsLink: Locator;
    // social media icons
    readonly facebookIcon: Locator
    readonly InstagramIcon: Locator
}