// Select all <li> elements inside the <ul>
const listItems = document.querySelectorAll("ul li");
const OllistItems = document.querySelectorAll("ol li");

listItems.forEach((li) => {
    li.addEventListener("click", function () {
        const scrollY = window.scrollY;

        // Check if the scroll position is between 100vh and 200vh
        if (scrollY >= window.innerHeight && scrollY <= 2 * window.innerHeight) {
            // If the clicked item doesn't have the "clicked" class, add it
            if (!li.classList.contains("clicked")) {
                // Remove the "clicked" class from all list items
                listItems.forEach(item => item.classList.remove("clicked"));

                // Add the "clicked" class to the clicked <li>
                li.classList.add("clicked");
            } else {
                // If the item already has the "clicked" class, remove it
                li.classList.remove("clicked");
            }
        }
    });
});

// Dit moet met css kunnen maar kom er maar niet uit
// Remove the "clicked" class when the scroll position is below 100vh
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;

    // If scroll position is below 100vh, remove the "clicked" class from all list items
    if (scrollY < window.innerHeight) {
        listItems.forEach(item => item.classList.remove("clicked"));
    }
});
