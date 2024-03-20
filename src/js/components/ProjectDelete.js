import { UI } from "../UserInterface";
import { Storage } from "../Storage";
const UserInterface = new UI();
const newStorage = new Storage();

export const DeleteButtons = () => {
    setTimeout(() => {
        //Delete buttons handeling
        const projectItems = document.querySelectorAll('#project-list li');
        projectItems.forEach(project => {
            project.addEventListener('mousedown', e => {
                if (e.button === 2 && e.target.classList.contains("project-name")) {
                    e.preventDefault();
                    const deleteBtns = document.querySelectorAll('.project-delete-button');
                    deleteBtns.forEach(btn => btn.style.display = 'none');
    
                    const deleteBtn = e.target.nextElementSibling;
                    deleteBtn.style.display = 'block';
                }
            });
            project.addEventListener('contextmenu', event => {
                event.preventDefault();
            });
        });
    
        //Delete buttons handeling
        document.addEventListener('click', e => {
            if (e.target.classList.contains('project-delete-button')) {
                return;
            }
            deleteBtns.forEach(btn => btn.style.display = 'none');
        });
    
        //Delete buttons
        const deleteBtns = document.querySelectorAll('.project-delete-button');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', e => {
                const projectName = e.target.previousElementSibling.textContent;
                const projectItemUI = e.target.parentElement;
                
                UserInterface.deleteProject(projectItemUI, projectName);
            });
        });
    }, 0); 
}

export default { DeleteButtons }