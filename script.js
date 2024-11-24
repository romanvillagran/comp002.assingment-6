// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

// this function will be called when the form is submitted
function savePreferences(event){
    //this prevents the default form submission action to avoid reloading the page
    event.preventDefault();
    
    //get the user's name from input field
    const name = document.getElementById('name').value;
    
    //gets the select a background color from the color picker 
    const bgColor = document.getElementById('background-color').value;

    //gets the selected text color form the color picker
    const fgColor = document.getElementById('foreground-color').value;

    // this saves the user's preferences in localstorage
    localStorage.setItem('userName', name);//saves the name
    localStorage.setItem('bgColor', bgColor);//saves the background color
    localStorage.setItem('fgColor', fgColor);//saves the text color

    // notifies the user that their preferences have been saved
    alert('Your preferences have been saves')
}

//this will apply the saved preferences 
function applyPreferences(){    
    // this will retrieve the saved preferences from the localstorage
    const savedName = localStorage.getItem('userName');
    const savedBgColor = localStorage.getItem('bgColor');
    const savedFgColor = localStorage.getItem('fgColor');

    //this will display a greeting to the saved name
    if(savedName){
        document.getElementById('greeting').textContent = 'Hello, ${savedName}';
    }

    //if the background color was saved then it will be applied
    if(savedBgColor){
        document.body.style.backgroundColor = savedBgColor;
    }

    //if the text color was saved than this will apply the color to the text 
    if(savedFgColor){
        document.body.style.color = savedFgColor;
    }
}

// 
document.getElementById('preferences-form').addEventListener('submit', savePreferences)

//this calls the applypreferences function when the page loads
window.addEventListener('load', applyPreferences);