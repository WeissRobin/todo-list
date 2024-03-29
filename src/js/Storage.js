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
    addTask = (todo, project) => {
        const obj = this.getProject(project);
        console.log(todo, project, obj);
        obj.tasks.push(todo);
        this.removeProject(project);
        localStorage.setItem(project, JSON.stringify(obj));
    }
    loadTask = (name, project) => {
        return this.getProject(project).tasks.filter(task => task.name === name)[0];
    }
    deleteTask = (name, project) => {
        const obj = this.getProject(project);
        const allTasks = this.getProject(project).tasks.filter(task => task.name !== name);
        this.removeProject(project);
        obj.tasks = allTasks;
        localStorage.setItem(project, JSON.stringify(obj));
    }
    updateTask = (taskOld, taskNew, projectOld, projectNew) => {
        this.deleteTask(taskOld, projectOld);
        this.addTask(taskNew, projectNew);
    }
}