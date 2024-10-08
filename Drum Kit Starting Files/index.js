var l = document.querySelectorAll(".drum").length;
for(var i = 0; i< l; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var button = this.innerHTML;
            sound(button);
            buttonAnimation(button);
        });
    }

for(var j = 0; j< l; j++)
    {    
        document.querySelectorAll(".drum")[j].addEventListener("keyup", (event)=>{
        sound(event.key);
        buttonAnimation(event.key);
        });
    }

function sound(h)
{
    switch (h) 
    {
        case "w":
            var w = new Audio("./sounds/crash.mp3");
            w.play();
            break;
        case "a":
            var w = new Audio("./sounds/kick-bass.mp3");
            w.play();
            break;
        case "s":
            var w = new Audio("./sounds/snare.mp3");
            w.play();
            break;
        case "d":
            var w = new Audio("./sounds/tom-1.mp3");
            w.play();
            break;
        case "j":
            var w = new Audio("./sounds/tom-2.mp3");
            w.play();
            break;
        case "k":
            var w = new Audio("./sounds/tom-3.mp3");
            w.play(); 
            break;
        case "l":
            var w = new Audio("./sounds/tom-4.mp3");
            w.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(bpress)
{
    var button1 = document.querySelector("." + bpress);
    button1.classList.toggle("pressed");
    setTimeout(function(){
        button1.classList.toggle("pressed");
    }, 100);
}
