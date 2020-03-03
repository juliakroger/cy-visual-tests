describe('Visual Regression - Data Tables', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()
		cy.login('username', 'password')
	})

	it(`should load account activity`, () => {
		cy.get('#account_activity_tab').click()
	})

	it(`Desktop Layout`, () => {
		cy.setResolution([1280, 720])
		cy.matchImageSnapshot()
	})

	it(`Ipad Layout`, () => {
		cy.setResolution('ipad-2')
		cy.matchImageSnapshot()
	})

	it(`Mobile Layout`, () => {
		cy.setResolution('iphone-6')
		cy.matchImageSnapshot()
	})
})
