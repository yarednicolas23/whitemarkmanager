<template>
  <div class="parallax-container full-screen">
    <div class="row">
      <nav class="transparent no-box-shadow">
        <div class="nav-wrapper container ">
          <a href="#" class="brand-logo center">
            <img src="http://www.aviatur.com/version/478/assets/aviatur_assets/img/header/aviatur_logo_beach.svg" class="responsive-img" alt="">
          </a>
        </div>
      </nav>

      <div class="col s12">
        <div class="container" v-show="!loader">
          <h5 class="white-text thin center">
            {{user.name}} tu agencia {{agency.agency}}, casi esta lista,
            ya casi haces parte de AVIATUR,
            solo debes confirmar los siguientes datos:
          </h5>
          <div id="register" class="col s12">
              <div class="row white-text">
                <form class="" v-on:submit.prevent="register">
                  <div class="input-field col s12 tooltipped" data-position="top" data-delay="5" data-tooltip="Registro Nacional de Turismo (RNT)">
                    <i class="material-icons prefix">domain</i>
                    <input name="rnt" id="rnt" type="text" class="validate"  v-model="agency.rnt">
                    <label for="rnt" data-error="RNT no es valido 😕" data-success="El RNT esta perfecto 😃">RNT</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">account_circle</i>
                    <input name="legal" id="legal" type="text" class="validate"  v-model="agency.legal">
                    <label for="legal" data-error="Representante no es valido 😕" data-success="Representante esta perfecto 😃">Representante Legal</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">account_balance</i>
                    <input name="location" id="location" type="text" class="validate" v-model="agency.location" >
                    <label for="location" data-error="Tu Dirección no es valido 😕" data-success="Tu Dirección esta perfecto 😃">Dirección de la agencia</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">phone</i>
                    <input name="phone" id="phone" type="text" pattern="[0-9]{6,11}" class="validate"  v-model="agency.telephone" >
                    <label for="phone" data-error="Tu Telefono no es valido 😕" data-success="Tu Telefono esta perfecto 😃">Teléfono fijo</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">phone_android</i>
                    <input name="telephone" id="telephone" type="text" pattern="[0-9]{8,11}" class="validate" v-model="agency.phone" >
                    <label for="telephone" data-error="Tu Celular no es valido 😕" data-success="Tu Celular esta perfecto 😃">Teléfono Celular</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">web</i>
                    <input name="web" id="web" type="text" class="validate" v-model="agency.web">
                    <label for="web" data-error="Tu pagina web no es valido 😕" data-success="Tu pagina web esta perfecta 😃">Dominio/página web (Si aún no tienes página web, escribe NA)</label>
                  </div>
              <!--<div class="col s12">
                  <label>Tipo de pagina</label>
                    <select name="type" id="type" class="browser-default black-text" v-model="agency.type">
                      <option value="iframe">Iframe</option>
                      <option value="swc">Pagina Completa</option>
                    </select>
                  </div>-->
                  <div class="col s12">
                    <h5 class="white-text thin">Ingresa una contraseña segura para tu agencia.</h5>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input name="pass" id="pass" type="password" class="validate" v-model="secure.pass">
                    <label for="name">Contraseña Segura</label>
                  </div>
                  <div class="input-field col s12">
                    <i class="material-icons prefix">lock</i>
                    <input name="repass" id="repass" type="password" class="validate" v-model="secure.repss">
                    <label for="name">Confirmar Contraseña</label>
                  </div>
                  <div class="input-field col s12 row center">
                    <input name="company" id="company" type="hidden" value="aviatur"/>
                    <button class="btn btn-circle" type="submit" name="action">
                      <i class="material-icons right">send</i>
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
          </div>
        </div>
        <div class="col s12 center" v-show="loader">
          <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-white-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <h5 class="light white-text">Cargando...</h5>
        </div>
      </div>
    </div>
    <div class="parallax">
      <img src="./../assets/img/background.jpg" style="max-width:100%">
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import * as firebase from "firebase/app"
export default {
  data: function() {
    return {
      "text": "Login View",
      "form":{
        "confirmation":{}
      },
      "loader":true,
      "secure":{
        "pass":"",
        "repass":""
      },
      "users" : {
        "ref": firebase.database().ref('users'),
        "list": []
      },
      "user":{},
      "agencies" : {
        "ref": firebase.database().ref('agencies'),
        "list": [],
        "saved":false
      },
      "agency":{}
    }
  },
  mounted:function(){
    M.Parallax.init(document.querySelectorAll('.parallax'))
  },
  updated:function(){
    document.addEventListener('DOMContentLoaded', function() {
      M.Parallax.init(document.querySelectorAll('.parallax'))
      M.Tabs.init(document.querySelectorAll('.tabs'))
      M.Tooltip.init(document.querySelectorAll('.tooltipped'))
    })
  },
  methods:{
    getUser: function(nit) {
      this.users.ref.once('value', (users) => {
        users.forEach((element) => {
          if (element.val().agency==nit) {
            this.user = element.val()
            return
          }
        })
      })
    },
    getAgency:function (agency) {
      this.agencies.ref.once('value', (agencies) => {
        agencies.forEach((element) => {
          if (element.val().nit==agency) {
            this.agency = element.val()
            this.getUser(this.agency.nit)

            if (this.agency.confirmation) {
              this.$root.messageService("toast", "Ya Confirmaste Tu Cuenta 🤖")
              window.location.href = '#/'
            }
            setTimeout(()=> {
              M.updateTextFields()
              this.loader = false
            }, 2000)
          }
        })
      })
    },
    register: function() {
      this.agency.comercial = 0
      this.agency.company = "aviatur"
      this.agency.referer = this.agency.agency.toLowerCase().replace(" ","")
      this.agency.state = 1
      this.agency.confirmation = true
      if (this.secure.pass!=this.secure.repss) {
        this.$root.messageService("toast", "Las Claves No Coinciden 🤖")
        return
      }
      else {
        firebase.database().ref('agencies/'+this.agency.nit).set(this.agency).then(()=> {
          this.agencies.saved = true
          this.user.password = this.secure.pass
          firebase.database().ref('users/'+this.user.document).set(this.user).then(()=> {
            this.$root.messageService("toast", "Tu cuenta ha sido verificada 😃")
            window.location.href = '#/'
          }).catch(function (error) {
            console.log(error)
            this.$root.messageService("toast", "Algo salio mal, recarga la pagina por fa  🤖")
          })
        }).catch(function (error) {
          console.log(error)
          this.$root.messageService("toast", "Algo salio mal, recarga la pagina por fa  🤖")
        })
      }
    },
  },
  created: function () {
    this.getAgency(this.$route.params.id)
    //this.$root.validateSesion()
    // `this` points to the vm instance
  }
}
</script>
