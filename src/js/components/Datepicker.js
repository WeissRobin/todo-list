import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

export const Datepicker = () => {
    const dateSelect = document.querySelector('.due-date');
    const dateSpec = document.getElementById('specification');
    dateSelect.addEventListener('click', () => {
        dateSpec.style.display = (dateSpec.style.display === 'none') ? 'block' : 'none';
    });

    new AirDatepicker('.datepicker', {
        inline: true,
        locale: localeEn,
        dateFormat: "d E",
        onSelect({date, formattedDate, datepicker}) {
            dateSelect.querySelector('span').textContent = formattedDate;
        }
    });
}

export default { Datepicker }