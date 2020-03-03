import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
	failureTreshold: 0.0,
	failureTresholdType: 'percent',
	customDiffConfig: {
		treshold: 0.9
	},
	capture: 'viewport'
})

Cypress.Commands.add('setResolution', size => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})

Cypress.Commands.add('login', (username, password) => {
	cy.clearCookies()
	cy.clearLocalStorage()

	cy.get('#user_login').as('username')
	cy.get('#user_password').as('password')

	cy.get('@username').type(username, { delay: 50 })
	cy.get('@password').type(password, { delay: 50 })

	cy.get('#user_remember_me').click()

	cy.get('input')
		.contains('Sign in')
		.click()
})
