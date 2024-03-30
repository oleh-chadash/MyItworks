// Please make the following changes to the HTML file while
// navigating the DOM.
// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your
// Note:
// On the next page, you have the HTML code
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8" />
// <meta name="viewport"
// content="width=device-width, initial-scale=1.0" />
// <title>Document</title>
// <script src="./script.js" defer></script>
// </head>
// <body>
// <ul>
// <li>title 1</li>
// <li class="start-here">title 2</li>
// <li>
// <ul>
// <li>sub title 1</li>
// <li>sub title 2</li>
// <li>sub title 3</li>
// </ul>
// </li>
// <li>title 3</li>
// </ul>
// <div>
// <p>Hello World!</p>
// </div>
// </body>
// </html>


// Step 1: Create a variable that holds the <li> element with the class “start-here”
let startHereLi = document.querySelector('.start-here');

// Step 2: Change the text from “title 2” to “main title”
startHereLi.textContent = 'main title';

// Step 3: Add another subtitle with the text “subtitle 4”
let newSubTitleLi = document.createElement('li');
newSubTitleLi.textContent = 'subtitle 4';

// Assuming the 'startHereLi' has a next sibling which is the <li> containing sub-titles
startHereLi.nextElementSibling.children[0].appendChild(newSubTitleLi);

// Step 4: Delete the last <li> element from the list
let ul = document.querySelector('ul');
ul.removeChild(ul.lastElementChild);

// Step 5: Change the <title> element text to “Master Of The Dom”
let title = document.querySelector('title');
title.textContent = 'Master Of The Dom';

// Step 6: Change the text of the <p> element to something else of your choice
let p = document.querySelector('p');
p.textContent = 'Welcome to the DOM manipulation example!';
