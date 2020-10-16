function callModal() {
  if (document.querySelectorAll('.js-toggleContactTarget')[0].classList.contains('scrollRight')) {
    document.querySelectorAll('.icon-contact')[0].style.marginTop="-39em"
    document.querySelectorAll('.js-toggleContactTarget')[0].classList.remove('scrollRight')
    document.querySelectorAll('.js-toggleContactTarget')[0].classList.add('scrollLeft')
  }else {
    document.querySelectorAll('.icon-contact')[0].style.marginTop="0px"
    document.querySelectorAll('.js-toggleContactTarget')[0].classList.add('scrollRight')
    document.querySelectorAll('.js-toggleContactTarget')[0].classList.remove('scrollLeft')
  }
}
function appInit() {
  var style=document.createElement('link');
  style.href ='https://whitemark-54535.firebaseapp.com/aviatur/mobile.css';
  style.type='text/css';
  style.rel='stylesheet';
  document.getElementsByTagName('head')[0].append(style)
  document.getElementsByClassName('smartbanner')[0].classList.add('hide')
  document.getElementsByClassName('page-head--responsive')[0].classList.add('hide')
}
function loginApp(username,pass) {
  var data = JSON.stringify({"username":username,"password":pass});var xhr = new XMLHttpRequest();xhr.withCredentials = true;xhr.addEventListener("readystatechange", function () {if (this.readyState === 4) {console.log(this.responseText);}});xhr.open("POST", "https://www.aviatur.com/customer/login-ajax");xhr.setRequestHeader("content-type", "application/json");xhr.setRequestHeader("accept", "application/json");xhr.setRequestHeader("x-requested-with","XMLHttpRequest");xhr.send(data);
}
function loadDocumentDetail() {

}
function hideSearcher(){document.getElementsByClassName('search__light')[0].classList.add('hide')}
function initWeb(){
  if (document.querySelectorAll('.nav-foot__compagny').length!=0) {
    document.querySelectorAll('.nav-foot__compagny')[6].children[0].href='http://eventos.aviatur.com/eventos/'
    document.querySelectorAll('.nav-foot__compagny')[7].children[0].href='https://lufthansa-city-center.com/leisure/en/find-your-lcc-agency'
    document.querySelectorAll('.nav-foot__download ')[1].innerHTML='<a href="https://www.lasislas.com.co/" target="_blank"><div class="img-responsive nav-foot-dwl" style="background-position: 50% 0"></div></a>'
  }
}
window.onload = function() {
  setTimeout(function () {initWeb()},2000)
}
