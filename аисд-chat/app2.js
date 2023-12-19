
// Скрыть loader после 3-х секунд

const loader = document.querySelector('.loader');

 
setTimeout(() => {
  loader.classList.add('hidden');
}, 3000);
 


//общий 

///КУКИ
var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");

 
console.log(cookieValue)

const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Привет!",
  "Как дела?",
  "Что нового?",
  "Я люблю JavaScript!",
  "Удачного дня!",
  "Как прошел день?",
  "Что планируешь делать в выходные?",
  "Надеюсь, у тебя хорошее настроение!",
  "Желаю успехов во всех начинаниях!",
  "С нетерпением жду встречи снова!"
];

// IMG-NAMES
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = cookieValue;

// Вставить значение куки в див
console.log(PERSON_NAME);
 



msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";
 
  botResponse();
});


 

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
 
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
    </img>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}


// ОТВЕТКА-БОТА-(МОЖНО-УБРАТЬ)
function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}
// ВРЕМЯ
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
 



 
 

const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

const filterData = (searchTerm) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

const getData = async () => {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add('user-info')
    li.setAttribute('id',user.name.first)
    listItems.push(li);
    li.innerHTML = `
      <img
            src="${user.picture.large}"
            alt="${user.name.first}"
          />
      <div class="user-info" id="${user.name.first}">
            <h4>${user.name.first} </h4>
         
      </div>
      `;
    result.appendChild(li);
  });
};

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

//Обработка приватных чатов
// function handleClick(event) {
//   var test = document.createElement('div')
//   var testbar = document.querySelector('#testbar')
//   while(testbar.firstChild){
//     testbar.removeChild(testbar.firstChild)
//   }
//   var element = event.target;
//   var id = element.id;
//   var elementexist = document.querySelector('#'+PERSON_NAME+'-'+id)
//   if (element.classList.contains('user-info')) {
//     }
//     if(!elementexist){
//       console.log(id);
//       test.setAttribute('id',PERSON_NAME+'-'+id)
//       testbar.appendChild(test)
//     var xyu = document.createElement(`div`)
//     xyu.innerHTML = `penis`
//     test.appendChild(xyu)

//     }
//     else{
//       console.log('Элемент существует пидор')
//     }
//   }
// document.addEventListener('click', handleClick);

function arrow(){
  let arrow = document.querySelector('#arrow')
  var computedStyles = window.getComputedStyle(arrow);
  if (computedStyles.getPropertyValue("transform") !== "none") {
    arrow.style.transform = "none";
    var privatechat = document.querySelector('#public')
    if(privatechat.classList.contains('col-12')){
      privatechat.classList.remove('col-12')
      privatechat.classList.add('col-10')
      arrow.style.left="81.73%"
      arrow.style.transition = "1s"
      privatechat.style.transition = "1s"
    }
  } 
  else {
    var privatechat = document.querySelector('#public')
    if(privatechat.classList.contains('col-10')){
      privatechat.classList.remove('col-10')
      privatechat.classList.add('col-12')
      arrow.style.left="97.5%"
    }
    arrow.style.transform = "scaleX(-1)"
    arrow.style.transition = "1s"
  } 
}
 

function addremove(){
  menu.classList.remove('d-flex')
  menu.classList.add('d-none')
}
function removeadd(){
  menu.classList.remove('d-none')
  menu.classList.add('d-flex')
}

function reback(){
  let arrow = document.querySelector('#arrow')
  arrow.style.transform = "none"
  var privatechat = document.querySelector('#public')
  privatechat.classList.remove('col-12')
  privatechat.classList.add('col-10')
  arrow.style.left="81.73%"
  arrow.style.transform = "none"
  arrow.style.transition = "1s"
  privatechat.style.transition = "1s"
  arrow.style.cursor = 'default'
  arrow.classList.add('blockedarrow')
}

function delaycancel(){
  let arrow = document.querySelector('#arrow')
 
  arrow.style.cursor = 'pointer'
  arrow.classList.remove('blockedarrow')
}

function getButtonId(event) {
  var buttonId = event.target.id;
 
  console.log('ID кнопки', buttonId)
  
  switch(buttonId){
    case "searching":

     
      let arrow = document.querySelector('#arrow')
      console.log('Вы нажали '+'searching')
      var menu = document.querySelector('#menu')
      menu.style.transition = "0.7s ease-in-out"

      if(menu.classList.contains('d-flex')){

        var privatechat = document.querySelector('#public')
        if(privatechat.classList.contains('col-10')){
          privatechat.classList.remove('col-10')
          privatechat.classList.add('col-12')
          arrow.style.left="96%"
        }
        arrow.style.transform = "scaleX(-1)"
        arrow.style.transition = "1s"
        setTimeout(addremove,1000)
        setTimeout(reback,1200)
        setTimeout(delaycancel,1300)
      }
      else{
        var privatechat = document.querySelector('#public')
        if(privatechat.classList.contains('col-12')){
          privatechat.classList.remove('col-12')
          privatechat.classList.add('col-10')
          arrow.style.left="100%"
          arrow.style.transition = "1s"
          privatechat.style.transition = "1s"
          setTimeout(removeadd,1000)
        }
      }
     break;
     case "privatemsgs":
      console.log('Вы нажали '+'privatemsgs')
     break;
     case 'homeready':
      console.log('Вы нажали '+'homeready')
     break;
  }

 
}








// function saveTokenToLocalStorage(token) {
//   localStorage.setItem('token', token);
//   sendTokenToServer(token);
// }

// // Отправить токен на сервер
// function sendTokenToServer(token) {
//   fetch('https://your-java-server.com/save-token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ token: token }),
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log('Токен успешно отправлен на сервер');
//     } else {
//       console.error('Ошибка при отправке токена на сервер');
//     }
//   })
//   .catch(error => {
//     console.error('Ошибка при отправке токена на сервер:', error);
//   });
// }





// document.getElementById('btn-modal').addEventListener('click', function(event){
//   event.preventDefault();
//   let nickname = document.getElementById('form29').value;
//   saveNicknameToDatabase(nickname);
// });
// function saveNicknameToDatabase(username) {
//   fetch('http://localhost:8080/saveNickname', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ nickname: username }),
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log('Nickname successfully saved in the database');
//     } else {
//       console.error('Error while saving nickname');
//     }
//   })
//   .catch(error => {
//     console.error('An error occurred:', error);
//   });

 
// }








// let container1 = document.querySelector('.container1');

// // Создаем shadow root для элемента container1
// let shadowRoot = container1.attachShadow({ mode: 'open' });

 
// // Создаем стиль для отображения элементов
// let style = document.createElement('style');
// style.textContent = `
//   .header,
//   .user-list {
//     display: none;
//   }
// `;

// // Добавляем стиль в shadow root
// shadowRoot.appendChild(style);

