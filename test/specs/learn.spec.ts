describe('Tugas Mobile Automation - API Demos', () => {

    beforeEach(async () => {
        const menuApp = await $('~App');
        await menuApp.waitForDisplayed({ timeout: 10000 });
        await menuApp.click();

        const menuAlert = await $('~Alert Dialogs');
        await menuAlert.waitForDisplayed();
        await menuAlert.click();
    });

    it('Skenario: Berhasil Masukkan Nama, password, dan Verifikasi', async () => {
        await $('~Text Entry dialog').click();

        const nameInput = await $('id=io.appium.android.apis:id/username_edit');
        const passInput = await $('id=io.appium.android.apis:id/password_edit');

        await nameInput.waitForDisplayed();
        await nameInput.setValue('Tiara');
        await passInput.setValue('Rahasia123');

        await expect(nameInput).toHaveText('Tiara');
        await expect(passInput).toBeDisplayed();

        await browser.saveScreenshot('./screenshot/ss_berhasil.png');

        await $('id=android:id/button1').click(); 
    });


    afterEach(async () => {
        await browser.back();
        await browser.back();
    });
});