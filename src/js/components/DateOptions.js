const today = document.querySelector('.date-option:nth-child(1)');
const thisWeek = document.querySelector('.date-option:nth-child(2)');
const thisWeekend = document.querySelector('.date-option:nth-child(3)');
const nextWeek = document.querySelector('.date-option:nth-child(4)');
const noDate = document.querySelector('.date-option:nth-child(5)');
const dateSelect = document.querySelector('.due-date');

const dateObj = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const DateOptionsHandeler = () => {
    today.addEventListener('click', () => {
        dateSelect.querySelector('span').textContent = `${dateObj.getDate()} ${months[dateObj.getMonth()]}`;
    });
    thisWeek.addEventListener('click', () => {
        const currentDay = dateObj.getDay();
        const daysToAdd = currentDay === 0 ? -6 : 1 - currentDay;
        const mondayDate = new Date(dateObj.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

        const sundayDate = new Date(mondayDate.getTime() + 6 * 24 * 60 * 60 * 1000);

        const sundayDay = sundayDate.getDate();
        const sundayMonth = months[sundayDate.getMonth()];

        dateSelect.querySelector('span').textContent = `${sundayDay} ${sundayMonth}`;
    });
    thisWeekend.addEventListener('click', () => {
        const currentDay = dateObj.getDay();
        const daysToAdd = currentDay === 0 ? 6 : 6 - currentDay;
        const nextSaturdayDate = new Date(dateObj.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

        const nextSaturdayDay = nextSaturdayDate.getDate();
        const nextSaturdayMonth = months[nextSaturdayDate.getMonth()];

        dateSelect.querySelector('span').textContent = `${nextSaturdayDay} ${nextSaturdayMonth}`;
    });
    nextWeek.addEventListener('click', () => {
        const nextWeekStartDate = new Date(dateObj.getTime() + 7 * 24 * 60 * 60 * 1000);

        const nextWeekStartDay = nextWeekStartDate.getDate();
        const nextWeekStartMonth = months[nextWeekStartDate.getMonth()];

        dateSelect.querySelector('span').textContent = `${nextWeekStartDay - 1} ${nextWeekStartMonth}`;
    });
    noDate.addEventListener('click', () => {
        dateSelect.querySelector('span').textContent = `No date`;
    });
}

export default { DateOptionsHandeler }