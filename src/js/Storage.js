import { Project } from './Project';

export class Storage {
    addProject = (projectName, projectColor) => {
        const createdProject = new Project(projectName, projectColor);
        localStorage.setItem(projectName, JSON.stringify(createdProject));
    }
    getProject = (projectName) => {
        return JSON.parse(localStorage.getItem(projectName));
    }
    getAllProjects = () => {
        let allProjects = [];
        let keys = Object.keys(localStorage);
        keys.forEach(key => {
            allProjects.push(JSON.parse(localStorage.getItem(key)));
        });
        return allProjects;
    }
    removeProject = (projectName) => {
        localStorage.removeItem(projectName);
    }
    addTask = (project, todo) => {
        const obj = this.getProject(project);
        obj.tasks.push(todo);
        this.removeProject(project);
        localStorage.setItem(project, JSON.stringify(obj));
    }
}