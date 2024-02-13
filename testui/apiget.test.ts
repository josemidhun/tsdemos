import { Builder, By } from 'selenium-webdriver';
import axios from 'axios';

async function testGetApi(url: string) {
    try {
        const response = await axios.get(url);
        console.log('GET Status Code:', response.status);
        console.log('GET Response:', response.data);
    } catch (error) {
        console.error('Error in GET Request:', error);
    }
}
(async function runTests() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {

        // API Tests
        await testGetApi('https://jsonplaceholder.typicode.com/posts/1');


    } finally {
        await driver.quit();
    }
})();
