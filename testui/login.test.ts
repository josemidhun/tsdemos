import { Builder, By } from 'selenium-webdriver';
// ... (rest of your imports)

(async function runTests() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        // Verification of successful login can be done here
        // Example: Check for the existence of a logout button or a specific element unique to the logged-in state

        // Your API testing and other code
        // ...

    } finally {
        await driver.quit();
    }
})();
