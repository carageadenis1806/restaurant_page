import './style.css';
import { PageLoad,HomeContainer, ContactContainer, MenuContainer, menuTab, homeTab, contactTab, sectionContent, classSwitch} from './page-load';



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

    const middleButton = document.querySelector('.idButton');
    middleButton.addEventListener('click', () => {
    classSwitch();
})
})

const homeButton = document.querySelector('.homeButton');
homeButton.addEventListener('click', () => {
    homeTab();
    sectionContent();
   
})

const contactButton = document.querySelector('.contactButton');
contactButton.addEventListener('click', () => {
    homeTab();
    contactTab();
})




