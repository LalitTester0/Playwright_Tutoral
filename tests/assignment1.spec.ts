import { expect ,test,Page} from "@playwright/test";


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

test('Create a brand new event ',async({page})=>{
    const baseurl='https://eventhub.rahulshettyacademy.com';
    await loginpage({page,baseurl});
    await page.getByRole('button', { name: 'Admin' }).click();
    await page.locator('a').filter({ hasText: 'Manage Events' }).first().click();
    let eventName=`Lalit ${Date.now()}`;
    await page.getByPlaceholder('Event title').fill(eventName);
    await page.getByPlaceholder('Describe the event…').fill('Testing Activities')
    await page.getByRole('combobox', { name: 'Category*' }).selectOption({value:'Concert'});
    await page.getByPlaceholder('e.g. Bangalore').fill('Pune');
    await page.getByRole('textbox', { name: 'Venue*' }).fill('Pune')
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).pressSequentially('08070020271015')
    await page.getByPlaceholder('0.00').fill('900');
    await page.getByPlaceholder('e.g. 500').fill('200')
    await page.getByRole('button', { name: '+ Add Event' }).click();
    await expect(page.getByText('Event created!')).toBeVisible();
    await page.getByText('Events', { exact: true }).click();
    let cards= page.locator('div [data-testid="event-card"]');
    await expect (cards.first()).toBeVisible();
    let card=cards.filter({hasText:eventName});
    let seats=await card.locator('.text-xs').last().textContent() || " ";
    let seatsBeforeBooking =parseInt(seats,10);
    await card.getByText('Book Now').click();
    let bookingTicketCount= page.locator('.ticket-count');
    await expect(bookingTicketCount).toContainText('1');
    await page.getByPlaceholder('Your full name').fill('Krutik gaikwad');
    await page.getByPlaceholder('you@email.com').fill('krutik@gmail.com');
    await page.locator('div [id="phone"]').fill('7845124578');
    await page.getByRole('button', { name: 'Confirm Booking' }).click();
    let bookingRef=await page.locator('.booking-ref').textContent() || '';
    await page.locator('#nav-bookings').click();
    await expect(page).toHaveURL(baseurl+'/bookings')
    let bookingcard= page.locator('div [data-testid="booking-card"]').filter({hasText:bookingRef});
    await expect(bookingcard).toBeVisible();
    await expect(bookingcard.getByText(eventName)).toBeVisible();
    await page.goBack();
    await page.goBack();
    console.log(eventName)
    await page.waitForTimeout(1000)
    let cardw=cards.filter({hasText:eventName});
    let updatedSeatsText = await cardw.locator('.text-xs').last().textContent() || " ";
    let seatsAfterBooking = parseInt(updatedSeatsText, 10);
    expect(seatsAfterBooking).toEqual(seatsBeforeBooking -1);
    
})