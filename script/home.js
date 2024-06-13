$(document).ready(function() {
    // Initialize the slide index to the first slide
    let slideIndex = 1;
    showDivs(slideIndex); // Display the first slide

    // Function to increment the slide index and show the corresponding slide
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    // Function to set the slide index to the specific slide and show it
    function currentDiv(n) {
        showDivs(slideIndex = n);
    }

    // Function to show the slide corresponding to the current slide index
    function showDivs(n) {
        // Get all the slides and dots
        const slides = $(".mySlides");
        const dots = $(".dot");

        // If the slide index is greater than the number of slides, reset to the first slide
        if (n > slides.length) { slideIndex = 1; }

        // If the slide index is less than 1, set to the last slide
        if (n < 1) { slideIndex = slides.length; }

        // Hide all slides
        slides.css("display", "none");

        // Remove the active class from all dots
        dots.removeClass("active");

        // Display the current slide
        slides.eq(slideIndex - 1).css("display", "block");

        // Add the active class to the current dot
        dots.eq(slideIndex - 1).addClass("active");
    }

    // Event listener for the next button to go to the next slide
    $(".next").click(function() {
        plusDivs(1);
    });

    // Event listener for the dots to go to the corresponding slide
    $(".dot").click(function() {
        // Get the index of the clicked dot and set the current slide to that index
        const index = $(".dot").index(this) + 1;
        currentDiv(index);
    });
});

