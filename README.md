# Bible Application

##### This code is written in JavaScript and fetches two JSON files from the server, one for the Old Testament and one for the New Testament. It then creates a list of the books in each testament and displays them on the flexed page. When a user clicks on a book, the chapters of that book are displayed, and when a user clicks on a chapter, the content of that chapter is displayed.

### Step by step explanation of the second JS file 

* I created two(2) JSON files that holds the old and the new testament books and content 
*  Firstly, I fetched the JSON file for the Old Testament from the server  using the fetch() method.
*  Creates a const variable named "script" which holds an array of the keys in the data object using the Object.keys() method.
*  I defined a function 'function1' that takes two arguments: script and data.
*  Within "function1", I created a ul and body element to display the Old Testament content.
*  Creates a "h1" element and a "div" element with a class of "bible" using the document.createElement() method.
*  Loops through the "script" array using a for loop and creates an "li" element for each book in the array.
*  Adds a "click" event listener to each "li" element using the addEventListener() method:When a user clicks on an "li" element, the function retrieves the chapters for that book from the "data" object and creates an "h4" element for each chapter using a nested for loop.
*  Adds a "click" event listener to each "h4" element: When a user clicks on an "h4" element, the function displays the content of that chapter in a "div" element with a class of "chapter".

*  Append the li elements to the ul, and the h1 and div elements to the body using the appendChild() method.
*  Repeated the same steps for the New Testament using a separate fetch() and 'function2'












