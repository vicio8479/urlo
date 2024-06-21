document.addEventListener('DOMContentLoaded', () => {
    const cocktailNames = document.querySelectorAll('.cocktail-name');
    const cocktailButtons = document.querySelectorAll('.cocktail-button');

    const showDescription = (element) => {
        const description = element.nextElementSibling;
        description.textContent = element.getAttribute('data-description');
        description.classList.remove('hide');
        description.classList.add('show');
        setTimeout(() => {
            description.classList.remove('show');
            description.classList.add('hide');
        }, 5000);
    };

    cocktailNames.forEach(name => {
        name.addEventListener('click', () => showDescription(name));
    });

    cocktailButtons.forEach(button => {
        button.addEventListener('click', () => {
            showDescription(button);

            // Restore button to initial position after hiding the description
            setTimeout(() => {
                const parent = button.parentNode;
                parent.appendChild(button);
                parent.appendChild(button.nextElementSibling);
            }, 5000);
          
        });
    });
});
function handleButtonClick(buttonId, containerId) {
    const button = document.getElementById(buttonId);
    const namesContainer = document.getElementById(containerId);

    button.addEventListener('click', function() {
        // Toggle the 'show' class on namesContainer
        namesContainer.classList.toggle('show');
      
    });
}

handleButtonClick('buttonInghilterra', 'namesContainerInghilterra');
handleButtonClick('buttonScozia', 'namesContainerScozia');
handleButtonClick('buttonSicilia', 'namesContainerSicilia');
handleButtonClick('buttonFrancia', 'namesContainerFrancia');
handleButtonClick('buttonSpagna', 'namesContainerSpagna');
handleButtonClick('buttonGiappone', 'namesContainerGiappone');
handleButtonClick('buttonGermania', 'namesContainerGermania');
handleButtonClick('buttonItalia', 'namesContainerItalia');
handleButtonClick('buttonPortogallo', 'namesContainerPortogallo');
document.getElementById('toggleMenu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
document.getElementById('toggleCaffetteria').addEventListener('click', function() {
    toggleMenu('menuCaffetteria');
});

document.getElementById('toggleWhisky').addEventListener('click', function() {
    toggleMenu('menuWhisky');
});

document.getElementById('toggleRum').addEventListener('click', function() {
    toggleMenu('menuRum');
});

document.getElementById('toggleGrappe').addEventListener('click', function() {
    toggleMenu('menuGrappe');
});

document.getElementById('toggleDigestivi').addEventListener('click', function() {
    toggleMenu('menuDigestivi');
});

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    function toggleMenu(menuId) {
        const menu = document.getElementById(menuId);
        console.log(`Toggling menu: ${menuId}`);
        menu.classList.toggle('hidden');
    }
    

    document.getElementById('toggleCaffetteria').addEventListener('click', () => {
        toggleMenu('menuCaffetteria');
    });

    document.getElementById('toggleWhisky').addEventListener('click', () => {
        toggleMenu('menuWhisky');
    });

    document.getElementById('toggleRum').addEventListener('click', () => {
        toggleMenu('menuRum');
    });

    document.getElementById('toggleGrappe').addEventListener('click', () => {
        toggleMenu('menuGrappe');
    });

    document.getElementById('toggleDigestivi').addEventListener('click', () => {
        toggleMenu('menuDigestivi');
    });

});
document.getElementById('toggleMenuBirraVini').addEventListener('click', () => {
        console.log('Birra & Vini button clicked');
        toggleMenu('menuBirraVini');
    });

    document.getElementById('toggleMenuAnalcoliche').addEventListener('click', () => {
        console.log('Bevande Analcoliche button clicked');
        toggleMenu('menuAnalcoliche');
    });






