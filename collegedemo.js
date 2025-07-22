const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

async function loginTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://results.mvsrec.edu.in/SBLogin.aspx");
    await driver.findElement(By.id("txtUserName")).sendKeys("245121737129");
    await driver.findElement(By.id("txtPassword")).sendKeys("245121737129");
    await driver.findElement(By.id("btnSubmit")).click();

    const user = await driver.findElement(By.id("lblHTNo")).getText();
    assert.strictEqual(user, "245121737129");

    console.log("Login success");

    await driver.findElement(By.id("Stud_cpModules_imgbtnExams")).click();
    await driver.findElement(By.id("cpBody_lnkSem")).click();

    const url = await driver.getCurrentUrl();
    assert.strictEqual(
      url,
      "http://results.mvsrec.edu.in/STUDENTLOGIN/Frm_SemwiseStudMarks.aspx"
    );

    console.log("Display marks success");
  } finally {
    await driver.quit();
  }
}

loginTest();
