/* Page Load module */
const PageLoad = () => {
    /* Main structure */
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    const main = document.createElement('div');
    const section = document.createElement('section');
    const footer = document.createElement('div');

    /* Header */
    const restaurantTitle = document.createElement('div');
    const navbar = document.createElement('div');


    header.classList.add('header');
    main.classList.add('main');
    section.classList.add('section')
    footer.classList.add('footer');
    restaurantTitle.classList.add('title');
    navbar.classList.add('navbar');


    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    main.appendChild(section)

    header.appendChild(restaurantTitle);
    header.appendChild(navbar);


    restaurantTitle.textContent = 'Pit Stop Bistro';
}

/* Menu button container module */
const MenuContainer = () => {
    const navbar = document.querySelector('.navbar');
    const container = document.createElement('div');
    container.classList.add('navbarContainer');
    navbar.appendChild(container);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menuButton');
    container.appendChild(menuButton);
}


/* Home button container module */
const HomeContainer = () => {
    const navbar = document.querySelector('.navbar');
    const container = document.createElement('div');
    container.classList.add('navbarContainer');
    navbar.appendChild(container);

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('homeButton');
    container.appendChild(homeButton);
}


/* Contact button container module */
const ContactContainer = () => {
    const navbar = document.querySelector('.navbar');
    const container = document.createElement('div');
    container.classList.add('navbarContainer');
    navbar.appendChild(container);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contactButton');
    container.appendChild(contactButton);
} 

/* Menu tab module */

const menuTab = () => {
    const content = document.querySelector('.section');
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

    /* menu items */
    const sandwich = document.createElement('div');
    sandwich.textContent = 'this is a menu item';
    menuContent.appendChild(sandwich);

    const burger = document.createElement('div');
    burger.textContent = 'this is another menu item';
    menuContent.appendChild(burger);
    content.appendChild(menuContent);

}


/* Contact tab module */
const contactTab = () => {
    const section = document.querySelector('.section');
    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';
    contactContent.appendChild(contactTitle);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Phone: 23231231';
    contactContent.appendChild(contactInfo);

    section.appendChild(contactContent);
}


/* Home module */

const homeTab = () => {
    const section = document.querySelector('.section');
    section.replaceChildren();
}


export { PageLoad, MenuContainer, HomeContainer, ContactContainer, menuTab, homeTab, contactTab};