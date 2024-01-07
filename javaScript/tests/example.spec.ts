import { test, chromium, Browser,expect } from '@playwright/test';
import LoginPage from '../tests/Pages/LoginPage' ;
import { Page } from '@playwright/test';


const searchField='//input[@id="searchField1"]';
const searchIcon ='//button[@type="submit"]';
const JavaSearchResult ='//a[text()="Ten Websites for "]';
const username1 = "j.kunekanth@gmail.com";
const password1 = "Asdzxc@123";
let loginPage: LoginPage;


test.beforeEach('Login', async ({ page }) => {
// await page.goto(Pages.loginPage);
// loginPage = new LoginPage(page);
 //loginPage.login(username1,password1)


 await page.goto('https://onlinelibrary.wiley.com/');
 await page.getByText('Login / Register').click();
 const username =await page.getByLabel('Forgot your password?').getByPlaceholder('Enter your email')
 const password =await page.getByPlaceholder('Enter your password')
 await username?.type("j.kunekanth@gmail.com");
 await password?.type("Asdzxc@123");
 await page.click("input[name='submitButton']") 

});

test('search1', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.locator(searchField).pressSequentially("Java");
  await page.locator(searchIcon).click();
//  await expect(page.locator(JavaSearchResult)).toHaveText(JavaSearchResult,{timeout:5000});
 // https://onlinelibrary.wiley.com/action/doSearch?AllField=java 
});

test('Search2', async ({ page }) => { 
  await page.goto('https://onlinelibrary.wiley.com/action/doSearch?AllField=java');
  await expect(page.locator(JavaSearchResult)).toHaveText('Ten Websites for Java',{timeout:5000});
});