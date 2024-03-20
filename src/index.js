import './styles/reset.scss';
import './styles/index.scss';
//Classes
import { UI } from './js/UserInterface';
const UserInterface = new UI();
//Components
import { Datepicker } from './js/components/Datepicker';
import { ProjectAdd } from './js/components/ProjectAddBtn';
import { Prioritypicker } from './js/components/Prioritypicker';
import { NavigationSystem } from './js/components/Navigation';
import { DeleteButtons } from './js/components/ProjectDelete';
import { DateOptionsHandeler } from './js/components/DateOptions';
import { TaskAdd } from './js/components/TaskAdd';
import { DetailedTask } from './js/components/DetailedTask';

NavigationSystem();
ProjectAdd();
Datepicker();
DateOptionsHandeler();
Prioritypicker();
TaskAdd();
DeleteButtons();
DetailedTask();

document.addEventListener('DOMContentLoaded', () => {
    UserInterface.loadProjects();
});