// Basic structure

/*(function() {
    // Declare private vars and functions

    // return {
        // Declare public vars and functions
    }

}) ();*/

// STANDARD MODULE PATTERN
const UICtrl = (function() {
    let text = 'Hello word';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }
    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();
// UICtrl.changeText();
//console.log(UICtrl.text);





