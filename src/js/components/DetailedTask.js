import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

import { Storage } from '../Storage';
import { UI } from '../UserInterface';
const newStorage = new Storage();
const UserInterface = new UI();

export const DetailedTask = () => {
    const detailedTask = document.querySelector('.detailed-task');

    const deleteBtn = document.querySelector('.delete');
    const saveBtn = document.querySelector('.save');
    const closeBtn = document.querySelector('.close');

    const projectSelect = document.querySelector('.project-select-box');
    const projectList = document.querySelector('.project-select-box__project-list');

    const prioritySelect = document.querySelector('.priority-select-box');
    const priorityList = document.querySelector('.priority-select-box__priority-list');

    const priorityItems = priorityList.querySelectorAll('li');
    const projectItems = projectList.querySelectorAll('li');

    const dateSelect = document.querySelector('.detailed-task__datepicker');

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
    projectItems.forEach(item => {
        //TODO:dodělat aby každej item měnil textContent selectu
    });
    priorityItems.forEach(item => {
        //TODO:dodělat aby každej item měnil textContent selectu
    });

    deleteBtn.addEventListener('click', () => {
        const projectName = document.querySelector('.project-select').value;
        const taskName = document.querySelector('.detailed-task__name').textContent;
        newStorage.deleteTask(taskName, projectName);
        UserInterface.deleteTask(taskName, projectName);
    });
    saveBtn.addEventListener('click', () => {
        //Old info
        const oldProject = detailedTask.getAttribute('old_project');
        const oldName = detailedTask.getAttribute('old_name');

        //Old task (storage)
        const newTask = newStorage.loadTask(oldName, oldProject);

        //New info
        const taskName = document.querySelector('.detailed-task__name').textContent;
        const taskDesc = document.querySelector('.detailed-task__desc').textContent;
        const taskDue = document.querySelector('.detailed-task__datepicker').value;
        const taskPriority = document.querySelector('.detailed-task__priority').value;
        const taskProject = document.querySelector('.project-select').value;

        newTask.description = taskDesc;
        newTask.dueDate = taskDue;
        newTask.name = taskName;
        newTask.priority = taskPriority;
        newTask.project = taskProject;

        newStorage.updateTask(oldName, newTask, oldProject, taskProject);
    });
    closeBtn.addEventListener('click', () => {
        detailedTask.style.display = 'none';
    });
    
}

export default { DetailedTask }