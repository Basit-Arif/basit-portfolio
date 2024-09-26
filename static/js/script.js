$(document).ready(function() {
    var words = ["Data Scientist", "AI Expert", "Consultant", "Innovator"];
    var currentIndex = 0;

    function changeWord() {
        $('#changing-text').fadeOut(function() {
            $(this).text(words[currentIndex]).fadeIn();
        });
        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(changeWord, 2000);
    console.log("hello")

   let index = 0;
    const totalItems = $('.technology-item').length; // Get total number of items
    const itemsToShow = 4; // Number of items to show at once

    // Clone the first few items for smooth transition
    for (let i = 0; i < itemsToShow; i++) {
        $('.slider').append($('.technology-item').eq(i).clone());
    }

    function slide() {
        index++; // Increment index to show next items
        const slideWidth = $('.technology-item').outerWidth(); // Get the width of a single item

        // Move the slider
        $('.slider').css('transform', 'translateX(-' + (index * slideWidth) + 'px)');

        // Reset the position when it reaches the end
        if (index >= totalItems) {
            index = 0;
            setTimeout(() => {
                $('.slider').css('transition', 'none'); // Disable transition
                $('.slider').css('transform', 'translateX(0)'); // Reset to first position
                index = 1; // Set index to 1 for the next transition
                setTimeout(() => {
                    $('.slider').css('transition', 'transform 0.5s ease'); // Re-enable transition
                }, 50);
            }, 500); // Wait for the slide duration
        }
    }
    

    // Set an interval to change slides every 3 seconds
    setInterval(slide, 3000);
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
