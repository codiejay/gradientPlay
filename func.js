// The boxes to be colored AKA- Mothers
let motherSolid = $("#motherSolid");
let motherGradient = $("#motherGradient");

// The input Boxes whoes values are of essense. 
let solidGradient = $("#Firstinput")
let firstGradient = $("#gradientOne");
let secondGradient = $("#gradientTwo");

//The buttons, gradient and solid
let gotToSolidButton = $("#solidButton")
let goToGradientButton = $("#gradientButton")

// Hide the gradient Option

function hideGradientBox(){
   motherGradient.hide();
}

window.onload = hideGradientBox;




// Check every 1 of every 1ms for the value of the input box (For the solid Color)

setInterval(function(){
    if(solidGradient.val() !== ""){

        if(solidGradient.val()[0] === "#"){

            let formatedSolidNum = solidGradient.val().slice(1);
            motherSolid.css({"background": "#"+formatedSolidNum});
        }

        else{
            motherSolid.css({"background": "#"+solidGradient.val()});
        }

        $(".addressBar").attr("content", "#"+solidGradient.val());

        
   

    }

    else{
        motherSolid.css({"background": "#fff"});
        $(".addressBar").attr("content", "#e5058f");

    }

}, 1)


// Check every 1 of every 1ms for the value of the input box (For the Gradient)

setInterval(function(){

    let fomartedFirstGradient;
    let formatedSecondGradient

    if(firstGradient.val() !== "" && secondGradient.val()  !== ""){

        if(firstGradient.val()[0] === "#"){

            fomartedFirstGradient = firstGradient.val().slice(1);

        }

        else{
            fomartedFirstGradient = firstGradient.val();
        }


        if(secondGradient.val()[0] === "#"){
           formatedSecondGradient = secondGradient.val().slice(1);
        }

        else{
            formatedSecondGradient = secondGradient.val();
        }

        motherGradient.css({"background": "linear-gradient( to top right , " + "#" + fomartedFirstGradient + "," + "#" + formatedSecondGradient + ")"})
        $(".addressBar").attr("content", "#"+fomartedFirstGradient);
    }

    else{
        motherGradient.css({"background": "#fff"})
        $(".addressBar").attr("content", "#e5058f");
    }
}, 1)




// show the gradient when the G BUTTON  is CLICKED

goToGradientButton.on("click", function(){
    motherGradient.show(220);
    motherSolid.hide(200)
})



gotToSolidButton.on("click", function () {
    motherGradient.hide(200);
    motherSolid.show(220)
  })



