import test, { expect, Page } from "@playwright/test";

interface LoginArgs {
  page: Page;
  baseurl: string;
}

async function loginpage({page,baseurl}:LoginArgs){
    await page.goto(`${baseurl}/login`);
    await page.getByPlaceholder('you@email.com').fill('lalit.jadhav@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Lalit@1431');
    await page.getByRole('button',{name:'Sign In'}).click();
    await expect(page.getByText('Browse Events →')).toBeVisible();
}


test('Single ticket booking is eligible for refund',async({page})=>{
    const baseurl='https://eventhub.rahulshettyacademy.com';
    await loginpage({page,baseurl});
    await page.getByText('Events', { exact: true }).click();
    const eventCard=  page.locator('div [data-testid="event-card"]').first();
    await eventCard.getByText('Book Now', { exact: true }).click();
    await page.getByPlaceholder('Your full name').fill('Krutik gaikwad');
    await page.getByPlaceholder('you@email.com').fill('krutik@gmail.com');
    await page.locator('div [id="phone"]').fill('7845124578');
    await page.getByRole('button', { name: 'Confirm Booking' }).click();
    await page.locator('#nav-bookings').click();
    await expect(page).toHaveURL(baseurl+'/bookings')
    const bookingCard= page.locator('#booking-card').first();
    await bookingCard.getByRole('button', { name: 'View Details' }).click();
    const infoText= page.getByText('Booking Information', { exact: true });
    await expect(infoText).toBeVisible();
    const bookingref=await page.locator('span[class$="text-gray-900 font-mono"]').textContent() || '';
    const eventcardDetail=await page.locator('.space-y-3').first();
    const eventName=await eventcardDetail.locator('.font-medium').first().textContent() || '';
    expect (bookingref.charAt(0)).toEqual(eventName?.charAt(0))
    await page.getByRole('button', { name: 'Check eligibility for refund?' }).click();
    await expect(page.locator('#refund-spinner')).toBeVisible();
    await expect(page.locator('#refund-spinner')).toBeHidden({timeout:7000});

})