import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

import { Storage } from '../Storage';
const newStorage = new Storage();

export const DetailedTask = () => {
    const detailedTask = document.querySelector('.detailed-task');

    const deleteBtn = document.querySelector('.delete');
    const saveBtn = document.querySelector('.save');
    const closeBtn = document.querySelector('.close');

    const projectSelect = document.querySelector('.project-select-box');
    const projectList = document.querySelector('.project-select-box__project-list');

    const prioritySelect = document.querySelector('.priority-select-box');
    const priorityList = document.querySelector('.priority-select-box__priority-list');

    new AirDatepicker('.detailed-task__datepicker', {
        locale: localeEn,
        dateFormat: "d E",
        onSelect({date, formattedDate, datepicker}) {
            dateSelect.querySelector('span').textContent = formattedDate;
        }
    });
    projectSelect.addEventListener('click', () => {
        projectList.style.display = (projectList.style.display === 'none') ? 'block' : 'none';
    });
    prioritySelect.addEventListener('click', () => {
        priorityList.style.display = (priorityList.style.display === 'none') ? 'block' : 'none';
    });
    deleteBtn.addEventListener('click', () => {
        const projectName = document.querySelector('.project-select').value;
        const taskName = document.querySelector('.detailed-task__name').textContent;

        newStorage.deleteTask(taskName, projectName);
    });
    saveBtn.addEventListener('click', () => {
        
    });
    closeBtn.addEventListener('click', () => {
        detailedTask.style.display = 'none';
    });
}

export default { DetailedTask }