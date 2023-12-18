
//для-блока-инфы

var questionDiv = document.getElementById("questionDiv");
var infoWindow = document.getElementById("infoWindow");

 
infoWindow.style.display = "none";

 
questionDiv.addEventListener("mouseover", function() {
  infoWindow.style.display = "block";
});   

//




 //проверка-input


function myFunction() {
  var input = document.querySelector(".user-box-input").value;
  var button = document.querySelector(".login-box-button");
  var userBox = document.querySelector(".user-box");

  if (input.length === 0 || input.includes(" ")) {
 
    userBox.style.animation = "shake 0.5s";
    button.style.backgroundColor = "#9f2929";
    button.style.transition = "background-color 1s";
    setTimeout(function() {
      userBox.style.animation = "";
      button.style.backgroundColor = "";
    }, 400);
  

 
    
  } else {
 
 
    function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
     
    
      let username = getCookie('username');
      username = input.value;
      document.cookie = 'username=' + encodeURIComponent(input) +  ';max-age = 3600';
    // document.cookie = input + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
     

    var drop = document.createElement("div")
    var characterUP = document.createElement("div")
    var userLogo = document.createElement("div")
    var usertextMask = document.createElement("div")
    var overlay = document.createElement("div");
    var backOver = document.createElement("div");
    var brush = document.createElement("div");
    var text = document.createElement("text");
    drop.id = "drop";
    usertextMask.id = "userMask";
    characterUP.id = "characterUP";
    characterUP.textContent = "YOUR AVATAR";
    text.id = "text";
    brush.id = "brushS";
    backOver.id = "back"
    userLogo.id = "userAvatar"
    overlay.id = "overlay";
    text.textContent = input;

   
    document.body.appendChild(drop);
    document.body.appendChild(characterUP);
    document.body.appendChild(userLogo);
    document.body.appendChild(overlay);
    document.body.appendChild(backOver);

    setTimeout(function() {
      document.body.appendChild(usertextMask);
      document.body.appendChild(text);
      document.body.appendChild(brush);
    }, 700);
  
    setTimeout(function() {
      window.location.href = "index2.html";
 
    
    }, 3000);
 
//





    //рандом-аватары

    var photos = [
      "CHARACTERS/devil.png",
      "CHARACTERS/croco.png",
      "CHARACTERS/faces.png",
      "CHARACTERS/character.png",
      "CHARACTERS/cowboy.png",
      "CHARACTERS/ghost.png",
      "CHARACTERS/gin.png",
      "CHARACTERS/palach.png",
      "CHARACTERS/wolf.png",
      "CHARACTERS/executioner.png",
    ];
  
  
    var randomIndex = Math.floor(Math.random() * photos.length);
  
   
    var randomPhoto = photos[randomIndex];
  
     
    var userAvatar = document.getElementById("userAvatar");
    userAvatar.style.backgroundImage = "url(" + randomPhoto + ")";
 
 

    
  
  
  }

    
  
  //КУКА
   

}

     
 
 

 
 