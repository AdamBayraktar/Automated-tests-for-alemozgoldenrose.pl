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
        this.subscriptionField = page.locator("#newsletter-input")
        this.subscriptionSubmitButton = page.locator("#newsletter_block_left").getByRole('button')
        this.promotionsLink = page.locator("#footer").getByTitle('Promocje')
        this.newProductsLink = page.locator("#footer").getByTitle('Nowe produkty')
        this.topSellersLink = page.locator("#footer").getByTitle('Top sellers')
        this.ourShopsLink = page.locator("#footer").getByTitle('Nasze sklepy')
        this.contactWithUsLink = page.locator("#footer").getByTitle('Kontakt z nami')
        this.competitionRegulationLink = page.locator("#footer").getByTitle('Regulamin konkursu')
        this.siteMapLink = page.locator("#footer").getByTitle('Mapa strony')
        // my account
        this.myOrdersLink = page.locator("#footer").getByTitle('Moje zamówienia')
        this.myProductReturnsLink = page.locator("#footer").getByTitle('Moje zwroty produktów')
        this.myBillsLink = page.locator("#footer").getByTitle('Moje rachunki')
        this.myAddressesLink = page.locator("#footer").getByTitle('Moje adresy')
        this.myPersonalInformationLink = page.locator("#footer").getByTitle('Zarządzaj moimi informacjami osobistymi')
        this.myCouponsLink = page.locator("#footer").getByTitle('Moje bony')
        // social media icons
        this.facebookIcon = page.locator("#social_block .facebook").getByRole('link')
        this.InstagramIcon = page.locator("#social_block .instagram").getByRole('link')
    }
}