window.onload = function(){

    setTimeout(function(){

        document.getElementById("loading").style.display="none";

        document.getElementById("galaxy").style.display="flex";

        startTyping();

    },3000);

};



function startTyping(){

    let text = "Mahi ❤️ You are the most special person in my life ✨";

    let i = 0;

    let speed = 80;


    function type(){

        if(i < text.length){

            document.getElementById("typing").innerHTML += text.charAt(i);

            i++;

            setTimeout(type,speed);

        }

    }


    type();

}




function startJourney(){

    document.getElementById("galaxy").style.display="none";

    document.getElementById("giftBox").style.display="flex";

}




function openGift(){

    document.getElementById("giftBox").style.display="none";

    document.getElementById("letter").style.display="block";

}




function complete(){

    alert("Our Journey Begins Forever ❤️");

}
