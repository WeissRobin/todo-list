import '../../styles/deleteBtn.scss';

export const ProjectItem = (name, color) => {
    const li = document.createElement('li');
    li.classList.add('project-item');
    li.innerHTML = `
    <div class="project-color" style="background-color: ${color};"></div>
    <span class="project-name">${name}</span>
    <button class="project-delete-button">Smazat</button>
    `;
    
    return li;
}

export default { ProjectItem }