import { ProjectItem } from './ProjectItem';
import { UI } from '../UserInterface';

const UserInterface = new UI();

export const ProjectAdd = () => {
    const cancelBtn = document.getElementById('project-cancel');
    const addBtn = document.getElementById('project-add');
    const addProjectWindow = document.querySelector('.add-project-window');

    const dropBtn = document.getElementById('dropdown-button');
    const dropMenu = document.querySelector('.dropdown');
    const activeColor = document.querySelector('[data-active-color]');
    const colors = document.querySelectorAll('.dropdown-item');

    dropBtn.innerHTML = activeColor.innerHTML;
    activeColor.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#212529" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg>`;

    colors.forEach(color => {
    color.addEventListener('click', () => {
        colors.forEach(otherColor => {
            if (otherColor !== color) {
                otherColor.removeAttribute('data-active-color');
                if (otherColor.querySelector('svg')) {
                    otherColor.querySelector('svg').remove();
                }
            }
        });

        color.setAttribute('data-active-color', true);
        const activeColor = document.querySelector('[data-active-color]');
        dropBtn.innerHTML = activeColor.innerHTML;
        if (!activeColor.querySelector('svg')) {
            activeColor.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#212529" d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z"/></svg>`;
        }
    });
    });
    const addProject = document.querySelector('.add-project');
    addProject.addEventListener('click', () => {
        addProjectWindow.style.display = 'flex';
    });

    dropBtn.addEventListener('click', () => {
        dropMenu.style.display = (dropMenu.style.display === 'flex') ? 'none' : 'flex';
    });

    cancelBtn.addEventListener('click', () => {
        addProjectWindow.style.display = 'none';
    });

    addBtn.addEventListener('click', () => {
        const projectName = document.getElementById('project-name').value;
        const projectColor = document.querySelector('#dropdown-button span').getAttribute('data-color');

        if(projectName == '') {
            alert('Please fill up the project name');
        } else {
            UserInterface.addProject(projectName, projectColor);
        }
    });
}

export default { ProjectAdd }