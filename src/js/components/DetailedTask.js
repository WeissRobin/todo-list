import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

export const DetailedTask = (name, desc, dueDate, project, subtask) => {
    new AirDatepicker('.detailed-task__datepicker', {
        locale: localeEn,
        dateFormat: "d E",
        onSelect({date, formattedDate, datepicker}) {
            dateSelect.querySelector('span').textContent = formattedDate;
        }
    });
}

export default { DetailedTask }