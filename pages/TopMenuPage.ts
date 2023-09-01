import {Page, Locator, expect} from '@playwright/test'

export class TopMenuPage{
    readonly page: Page;
    readonly logoLink: Locator;
    readonly searchBarField: Locator;
    readonly searchBarSubmitButton: Locator;
    readonly myWishListLink: Locator;
    readonly accountLink: Locator;
    readonly myCartLink: Locator;
    readonly ourOfferLink: Locator;
    readonly specialOffersLink: Locator;
    readonly newsLink: Locator;
    readonly paymentDeliveryLink: Locator;
    readonly regulationsLink: Locator;
    readonly blogLink: Locator;
    readonly aboutUsLink: Locator;
    readonly contactLink: Locator;


}