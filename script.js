document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

//here i am going to display diffrent screens in the first parallax section

 let currentBackground = 1;
const backgrounds = ['img/home-background.jpg', 'img/first-project-in-the-background.jpg']; //here i am going to add other screens 

function changeBackground() {
    currentBackground = (currentBackground % backgrounds.length) + 1; // Loop through backgrounds
    const backgroundElement = document.getElementById('background');
    if (backgroundElement) {
        backgroundElement.style.backgroundImage = `url('${backgrounds[currentBackground - 1]}')`;
    } else {
        console.error("Element with ID 'background' not found.");
    }
}

// Change background every 5 seconds (5000 milliseconds)
 setInterval(changeBackground, 5000); 



//slide show in the project section
const slideContainer = document.querySelector('.Slide-1');
    const items = document.querySelectorAll('.Slide-1 .item');

    let currentIndex = 0;

    function showSlides() {
        items.forEach(item => item.style.display = 'none'); // Hide all items
        currentIndex = (currentIndex + 1) % items.length; // Cycle through items

        items[currentIndex].style.display = 'block'; // Show the current item
    }

    // Change slide every 5 seconds (5000 milliseconds)
    setInterval(showSlides, 5000);

    // Initial display
    showSlides();