import test from "@playwright/test";

test('Apply naukri', async({page})=>{
    await page.goto('https://www.naukri.com/')
    await page.locator('[title="Jobseeker Login"]').click();
    await page.getByPlaceholder('Enter your active Email ID / Username').fill('lalit.jadhav101@gmail.com');
    await page.getByPlaceholder('Enter your password').fill('Lalit@1431');
    await page.locator('.btn-primary.loginButton').click();
    //await page.waitForLoadState('networkidle');
    await page.getByText('Search jobs here').click();
    await page.getByPlaceholder('Enter keyword / designation / companies').fill('software test engineer');
    await page.locator('.dropdownMainContainer').click();
    await page.getByText('4 years', { exact: true }).click();
    await page.getByPlaceholder('Enter location').fill('Pune');
    await page.getByText('Search', { exact: true }).click();
    const sta= await page.locator('span:has-text("1 - 20")').isVisible();
    console.log(sta);
    await page.locator('span:has-text("Sort by: Recommended")').click();
    await page.getByText('Date', { exact: true }).click();
    await page.locator('.srp-jobtuple-wrapper');

    await page.waitForTimeout(5000);







})