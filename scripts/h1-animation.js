// // Get the h1 elemedsc
// const h1El = document.querySelector('h1');

// // h1El.classList.add('totes-at-the-end');

// // // Get the third list item
// const thirdListItem = document.querySelector('li:nth-child(3)');

// // var first = h1El.getBoundingClientRect();

// var last = thirdListItem.getBoundingClientRect();

// // var invert = first.top - last.top;

// // h1El.style.transform = `translateY(${invert}px)`;


// const firstPosition = h1El.getBoundingClientRect();
// h1El.classList.add('active');

// const lastPosition = thirdListItem.getBoundingClientRect();
// const transformValues = {
//     top: firstPosition.top - lastPosition.top,
//     left: firstPosition.left - lastPosition.left,
//     width: lastPosition.width / firstPosition.width,
//     height: lastPosition.height / firstPosition.height
// };

// // console.log(last);

// h1El.style.transform = `translate(${transformValues.left}px, ${transformValues.top}px) scale(${transformValues.width}, ${transformValues.height})`;

// requestAnimationFrame(() => {
//     h1El.classList.add('enable-transition');
//     h1El.style.transform = '';
// });

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// https://aerotwist.com/blog/flip-your-animations/

document.addEventListener('DOMContentLoaded', () => {
    // Get the h1 element
    const h1El = document.querySelector('h1');
    const thirdListItem = document.querySelector('li:nth-of-type(3)');

    // Get the bounding rectangles
    const h1Rect = h1El.getBoundingClientRect();
    const targetRect = thirdListItem.getBoundingClientRect();

    // Calculate the differences
    const deltaX = targetRect.left - h1Rect.left;
    const deltaY = targetRect.top - h1Rect.top;

    // Set initial position
    h1El.style.position = 'absolute'; // Make it absolute to move freely
    h1El.style.transition = 'transform 1s ease'; // Set transition for smooth animation
    h1El.style.transform = `translate(${deltaX}px, ${deltaY}px)`; // Move to the target position

    // Optional: Add a class for additional styles if needed
    h1El.classList.add('animated');
});