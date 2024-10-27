
function bigImg(x) {
    x.style.height = "500px";
    x.style.width = "500px";
  }
  
  function normalImg(x) {
    x.style.height = "auto";
    x.style.width = "100%";
  }
  function bigRedes(x){
    x.style.height = "100px";
    x.style.width = "100px"
  }
  function normalRedes(x){
    x.style.height = "50px";
    x.style.width = "50px"
  }
  function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}
  function setCookie(cCEP,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cCEP + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cCEP) {
    let CEP = cCEP + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(CEP) == 0) {
        return c.substring(CEP.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("userCEP");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Digite o seu CEP:","");
       if (user != "" && user != null) {
         setCookie("userCEP", user, 30);
       }
    }
  }
  