import { UI } from "../UserInterface";
import '../../styles/taskAdd.scss';
const UserInterface = new UI();

export const TaskAdd = () => {
    const addTaskBtn = document.getElementById('quick-add');
    addTaskBtn.addEventListener('click', () => {
        let dueDateValue = document.querySelector('.due-date span').textContent;
        if (dueDateValue == 'Due Date') {
            dueDateValue = '';
        }
        let priorityValue = document.querySelector('.priority span').textContent;
        if (priorityValue == 'Priority') {
            priorityValue = '';
        }
        let nameValue = document.getElementById('task-name').value;
        if (nameValue === '') {
            alert('Jméno úkolu nemůže být prázdné.');
            return;
        }
        let descValue = document.getElementById('task-description').value;
        let projectValue = document.getElementById('project-select').value;
        if(projectValue === 'None') {
            projectValue = '';
        }
        //add task to UI and Storage
        UserInterface.addTask(nameValue, descValue, dueDateValue, priorityValue, projectValue);

        //reset fields
        const dueDate = document.querySelector('.due-date span').textContent = 'Due Date';
        const priority = document.querySelector('.priority').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#959595" d="M18.383 4.318a1 1 0 0 0-1.09.217a3.248 3.248 0 0 1-4.586 0a5.25 5.25 0 0 0-7.414 0A.997.997 0 0 0 5 5.242v13a1 1 0 1 0 2 0v-4.553a3.248 3.248 0 0 1 4.293.26a5.25 5.25 0 0 0 7.414 0a1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924"/></svg>
        <span>Priority</span>`;
        const name = document.getElementById('task-name').value = '';
        const desc = document.getElementById('task-description').value = '';
    });
}

export default { TaskAdd }