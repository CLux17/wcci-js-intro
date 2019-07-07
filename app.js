// Make h1 in header have different text
var head = document.getElementById('head');
head.innerText = 'Hello World';

// Make nav ul li elements get larger when you hover over them
var listItems = document.querySelectorAll('li');
console.log(listItems);

listItems.forEach(element => {
    
    element.addEventListener('mouseover', function(){
        element.style.fontSize = '50px';
    })
//turn off by using mouseleave instead of mouseover
})


// Add another element to the main element

var main = document.getElementById('main');
var para = document.createElement('p');
para.innerText = 'I am a new paragraph!! HEAR ME ROAR!!!';
main.appendChild(para);
//above places at end.
//this place at start
main.prepend(para);


// replace all instances of <p> in html main.innerHTML = '<p>I am a new paragraph! HERE ME ROAR!!!!</p>';
const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function(){
    footer.style.backgroundColor = 'green';
})


// Dynamically change the color of the background on the footer when the user hovers over it
var paragraphs = main.querySelectorAll('p');

paragraphs.forEach(element => {
element.addEventListener('click', function(){
    element.style.fontSize = '30px'
});
});




// Change the font size of the paragraphs in the main element when the user clicks them

// Change the text in the footer when the user clicks it
footer.addEventListener('click',function(){
    footer.innerText = "whatever You want";
});


// Remove the h1 element in the header

//removed current header
head.remove();


// Put something in the place of the h1 in the header
var header = document.getElementById('header');

var newHeader = document.createElement('h1');

newHeader.innerText = "I'm Brand New";

header.prepend(newHeader);
// Change the text in one of the paragraph tags in the main element
paragraphs[2].innerText = 'Corey is not listening.'



// Change the size of the header element to 200px using grid syntax
header.style.resize = '200px';




