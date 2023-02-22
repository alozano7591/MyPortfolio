//Alfredo Lozano alozano7591@conestogac.on.ca  

var countDownTotal = 3;
var currentCount = 3;

//position variables
var startPosX = 175;
var startPosY = 350;
var posX;               //middle horizontal
var posY;               //bottom of page

var launchCountDown;

var flyID = null;


var rocketSectElem = document.getElementById("fullRocketSect");
var rocketElem = document.getElementById("rocketPiece");
var launchAreaW = document.getElementById("launchArea").offsetWidth;
var formElem = document.getElementById("formGridMain");

function ActivateActivators()
{
    rocketSectElem = document.getElementById("fullRocketSect");
    rocketElem = document.getElementById("rocketPiece");
    launchAreaW = document.getElementById("launchArea").offsetWidth;
    startPosX = (launchAreaW / 2) - 25;                                 //get center position of launch area for rocket

    formElem = document.getElementById("formGridMain");

    

    PrepRocket();
}

function PrepRocket()
{

    rocketElem.style.top = startPosY.toString() + 'px';
    rocketElem.style.left = startPosX.toString() + 'px';

    //document.getElementById("countDownText").textContent = countDownTotal.toString();
    
    document.getElementById("countDownText").textContent = "Waiting To" + '\n' + "Launch Contact";

}

function ResetLaunch()
{
    rocketElem.style.top = startPosY.toString() + 'px';
    rocketElem.style.left = startPosX.toString() + 'px';
}

function StartCountDown()
{

    clearInterval(flyID);                   //clearing just incase they're running
    clearInterval(launchCountDown);         //clearing just incase they're running

    document.getElementById("countDownText").textContent = countDownTotal.toString();

    rocketElem.style.visibility = "visible";
    currentCount = countDownTotal;

    launchCountDown = setInterval(countDown, 1000)

    
   /* posX = startPosX;*/
    posY = startPosY;

    ResetLaunch();

}

function countDown()
{
    currentCount -= 1;
    
    if(currentCount <= 0)
    {
        document.getElementById("countDownText").textContent = "BLAST OFF";
    
        clearInterval(flyID);                                   //clear interval just in case
        flyID = setInterval(flyRocket, countDownTotal);         //start interval of flying at 10ms intervals

        clearInterval(launchCountDown);
    }
    else
    {
        document.getElementById("countDownText").textContent = currentCount.toString();
    }
    
}

//send our boy flying
function flyRocket()
{

    if(posY == 50){
        rocketElem.style.visibility = "hidden";
        clearInterval(flyID)
        formElem.style.display = 'block';
        rocketSectElem.style.display = 'none';
    }

    posY--;
    
    rocketElem.style.top = posY.toString() + 'px';

}
