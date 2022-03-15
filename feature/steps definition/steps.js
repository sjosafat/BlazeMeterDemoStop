const {Given, When, Then, Before, After} = require("@cucumber/cucumber")
const {expect, assert} = require("chai")
const {initDriver} = require("../support/utility")
const {By} = require("selenium-webdriver")
const {setDefaultTimeout} = require("@cucumber/cucumber")
const { delayed } = require("selenium-webdriver/lib/promise")
setDefaultTimeout(80*1000);

let driver;
Before(function(){
    driver = initDriver()
}
);

After(function(){
    //driver.quit();
});

function sleep(seconds){
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
};

//Login001
Given('Login001 User access BlazeMeter Demo Store website', async () =>{
    await driver.get("https://www.demoblaze.com/index.html");
    driver.manage().window().maximize();
});

When('Login001 User clicks Log in', async () =>{
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[5]/a")).click();
    
});

When('Login001 User enters a valid username', async () =>{
    sleep(1);
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input")).sendKeys("shanetest");
});

When('Login001 User enters a correct password', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input")).sendKeys("Pass1234");
});

Then ('Login001 User clicks Log in button', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[2]")).click();
    sleep(2);
    driver.close();
});

//Login002
Given('Login002 User access BlazeMeter Demo Store website', async () =>{
    await driver.get("https://www.demoblaze.com/index.html");
    driver.manage().window().maximize();
});

When('Login002 User clicks Log in', async () =>{
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[5]/a")).click();
    
});

When('Login002 User enters an invalid username', async () =>{
    sleep(1);
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input")).sendKeys("testshane");
});

When('Login002 User enters a correct password', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input")).sendKeys("Pass1234");
});

When ('Login002 User clicks Log in button', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[2]")).click();
});

Then ('Login002 User will be notified that the user does not exist', async () =>{
    //driver.findElement(By.name('User does not exist.')).getText();
    //driver.switchTo().alert().accept();
    sleep(1);
    driver.findElement(By.linkText("OK")).click();
    driver.close();
    driver.close();
});

//Logout001
Given('Logout001 User access BlazeMeter Demo Store website', async () =>{
    await driver.get("https://www.demoblaze.com/index.html");
    driver.manage().window().maximize();
});

When('Logout001 User clicks Log in', async () =>{
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[5]/a")).click();
    
});

When('Logout001 User enters a valid username', async () =>{
    sleep(1);
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[1]/input")).sendKeys("shanetest");
});

When('Logout001 User enters a correct password', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[2]/form/div[2]/input")).sendKeys("Pass1234");
});

When('Logout001 User clicks Log in button', async () =>{
    await driver.findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[2]")).click();
});

Then ('Logout001 User clicks Log out button', async () =>{
    sleep(2);
    await driver.findElement(By.xpath("/html/body/nav/div[1]/ul/li[6]/a")).click();
    driver.close();
});