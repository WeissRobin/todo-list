import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

export const DetailedTask = () => {
    new AirDatepicker('.detailed-task__datepicker', {
        locale: localeEn,
        dateFormat: "d E",
        onSelect({date, formattedDate, datepicker}) {
            dateSelect.querySelector('span').textContent = formattedDate;
        }
    });
    const projectSelect = document.querySelector('.project-select-box');
    const projectList = document.querySelector('.project-select-box__project-list');
    projectSelect.addEventListener('click', () => {
        projectList.style.display = (projectList.style.display === 'none') ? 'block' : 'none';
    });
}

export default { DetailedTask }