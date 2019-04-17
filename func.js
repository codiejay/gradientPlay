let body  = $("body");

let gradientBox = $(".gradient");
let inputBox = $('.Firstinput');

let firstColor = $(gradientBox.children()[0]);
let secondColor = $(gradientBox.children()[2]);

let oneColor = true;
let doubleColor = false;

let firstInterval;

let gradientButton = $("#gradientButton");

let cancleButton = $(".gradient h1")

function hideGradient(){
    gradientBox.hide()
}


gradientBox.css("opacity", "0.6");
$(".input").css("opacity", "0.6")


window.onload = hideGradient;





    if(oneColor === true){
        firstInterval = setInterval(() => {
      let backColor = inputBox.val();
    body.css("background", "#"+backColor);

    if(inputBox.val() === ""){

        body.css("background", "#fff");
        


    }
}, 2);

}




// setInterval(function(){

//     if(oneColor == true){
// setInterval(() => {
    
//     if(firstColor.val() !== "" && secondColor.val() !== ""){
//         body.css("background", "#"+backColor);
//     }
   

    
// }, 1);

// }
// }, 1)



gradientButton.on("click", function(){
    oneColor = false;
    doubleColor = true;
    gradientBox.show(300);
    $(".input").hide(100);
    getMe();
    clearInterval( firstInterval)
   



})





function getMe(){
    if(doubleColor === true){
    console.log("Yeah")
    setInterval(() => {

if(firstColor.val() !== "" && secondColor.val() !== ""){

body.css("background", "linear-gradient("+"to top right" + ", #"+firstColor.val()+","+"#"+secondColor.val()+")" );

}


if(firstColor.val() === "" || secondColor.val() == ""){
    body.css("background", "#fff");
}




}, 1)
}
}


let cancelGradient = $(".hideGradient");

















// 234 905 557 9951
// +44 7985 488041
