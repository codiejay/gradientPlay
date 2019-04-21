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
    motherSolid.css({"background": "#"+solidGradient.val()});

    }

    else{
        motherSolid.css({"background": "#fff"});
    }

}, 1)


// Check every 1 of every 1ms for the value of the input box (For the Gradient)

setInterval(function(){

    if(firstGradient.val() !== "" && secondGradient.val()  !== ""){
        motherGradient.css({"background": "linear-gradient( to top right , " + "#" +firstGradient.val() + "," + "#" + secondGradient.val() + ")"})
    }

    else{
        motherGradient.css({"background": "#fff"})
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



