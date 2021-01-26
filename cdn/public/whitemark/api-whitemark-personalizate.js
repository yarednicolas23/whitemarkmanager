var style=document.createElement('link');
style.href='https://whitemark-54535.firebaseapp.com/whitemark/whitemark.css';
style.type='text/css';
style.rel='stylesheet';
document.getElementsByTagName('head')[0].append(style);

setTimeout(function(){ document.getElementsByClassName('overlay')[0].style.display = "inline-table";
document.getElementsByClassName('overlay')[0].style.background ='white'; }, 1000);

var referermark =document.currentScript.getAttribute('referer');
var config = {
  apiKey: "AIzaSyDkr599TXCCUDlltNjAKocXcXvZ_9sAtdw",
  authDomain: "whitemark-54535.firebaseapp.com",
  databaseURL: "https://whitemark-54535.firebaseio.com",
  projectId: "whitemark-54535",
  storageBucket: "whitemark-54535.appspot.com",
  messagingSenderId: "611091130785"
};
firebase.initializeApp(config)
var fireAgency = {}
firebase.database().ref('agencies').once('value', (agencies) => {
  agencies.forEach((element) => {
    if (element.val().referer==referermark) {
      fireAgency = element.val()
    }
  });

  if (referermark=='aviaseguros') {
    if (document.location.pathname.includes("detalle")) {
      if (document.getElementsByClassName('pse').length!=0) {
        document.getElementsByClassName('pse')[0].classList.add("hide")
        document.getElementsByClassName('js_payment_options')[0].lastElementChild.classList.add("hide")
      }
    }
  }
  if (fireAgency.page != null) {
    var imgmark = document.querySelectorAll('.page-head__aviatur');

    for (var i in imgmark) {
      if (imgmark.hasOwnProperty(i)) {
        imgmark[i].src = 'https://whitemanager.grupoaviatur.com/dir/marks/'+referermark+'/'+referermark+'.png?'
      }
    }
    if (referermark=='avioteles') {
      var fav=document.createElement('link')
      fav.href ='https://avioteles.com.co/wp-content/uploads/2018/08/cropped-favicom-32x32.png'
      fav.type='image/x-icon'
      fav.rel='icon'
    }
    if (referermark=='vacacionesaviatur') {
      if (document.getElementsByClassName('lazy').length!=0) {
        if (document.location.pathname=="/") {
          document.getElementsByClassName('lazy')[0].src=document.getElementsByClassName('lazy')[0].src.replace("/_","/")
        }
      }
    }
    document.getElementsByTagName('head')[0].append(fav)
    var elementsedit = document.querySelectorAll('.nav-main__item, .btn--accent , .page-foot__social,.btn:not(.btn--inactive)');
    if (fireAgency.page.background!=null) {
      if (fireAgency.page.background=='no-image') {
        /*.page-head__contact li{
            //line-height: 27px;
            //color: #fff;
            //display: -webkit-inline-box;
          }*/
      }
      else {
        document.getElementsByClassName('page-head')[0].classList.add(fireAgency.page.background)
      }
    }
    if (fireAgency.phone!=null) { if(document.getElementById("wppagencyinfo")!=null){document.getElementById("wppagencyinfo").textContent=fireAgency.phone} }
    if (fireAgency.phone!=null) { if(document.getElementById("telnagencyinfo")!=null){document.getElementById("telnagencyinfo").textContent=fireAgency.phone} }
    if (fireAgency.phone!=null) { if(document.getElementById("emailagencyinfo")!=null){document.getElementById("emailagencyinfo").textContent=fireAgency.mail} }

    for (var i in fireAgency.page.button) {
      //if (fireAgency.page.button[i]=='bus') {
      switch (i) {
        case 'flights':
        if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[0]?document.querySelectorAll('.nav-main__grid')[0].classList.add('hide'):null
          }
          break;
        case 'hotels':
          if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[1]?document.querySelectorAll('.nav-main__grid')[1].classList.add('hide'):null
          }
          break;
        case 'flightsAndHotels':
          if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[2]?document.querySelectorAll('.nav-main__grid')[2].classList.add('hide'):null
          }
          break;
        case 'packages':
          if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[3]?document.querySelectorAll('.nav-main__grid')[3].classList.add('hide'):null
          }
          break;
        case 'cars':
          if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[4]?document.querySelectorAll('.nav-main__grid')[4].classList.add('hide'):null
          }
          break;
        case 'cruisers':
          if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[5]?document.querySelectorAll('.nav-main__grid')[5].classList.add('hide'):null
          }
          break;
        case 'assistance':
          if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[6]?document.querySelectorAll('.nav-main__grid')[6].classList.add('hide'):null
          }
          break;
        case 'bus':
          if (!fireAgency.page.button[i]) {
            document.querySelectorAll('.nav-main__grid')[7]?document.querySelectorAll('.nav-main__grid')[7].classList.add('hide'):null
          }
          break;

        default:


      }
    }
    document.getElementsByClassName("nav-main__title")[1].textContent="Paquetes"
    document.getElementsByClassName("nav-main__title")[3].textContent="Vacaciones"
    // Create our stylesheet
    var style = document.createElement('style');
    style.innerHTML =
      'a, .link-span,.link-slim,.option-toggle:not(.active),.search__title, .text-agency,.dispo-shapurple__filter-order.is-active, .dispo-shapurple__filter-options.is-active, .dispo-shapurple__filter-more.is-active,.search__title__icon,.ui-autocomplete-category{color:'+fireAgency.page.color+';}'
      //Backgorunds
      +'.ui-datepicker-calendar tbody tr td.depSelect{background-color:'+fireAgency.page.color+'}'
      //Hovers
      +'.ui-datepicker-calendar tbody tr td[data-handler="selectDay"]:hover, .ui-datepicker-calendar tbody tr td[data-handler="selectDay"]:active, .ui-datepicker-calendar tbody tr td[data-handler="selectDay"]:focus{background-color:'+fireAgency.page.color+';filter: hue-rotate(-20deg);}'
      // Color text
      +'.ui-datepicker-calendar tbody tr td a.ui-state-default{color:'+fireAgency.page.color+'}'
      +'.ui-datepicker-calendar tbody tr td.depSelect a{color:white}'
      +'.dispo-flight__row-title .dispo-flight__row__origin,.dispo-flight__row-title .dispo-flight__row__destination,.dispo-flight__row-title .dispo-flight__row__date{color:'+fireAgency.page.color+'}'
      +'.btn-group, .btn, .btn-group, .btn--slim,.list-radio, .list-radio--big, .list-checkbox{border-color:'+fireAgency.page.color+';}'
      +'.btn,.nav-main__item, .btn--accent , .page-foot__social,.list-radio > .list-checked, .list-radio--big > .list-checked, .list-checkbox > .list-checked,.btn--scroll-top,.nav-option.active:after{background-color:'+fireAgency.page.color+';color:white}'
      +'.btn-group > .btn:not(.btn--inactive), .btn-group > .btn--slim:not(.btn--inactive){background-color:'+fireAgency.page.color+';filter: hue-rotate(20deg);}'
      +'.nav-main__item{border-color:transparent}';
    // Get the first script tag
    var ref = document.querySelector('script');
    // Insert our new styles before the first script tag
    ref.parentNode.insertBefore(style, ref);
  }

  setTimeout(function(){
    document.getElementsByClassName('overlay')[0].style.display = "none";
   }, 1000);
});
