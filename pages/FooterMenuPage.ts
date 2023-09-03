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

    constructor(page: Page){
        this.page = page;
        // subscription field
        this.subscriptionField = page.locator("footer").
        this.subscriptionSubmitButton = page.locator("footer").getByRole('form').getByRole('button')
        this.promotionsLink
        this.newProductsLink
        this.topSellersLink
        this.ourShopsLink
        this.contactWithUsLink
        this.competitionRegulationLink
        this.siteMapLink
        // my account
        this.myOrdersLink
        this.myProductReturnsLink
        this.myBillsLink
        this.myAddressesLink
        this.myPersonalInformationLink
        this.myCouponsLink
        // social media icons
        this.facebookIcon
        this.InstagramIcon

    }
}