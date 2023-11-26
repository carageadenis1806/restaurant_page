 

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

    /* Footer */
    const footerText = document.createElement('div');

   
    /* Main section */
    const mottoContainer = document.createElement('div');
    const motto = document.createElement('div');

    /* Motto container divs */
    const leftContainer = document.createElement('div');
    const rightContainer = document.createElement('div');

    
    /* adding classes */
    leftContainer.classList.add('leftContainer');
    rightContainer.classList.add('rightContainer');
    mottoContainer.classList.add('mottoContainer');
    motto.classList.add('motto');
    header.classList.add('header');
    main.classList.add('main');
    section.classList.add('section')
    footer.classList.add('footer');
    restaurantTitle.classList.add('title');
    navbar.classList.add('navbar');
    footerText.classList.add('footerText');


    /* Appending childs */
    section.appendChild(mottoContainer);
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    main.appendChild(section)
    header.appendChild(restaurantTitle);
    header.appendChild(navbar);
    footer.appendChild(footerText);
    mottoContainer.appendChild(leftContainer);
    mottoContainer.appendChild(rightContainer);
    rightContainer.appendChild(motto);

    /* text contents */
    restaurantTitle.textContent = 'Pit Stop Bistro';
    footer.textContent = '@CarageaDenis'
    motto.textContent = 'Savor the Stop, Taste the Adventure.';


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

/* TABS MODULES */

/* Menu tab module */
const menuTab = () => {
    const content = document.querySelector('.section');
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');

    /* menu items */
    const sandwich = document.createElement('div');
    sandwich.classList.add('menuItem');
    menuContent.appendChild(sandwich);
    sandwich.setAttribute('id', 'sandwichImg');

    const burger = document.createElement('div');
    burger.classList.add('menuItem');
    menuContent.appendChild(burger);
    burger.setAttribute('id', 'burgerImg');
    

    const salad = document.createElement('div');
    salad.classList.add('menuItem');
    menuContent.appendChild(salad);
    salad.setAttribute('id', 'saladImg');
   

    const pizza = document.createElement('div');
    pizza.classList.add('menuItem');
    menuContent.appendChild(pizza);
    pizza.setAttribute('id', 'pizzaImg');
   
    const pasta = document.createElement('div');
    pasta.classList.add('menuItem');
    menuContent.appendChild(pasta);
    pasta.setAttribute('id', 'pastaImg');
    

    const pancakes = document.createElement('div');
    pancakes.classList.add('menuItem');
    menuContent.appendChild(pancakes);
    content.appendChild(menuContent);
    pancakes.setAttribute('id', 'pancakesImg');

    /* button for switching from img to details */
    const idButton = document.createElement('button');
    idButton.classList.add('idButton');
    idButton.textContent = 'See more details';
    content.appendChild(idButton);

}


/* Contact tab module */
const contactTab = () => {
    const section = document.querySelector('.section');
    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');

   section.appendChild(contactContent);

   const contactContainer = document.createElement('div');
   contactContainer.classList.add('contactContainer');
   contactContainer.textContent = 'contact info';

   contactContent.appendChild(contactContainer);

   const phone = document.createElement('div');
   phone.classList.add('phone');
   phone.textContent = 'Phone: +40123456789'

   const address = document.createElement('div');
   address.classList.add('address');
   address.textContent = 'Address: Calea Imaginara nr. 10, Timisoara, Timis.';

   contactContainer.appendChild(phone);
   contactContainer.appendChild(address);

   const imgContainer = document.createElement('div');
   imgContainer.classList.add('imgContainer');

   const facebook = document.createElement('div');
   facebook.classList.add('social');
   facebook.setAttribute('id', 'facebook');

   const instagram = document.createElement('div');
   instagram.classList.add('social');
   instagram.setAttribute('id', 'instagram');

   const tiktok = document.createElement('div');
   tiktok.classList.add('social');
   tiktok.setAttribute('id', 'tiktok');

   imgContainer.appendChild(facebook);
   imgContainer.appendChild(instagram);
   imgContainer.appendChild(tiktok);

   contactContainer.appendChild(imgContainer);
}


/* Home module */

const homeTab = () => {
    const section = document.querySelector('.section');
    section.replaceChildren();

}

let isInitial = true;

const classSwitch = () => {



    
    const section = document.querySelector('.section');
    const grid = document.querySelector('.menuContent');
 

    if(isInitial) {

        
        
        if(grid){
            grid.replaceChildren();
            grid.remove();
        }else {
            console.log('lala');
        }


        const newGrid = document.createElement('div');
        newGrid.classList.add('newGrid');

                const newSandwich = document.createElement('div');
                newSandwich.classList.add('newGridItems');
                newGrid.appendChild(newSandwich);
                newSandwich.setAttribute('id', 'newSandwichId');
                newSandwich.textContent = 'Sandwich with cheese, ham, mayo, onions and 300g of fries with our homemade sauce.';

                const newBurger = document.createElement('div');
                newBurger.classList.add('newGridItems');
                newGrid.appendChild(newBurger);
                newBurger.setAttribute('id', 'newBurgerId');
                newBurger.textContent = 'Indulge in our classic burger: seasoned beef, melted cheese, fresh veggies, and condiments on a soft bun.';

                

                const newSalad = document.createElement('div');
                newSalad.classList.add('newGridItems');
                newGrid.appendChild(newSalad);
                newSalad.setAttribute('id', 'newSaladId');
                newSalad.textContent = 'Delight in our signature salad: vibrant greens, ripe tomatoes, crisp cucumbers, and zesty dressing, a refreshing medley on your plate.';

            

                const newPizza = document.createElement('div');
                newPizza.classList.add('newGridItems');
                newGrid.appendChild(newPizza);
                newPizza.setAttribute('id', 'newPizzaId');
                newPizza.textContent = 'Savor our exquisite pizza: a perfect blend of savory cheese, flavorful sauce, and your choice of delectable toppings on a golden crust.';

            
                const newPasta = document.createElement('div');
                newPasta.classList.add('newGridItems');
                newGrid.appendChild(newPasta);
                newPasta.setAttribute('id', 'newPastaId');
                newPasta.textContent = ' Experience our pasta perfection: al dente noodles generously coated in rich, savory sauce, topped with fresh herbs and grated Parmesan.';

                

                const newPancakes = document.createElement('div');
                newPancakes.classList.add('newGridItems');
                newGrid.appendChild(newPancakes);
                newPancakes.setAttribute('id', 'newPancakes');
                newPancakes.textContent = 'Try the heavenly pancakes with fluffy stacks, maple syrup, a dollop of butter, and a sprinkle of powdered sugar.';

        section.appendChild(newGrid);
        isInitial = !isInitial;
        console.log(isInitial);

        /*
        const allElements = document.querySelectorAll('.menuItem');
        
        allElements.forEach((el) => {
            el.classList.remove('menuItem');

            el.classList.add('menuItemText');
        })
        */
     
    }else{

        const newGrid = document.querySelector('.newGrid')
        newGrid.replaceChildren();
        newGrid.remove();

        const content = document.querySelector('.section');
        const menuContent = document.createElement('div');
        menuContent.classList.add('menuContent');
    

        const sandwich = document.createElement('div');
        sandwich.classList.add('menuItem');
        menuContent.appendChild(sandwich);
        sandwich.setAttribute('id', 'sandwichImg');
    
        const burger = document.createElement('div');
        burger.classList.add('menuItem');
        menuContent.appendChild(burger);
        burger.setAttribute('id', 'burgerImg');
        
    
        const salad = document.createElement('div');
        salad.classList.add('menuItem');
        menuContent.appendChild(salad);
        salad.setAttribute('id', 'saladImg');
       
    
        const pizza = document.createElement('div');
        pizza.classList.add('menuItem');
        menuContent.appendChild(pizza);
        pizza.setAttribute('id', 'pizzaImg');
       
        const pasta = document.createElement('div');
        pasta.classList.add('menuItem');
        menuContent.appendChild(pasta);
        pasta.setAttribute('id', 'pastaImg');
        
    
        const pancakes = document.createElement('div');
        pancakes.classList.add('menuItem');
        menuContent.appendChild(pancakes);
        content.appendChild(menuContent);
        pancakes.setAttribute('id', 'pancakesImg');

        isInitial = !isInitial;
    
    }



}




/* motto from home page*/
const sectionContent = () => {
    const section = document.querySelector('.section');
     /* Main section */
     const mottoContainer = document.createElement('div');
     const motto = document.createElement('div');
 
     /* Motto container divs */
     const leftContainer = document.createElement('div');
     const rightContainer = document.createElement('div');

     leftContainer.classList.add('leftContainer');
    rightContainer.classList.add('rightContainer');
    mottoContainer.classList.add('mottoContainer');
    motto.classList.add('motto');


    section.appendChild(mottoContainer);
    mottoContainer.appendChild(leftContainer);
    mottoContainer.appendChild(rightContainer);
    rightContainer.appendChild(motto);

    motto.textContent = 'Savor the Stop, Taste the Adventure.';
}


export { PageLoad, MenuContainer, HomeContainer, ContactContainer, menuTab, homeTab, contactTab, sectionContent, classSwitch, isInitial};