import { Logger } from "sass";
import { Storage } from "./Storage";
import { Todo } from "./Todo";
import { ProjectItem } from './components/ProjectItem';

const newStorage = new Storage();

export class UI {
    loadProjects = () => {
        const projectList = document.getElementById('project-list');
        newStorage.getAllProjects().forEach(project => projectList.appendChild(ProjectItem(project.name, project.color)));
    }
    deleteProject = (node, name) => {
        node.remove();
        newStorage.removeProject(name);
    }
    addProject = (name, color) => {
        const projectList = document.getElementById('project-list');
        projectList.appendChild(ProjectItem(name, color));
        newStorage.addProject(name, color);
    }
    addTask = (name, desc, dueDate, priority, project) => {
        const tasksContainer = document.querySelector('.tasks-container');
        const taskDiv = document.createElement('div'); taskDiv.classList.add('task');

        //Add to storage
        const newTodo = new Todo(name, desc, dueDate, priority, project);
        newStorage.addTask(newTodo, project);

        dueDate = dueDate ? `<div class="task-desc-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#454545" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"/></svg>${dueDate}</div>` : '' 
        priority = priority ? `<div class="task-desc-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#454545" d="M18.383 4.318a1 1 0 0 0-1.09.217a3.248 3.248 0 0 1-4.586 0a5.25 5.25 0 0 0-7.414 0A.997.997 0 0 0 5 5.242v13a1 1 0 1 0 2 0v-4.553a3.248 3.248 0 0 1 4.293.26a5.25 5.25 0 0 0 7.414 0a1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924"/></svg>${priority}</div>` : '';
        project = project ? `<div class="task-desc-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="#454545" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 21l7.794-4.5v-9M12 21l-7.794-4.5v-9M12 21v-9m7.794-4.5L12 3L4.206 7.5m15.588 0L12 12M4.206 7.5L12 12"/></svg><span class="task-project">${project}</span></div>`: '';
        
        taskDiv.innerHTML = `
        <input class="task-checkbox" type="checkbox">
        <div class="task-main">
            <h3 class="task-name">${name}</h3>
            <div class="task-secondary">
                ${dueDate} ${priority} ${project}
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg>
        `;
        tasksContainer.appendChild(taskDiv);
        taskDiv.addEventListener('click', e => {
            //get task from storage
            const taskName = e.target.querySelector('.task-name').textContent;
            const taskProject = e.target.querySelector('.task-project').textContent;
            const task = newStorage.loadTask(taskName, taskProject);
            //ui render
            const { name, description, dueDate, priority, project, subTasks } = task;
            this.detailedTask(name, description, dueDate, priority, project, subTasks);
        });
    }
    loadAllTasks = async () => {
        return new Promise((resolve, reject) => {
            newStorage.getAllProjects().forEach(project => {
                project.tasks.forEach(task => {
                    let { name, dueDate, priority, project } = task;
                    
                        const tasksContainer = document.querySelector('.tasks-container');
                        const taskDiv = document.createElement('div');
                        taskDiv.classList.add('task');
    
                        dueDate = dueDate ? `<div class="task-desc-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#454545" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"/></svg>${dueDate}</div>` : '';
                        priority = priority ? `<div class="task-desc-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#454545" d="M18.383 4.318a1 1 0 0 0-1.09.217a3.248 3.248 0 0 1-4.586 0a5.25 5.25 0 0 0-7.414 0A.997.997 0 0 0 5 5.242v13a1 1 0 1 0 2 0v-4.553a3.248 3.248 0 0 1 4.293.26a5.25 5.25 0 0 0 7.414 0a1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924"/></svg>${priority}</div>` : '';
                        project = project ? `<div class="task-desc-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="#454545" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 21l7.794-4.5v-9M12 21l-7.794-4.5v-9M12 21v-9m7.794-4.5L12 3L4.206 7.5m15.588 0L12 12M4.206 7.5L12 12"/></svg><span class="task-project">${project}</span></div>`: '';
    
                        taskDiv.innerHTML = `
                        <input class="task-checkbox" type="checkbox">
                        <div class="task-main">
                            <h3 class="task-name">${name}</h3>
                            <div class="task-secondary">
                                ${dueDate} ${priority} ${project}
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg"width="3rem" height="3rem" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="#7c7c7c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg>
                        `;
                        tasksContainer.appendChild(taskDiv);
                });
            });
            resolve();
        });
    }    
    detailedTask = (name, description, dueDate, priority, project, subTasks) => {
        const detailedTask = document.querySelector('.detailed-task');

        const taskName = document.querySelector('.detailed-task__name');
        const taskDesc = document.querySelector('.detailed-task__desc');
        const taskDue = document.querySelector('.detailed-task__datepicker');
        const taskPriority = document.querySelector('.detailed-task__priority');
        const taskProject = document.querySelector('.project-select');

        detailedTask.setAttribute('old_name', name);
        detailedTask.setAttribute('old_project', project);
    
        taskName.textContent = name;
        taskDesc.textContent = description;
        taskDue.value = dueDate;
        taskPriority.value = priority;
        taskProject.value = project;

        detailedTask.style.display = 'block';
    }
    deleteTask = (name, project) => {
        const tasks = document.querySelectorAll(`.task`);
        tasks.forEach(task => {
            if(task.textContent.includes(name) && task.textContent.includes(project)) {
                task.remove();
            }
        });
    }
}