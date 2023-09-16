const buttons = document.querySelectorAll(".button"); // selwcting by class
const body = document.querySelector("body"); //selcting by tag name 

buttons.forEach(function (button) { //as it is a node list we can use for each, and this 
    button.addEventListener('click', function(e){
        if(e.target.classList.contains('red'))
        {
            body.style.backgroundColor = 'rgb(227, 58, 58)';
        }
        if(e.target.classList.contains('green'))
        {
            body.style.backgroundColor = 'rgb(56, 183, 56)';
        }
        if(e.target.classList.contains('cyan'))
        {
            body.style.backgroundColor = 'rgb(104, 193, 193)';
        }
        if(e.target.classList.contains('yellow'))
        {
            body.style.backgroundColor = 'rgb(202, 202, 68)';
        }
    
    })
})

