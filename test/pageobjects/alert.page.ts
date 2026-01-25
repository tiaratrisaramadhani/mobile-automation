import { $ } from '@wdio/globals'

class AlertPage {
    // Kita gunakan XPath agar lebih pasti ketemu di berbagai versi Android
    get menuApp() { return $('android=new UiSelector().text("App")'); }
    get menuAlert() { return $('android=new UiSelector().text("Alert Dialogs")'); }
    get textEntryBtn() { return $('android=new UiSelector().text("Text Entry dialog")'); }
    
    get inputName() { return $('id=io.appium.android.apis:id/username_edit'); }
    get inputPass() { return $('id=io.appium.android.apis:id/password_edit'); }
    get okBtn() { return $('id=android:id/button1'); }

    async bukaHalamanTextEntry() {
        // Tunggu sampai elemen benar-benar muncul di layar (max 15 detik)
        await this.menuApp.waitForDisplayed({ timeout: 15000 });
        await this.menuApp.click();
        
        await this.menuAlert.waitForDisplayed({ timeout: 10000 });
        await this.menuAlert.click();
        
        await this.textEntryBtn.waitForDisplayed({ timeout: 10000 });
        await this.textEntryBtn.click();
    }

    async submitForm(name: string, pass: string) {
        await this.inputName.waitForDisplayed({ timeout: 10000 });
        await this.inputName.setValue(name);
        await this.inputPass.setValue(pass);
    }
}

export default new AlertPage();