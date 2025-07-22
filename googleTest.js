const { Builder, By, Key, until } = require("selenium-webdriver");

async function testGoogleSearch() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.google.com");
    const searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("Selenium WebDriver", Key.RETURN);

    await driver.wait(until.titleContains("Selenium WebDriver"), 5000);
    console.log("✅ Google search test passed.");
  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
}

testGoogleSearch();
