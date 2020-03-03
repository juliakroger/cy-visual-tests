const pages = ['http://example.com/', 'http://google.com/']
const sizes = ['iphone-6', 'ipad-2', [1200, 800]]

describe('Visual Regression', () => {
	it.skip('Visual regression test', () => {
		cy.visit('http://example.com/', { timeout: 10000 })
		cy.matchImageSnapshot()
	})

	pages.forEach(page => {
		sizes.forEach(size => {
			it(`should match ${page} in resolution ${size}`, () => {
				const currentTime = new Date(Date.UTC(2020, 2, 2)).getDate()
				cy.clock(currentTime)

				cy.setResolution(size)
				cy.visit(page, { timeout: 10000 })
				cy.matchImageSnapshot()
			})
		})
	})
})

describe('Single Element Snapshot', () => {
	it('Should match a single element on the page', () => {
		cy.visit('http://example.com/', { timeout: 10000 })
		cy.get('h1').matchImageSnapshot()
	})

	it('Should match a single element on the page', () => {
		cy.visit('http://example.com/', { timeout: 10000 })
		cy.get('h1').matchImageSnapshot({
			failureTreshold: 10.0,
			failureTresholdType: 'pixels'
		})
	})
})
