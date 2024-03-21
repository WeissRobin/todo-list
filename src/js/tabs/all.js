import { Storage } from '../Storage';
import { UI } from '../UserInterface';
import { OpenTask } from '../components/DetailedTask';

import '../../styles/index.scss';

const content = document.querySelector('.content');
const newStorage = new Storage();
const UserInterface = new UI();

export const renderContent = async () => {
    content.innerHTML = '';

    const tasksSection = document.createElement('section'); tasksSection.setAttribute('id', 'all-tasks');
    tasksSection.innerHTML = `
        <h1 class="tab-heading">All tasks</h1>
        <button id="add-task" class="add-button add-task">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7c7c7c" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"/></svg>
            Add New Task
        </button>
            <div class="tasks-container">
        </div>
    `;

    setTimeout(() => {
        const addTask = document.getElementById('add-task');
        const cancelTask = document.getElementById('quick-cancel');

        const addTaskWindow = document.querySelector('.quick-add');

        addTask.addEventListener('click', () => {
            addTaskWindow.style.display = "flex";
            const projectSelect = document.getElementById('project-select');
            projectSelect.innerHTML = '<option>None</option>';
            const allProjects = newStorage.getAllProjects();
            allProjects.forEach(project => {
                const option = document.createElement('option');
                option.textContent = project.name;
                projectSelect.appendChild(option);
            });
        });

        cancelTask.addEventListener('click', () => {
            addTaskWindow.style.display = "none";
        });

        UserInterface.loadAllTasks()
        .then(() => {
            const tasks = document.querySelectorAll('.task');
            tasks.forEach(task => {
                task.addEventListener('click', e => {
                    //get task from storage
                    const taskName = e.target.querySelector('.task-name').textContent;
                    const taskProject = e.target.querySelector('.task-project').textContent;
                    const task = newStorage.loadTask(taskName, taskProject);
                    //ui render
                    const { name, description, dueDate, priority, project, subTasks } = task;
                    UserInterface.detailedTask(name, description, dueDate, priority, project, subTasks);
                });
            });
        })
        .catch(err => console.log(err));
    }, 0)

    content.append(tasksSection);
}