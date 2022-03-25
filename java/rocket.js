//Alfredo Lozano alozano7591@conestogac.on.ca  

var countDownTotal = 10;
var currentCount = 10;

//position variables
var startPosX = 175;
var startPosY = 350;
var posX;               //middle horizontal
var posY;               //bottom of page

var launchCountDown;

var flyID = null;

var rocketElem = document.getElementById("rocketPiece");


function ActivateActivators()
{
    rocketElem = document.getElementById("rocketPiece");
    PrepRocket();
}

function PrepRocket()
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

    posX = startPosX;
    posY = startPosY;

    PrepRocket();

}

function countDown()
{
    currentCount -= 1;
    
    if(currentCount <= 0)
    {
        document.getElementById("countDownText").textContent = "BLAST OFF";
    
        clearInterval(flyID);                           //clear interval just in case
        flyID = setInterval(flyRocket, 10);             //start interval of flying at 10ms intervals

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
        
    }

    posY--;
    
    rocketElem.style.top = posY.toString() + 'px';

}
