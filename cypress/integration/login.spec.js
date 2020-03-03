describe('Visual Regression - Login Page', () => {
	before(() => {
		cy.visit('http://zero.webappsecurity.com/index.html', { timeout: 10000 })
		cy.get('#signin_button').click()

		cy.get('#user_login').type('username', { delay: 50 })
		cy.get('#user_password').type('password', { delay: 50 })
		cy.get('#user_remember_me').click()
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
