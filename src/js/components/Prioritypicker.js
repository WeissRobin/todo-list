export const Prioritypicker = () => {
    const prioritySelect = document.querySelector('.priority');
    const prioritySpec = document.getElementById('priority');
    const priorities = document.querySelectorAll('.priority-option');

    prioritySelect.addEventListener('click', () => {
        prioritySpec.style.display = (prioritySpec.style.display === 'none') ? 'block' : 'none';
    });
    
    priorities.forEach(priority => priority.addEventListener('click', () => {
        prioritySelect.innerHTML = priority.innerHTML;
    }));
}

export default { Prioritypicker }