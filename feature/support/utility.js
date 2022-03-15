const wdriver = require("selenium-webdriver");
const {Builder, Capabilities} = require('selenium-webdriver');
const capab = new Capabilities();
capab.setPageLoadStrategy("normal");
exports.initDriver = ()=>{
    driver = new wdriver.Builder()
    .withCapabilities(capab)
    .forBrowser("chrome")
    .build();
    return driver;
}
