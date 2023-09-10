import {Page, Locator, expect} from '@playwright/test'

export class TopMenuPage{
    readonly page: Page;
    readonly logoLink: Locator;
    readonly searchBarField: Locator;
    readonly searchBarSubmitButton: Locator;
    readonly myWishListLink: Locator;
    // login elements
    readonly accountLink: Locator;
    readonly emailLoginField: Locator;
    readonly passwordLoginField: Locator;
    readonly loginButton: Locator;
    // navbar
    readonly myCartLink: Locator;
    readonly ourOfferLink: Locator;
    readonly specialOffersLink: Locator;
    readonly newsLink: Locator;
    readonly paymentDeliveryLink: Locator;
    readonly regulationsLink: Locator;
    readonly blogLink: Locator;
    readonly aboutUsLink: Locator;
    readonly contactLink: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.logoLink = page.locator('#header_logo');
        this.searchBarField = page.locator('#tm_search_query');
        this.searchBarSubmitButton = page.getByRole('button', {name:'tm_submit_search'})
        this.myWishListLink = page.getByTitle("Przechowalnia")
        // login elements
        this.accountLink = page.locator("#icon_header_login")
        this.emailLoginField = page.locator("#header-login-content").getByPlaceholder("email")
        this.passwordLoginField = page.locator("#header-login-content").getByPlaceholder("hasło")
        this.loginButton = page.locator("#header-login-content").getByRole("button", {name:'Zaloguj'})
        // navbar
        this.myCartLink = page.locator("#koszyk")
        this.ourOfferLink = page.locator("#header").getByRole('link', {name:"nasza oferta"})
        this.specialOffersLink = page.locator("#header").getByRole('link', {name:"oferty specjalne"})
        this.newsLink = page.locator("#header").getByRole('link', {name:"nowości"})
        this.paymentDeliveryLink = page.locator("#header").getByRole('link', {name:"dostawa płatności"})
        this.regulationsLink = page.locator("#header").getByRole('link', {name:"regulamin"})
        this.blogLink = page.locator("#header").getByRole('link', {name:"blog"})
        this.aboutUsLink = page.locator("#header").getByRole('link', {name:"o nas"})
        this.contactLink = page.locator("#header").getByRole('link', {name:"kontakt"})
    }

    async signIn(login, password){
        await this.accountLink.click()
        await this.emailLoginField.fill(login)
        await this.passwordLoginField.fill(password)
        await this.loginButton.click()
    }

}