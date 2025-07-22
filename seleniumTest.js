const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const path = require("path");

async function testMathFunction() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    const pagePath = "file://" + path.resolve(__dirname, "testPage.html");
    await driver.get(pagePath);

    const output = await driver.wait(until.elementLocated(By.id("output")), 2000);
    const resultText = await output.getText();

    assert.strictEqual(resultText, "15");
    console.log("✅ Math function test passed.");
  } catch (err) {
    console.error("❌ Test failed:", err.message);
  } finally {
    await driver.quit();
  }
}

testMathFunction();
