const puppeteer = require('puppeteer');

test('Adds two numbers', () => {
    const sum = 1 + 2;

    expect(sum).toEqual(3);

    
});

test('We can launch a browser', async () => {
    //this is all async
    //object for browser options
    const browser = await puppeteer.launch({
        headless: false //do not start in headless mode, so launch browser and see.
    });
    //create page, represents one tab, will tell it to click button or navigate
    const page = await browser.newPage();
})