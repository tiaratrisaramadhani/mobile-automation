import AlertPage from '../pageobjects/alert.page.ts';

describe('Tugas Mobile Automation - API Demos', () => {
    it('Skenario: Input Name dan Password dengan POM', async () => {
        // Gabungkan semua langkah di sini
        await AlertPage.bukaHalamanTextEntry();
        
        const inputName = 'Tiara';
        const inputPass = 'Rahasia123';

        await AlertPage.submitForm(inputName, inputPass);
        await expect(AlertPage.inputName).toHaveText(inputName);
        await browser.saveScreenshot('./screenshot/hasil_test.png');
        await AlertPage.okBtn.click();
    });
});