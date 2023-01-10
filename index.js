
var unput =document.querySelectorAll(".drum").length
for (var i=0; i<unput;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       var kay = this.textContent;
       makesaund(kay);
    //    butonAnimation(kay);
    
  });}
 

  function makesaund(kay){
      switch(kay) {
        case "w":
            var toml =new Audio("sounds/snare.mp3");
            toml.play();
            break;
  }  


  switch(kay) {
    case "a":
        var toml =new Audio("sounds/kick-bass.mp3");
        toml.play();
        eak;
}  


switch(kay) {
    case "s":
        var toml =new Audio("sounds/crash.mp3");
        toml.play();
        break;
}  

switch(kay) {
    case "d":
        var toml =new Audio("sounds/tom-4.mp3");
        toml.play();
        break;
}  


switch(kay) {
    case "j":
        var toml =new Audio("sounds/tom-4.mp3");
        toml.play();
        break;
}  

switch(kay) {
    case "k":
        var toml =new Audio("sounds/tom-4.mp3");
        toml.play();
        break;
}  


}


  

    

   




  
