export class Todo {
    constructor(name, description, dueDate, priority, project = 'Other') {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.subTasks = [];
    }

    changeName = (name) => {
        this.name = name;
    }

    changeDesc = (description) => {
        this.description = description;
    }

    changeDueDate = (dueDate) => {
        this.dueDate = dueDate;
    }

    changePriority = (priority) => {
        this.priority = priority;
    }
}

