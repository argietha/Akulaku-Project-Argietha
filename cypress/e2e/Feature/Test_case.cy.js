/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.akulakufinance.co.id/kegiatan')
    })

    it('TC001: Verify Akulaku Finance homepage', () => {
        // Visit the Akulaku Finance homepage
        cy.visit('https://www.akulakufinance.co.id/')

        // Verify Akulaku Finance homepage elements
        cy.contains('Beranda').should('be.visible')
        cy.contains('Tentang Kami').should('be.visible')

    })

    it('TC002: Navigate and Verify to Akulaku Finance Kegiatan page', () => {
        // Verify Akulaku Finance Kegiatan page elements - Banner Kegiatan
        cy.get('img[alt*="Header Image"]').should('be.visible')

        // Verify Akulaku Finance Kegiatan page elements - Section Kegiatan
        cy.contains('Literasi & Inklusi Keuangan').should('be.visible')
    })

    it('TC003: Verify there are 6 video thumbnails visible on the page', () => {
        // Verify Akulaku Tumbnail Video elements 
        //1st Video
        cy.get('#widget2', { timeout: 20000 })
            .should('have.attr', 'src')
            .and('include', 'youtube.com/embed/um-kd45LIlw')
            .and('include', 'autoplay=0')

        //2nd Video
        cy.get('#widget4', { timeout: 20000 })
            .should('have.attr', 'src')
            .and('include', 'youtube.com/embed/VP2wxufa7do')
            .and('include', 'autoplay=0')

        //3rd Video
        cy.get('#widget6', { timeout: 20000 })
            .should('have.attr', 'src')
            .and('include', 'youtube.com/embed/dYLPM6YccYQ')
            .and('include', 'autoplay=0')

        //4th Video
        cy.get('#widget8', { timeout: 20000 })
            .should('have.attr', 'src')
            .and('include', 'youtube.com/embed/sBTOgBQtuE8')
            .and('include', 'autoplay=0')

        //5th Video
        cy.get('#widget10', { timeout: 20000 })
            .should('have.attr', 'src')
            .and('include', 'youtube.com/embed/_ODIrX5DIfs')
            .and('include', 'autoplay=0')

        //6th Video
        cy.get('#widget12', { timeout: 20000 })
            .should('have.attr', 'src')
            .and('include', 'youtube.com/embed/AHQTAmheQio')
            .and('include', 'autoplay=0')

    })

    it('TC004: Verify that video pagination (page switcher) is available', () => {
        // Verify Akulaku Video Pagination elements
        cy.get('nav[aria-label="Page navigation example"]')
            .should('be.visible')
        cy.get('nav[aria-label="Page navigation example"] button')
            .should('have.length.at.least', 5)
        cy.get('nav[aria-label="Page navigation example"] button[aria-current="page"]')
            .should('contain.text', '1', '2', '3', '4', '5')

        // User can click on page 2 and next, then verify the page switch
        cy.get('nav[aria-label="Page navigation example"] button')
            .contains('2')
            .click({ timeout: 20000 })

        cy.get('nav[aria-label="Page navigation example"] button')
            .contains('3')
            .click({ timeout: 20000 })

        cy.get('nav[aria-label="Page navigation example"] button')
            .contains('4')
            .click({ timeout: 20000 })

        cy.get('nav[aria-label="Page navigation example"] button')
            .contains('5')
            .click({ timeout: 20000 })



    })

    it('TC005: Use the search bar to find articles with the keyword “vaksin”', () => {
        // Verify Akulaku Search Bar elements
        cy.get('input[placeholder="Cari..."]')
            .first()
            .type('vaksin', { timeout: 20000 })

        // Wait until dropdown exists
        cy.get('.absolute.bg-white.border-2', { timeout: 20000 })
            .should('be.visible')

        // Verify search results contain the keyword "vaksin"
        cy.contains('Kegiatan Vaksin Covid-19 Bersama APPI').should('be.visible', { timeout: 20000 })
        cy.contains('Akulaku Finance Indonesia Dukung Percepatan Vaksinasi Covid-19').should('be.visible', { timeout: 20000 })
    })

})