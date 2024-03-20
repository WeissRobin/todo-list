export const NavigationSystem = () => {
    const moduleMappings = {
        all: () => import('../tabs/all'),
        upcoming: () => import('../tabs/upcoming'),
        today: () => import('../tabs/today'),
        calendar: () => import('../tabs/calendar'),
        sticky: () => import('../tabs/sticky'),
    };
    
    async function loadModuleAndRenderContent(routing) {
        try {
            const moduleImport = moduleMappings[routing];
            if (moduleImport) {
                const module = await moduleImport();
                module.renderContent();
            } else {
                new Error("Modul nenalezen");
            }
        } catch (error) {
            console.error('Chyba při načítání modulu:', error);
        }
    }

    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', async () => {
            navButtons.forEach(btn => btn.removeAttribute('data-active'));
            button.setAttribute('data-active', true);
    
            const routing = button.getAttribute('data-content');
            await loadModuleAndRenderContent(routing);
        });
    });
    
    document.addEventListener('DOMContentLoaded', async () => {
        const activeBtn = document.querySelector('[data-active="true"]');
        const routing = activeBtn.getAttribute('data-content');
        await loadModuleAndRenderContent(routing);
    });
}

export default { NavigationSystem }