let count = 1; // this is a variable. It stores a number with value 1

// this is a function that renders the image in your html 
// we call this function everytime we change the count to re-render with the new pokemon image
function renderImage(){
    // document is a global variable. It consists of the entire html structure in your web page
    // we use the `getElementById` method to target an element with that specific id
    // so the line below will give us the element `<div id="pokemon"></div>`
    let element = document.getElementById('pokemon')

    // the innerHTML property helps us update the HTML contents of that element
    element.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg"/>`
}

let minusElement = document.getElementById('prev')

// `onClick` is an event listener that is triggered whenever we click on the element
minusElement.onclick = function(){

    // an `if` condition run the line of code within the {} brackets if the condition witin the () resuts in a true
    if (count > 1){
        count = count - 1;
        renderImage()
    }
}

let plusElement = document.getElementById('next')
plusElement.onclick = function(){
    if (count < 650){
        count = count + 1;
        renderImage()
    }
}

// this is how we execute a function
renderImage();
