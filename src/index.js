import './style.css';
import { PageLoad,HomeContainer, ContactContainer, MenuContainer, menuTab, homeTab, contactTab} from './page-load';


/* Loading the page */
PageLoad();


/* Loading the containers of the tab-switching buttons*/
HomeContainer();
MenuContainer();
ContactContainer();

const menuButton = document.querySelector('.menuButton');
menuButton.addEventListener('click', () => {
    homeTab();
    menuTab();
})

const homeButton = document.querySelector('.homeButton');
homeButton.addEventListener('click', () => {
    homeTab();
})

const contactButton = document.querySelector('.contactButton');
contactButton.addEventListener('click', () => {
    homeTab();
    contactTab();
})



