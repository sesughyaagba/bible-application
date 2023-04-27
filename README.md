# Bible Application
This is a simple Bible application that contains the books of the bible arranged alphabetically with 10 chapters and 20 verses of the same book across board. When the application is aunched, the following actions are executed.
* You are redirected to the homepage which have a scripture displayed from a random selection.
* The home page contains a 'read' button that takes the user into the application that displays the books of the Bible in Alphabetical order, sectioned according to testament i.e. Old testament and new testament.
* When a book is selected, the chapters are displayed.
* When a chapter is selected, all the verses are displayed. 

## The Run Through
I created two HTML files of tittles 'index' for the home page and 'bibleApp1.html' that displays the bible for thisapplication and two Javascript files 'bibleApp' and 'bibleApp2' that are linked to the home page and the content page respectively.

#### The Read
I added Added a "click" event listener to the button that takes the user to the next page using the window.location method that links to the second html file for the bible contents page. 

### The Randon Verse
An array of verses was created and I used the math.floor method the display a random verse from the array anytime the page is loaded.


##### This code is written in JavaScript and fetches two JSON files from the server, one for the Old Testament and one for the New Testament. It then creates a list of the books in each testament and displays them on the flexed page. When a user clicks on a book, the chapters of that book are displayed, and when a user clicks on a chapter, the content of that chapter is displayed.

### Step by step explanation of the second JS file 

* I created two(2) JSON files that holds the old and the new testament books and content 
*  Firstly, I fetched the JSON file for the Old Testament from the server  using the fetch() method.
*  Creates a const variable named "script" which holds an array of the keys in the data object using the Object.keys() method.
*  I defined a function 'function1' that takes two arguments: script and data.
*  Within "function1", I created a ul and body element to display the Old Testament content.
*  Creates a "h1" element and a "div" element with a class of "bible" using the document.createElement() method.
*  Loops through the "script" array using a for loop and creates an "li" element for each book in the array.
*  Added a "click" event listener to each "li" element using the addEventListener() method:When a user clicks on an "li" element, the function retrieves the chapters for that book from the "data" object and creates an "h4" element for each chapter using a nested for loop.
*  Adds a "click" event listener to each "h4" element: When a user clicks on an "h4" element, the function displays the content of that chapter in a "div" element with a class of "chapter".

*  Append the li elements to the ul, and the h1 and div elements to the body using the appendChild() method.
*  Repeated the same steps for the New Testament using a separate fetch() and 'function2'












