const { describe, it } = intern.getPlugin('interface.bdd');
const { expect } = intern.getPlugin('chai');

describe('app', () => {
    it('should show a welcome heading', async test => {
        const { remote } = test;
        // Load the page
        await remote.get('http://localhost:3000/');
        // Search for an h1 element with the text "Kurtosys Horse Racing"
        await remote.findByXpath('//label[.="Kurtosys Horse Racing"]');
    });
});