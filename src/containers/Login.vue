<template>
  <div class="parallax-container full-screen">
    <div class="row">
      <div class="col s12">
        <form class="col s12 m6 l6 offset-l3 white-text centered-top" v-on:submit.prevent="login">
          <div class="col s12 center">
            <img src="http://www.aviatur.com/version/478/assets/aviatur_assets/img/header/aviatur_logo_beach.svg" class="responsive-img" alt="">
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="email" type="email" class="validate" required v-model="form.user.mail">
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">lock</i>
            <input id="pass" type="password" class="validate" v-model="form.user.password">
            <label for="pass">Contraseña</label>
          </div>
          <div class="col s12 center">
            <button type="submit" class="btn indigo waves-effect waves-light">Iniciar Sesión</button>
            <br>
            <router-link class="btn-flat waves-effect" to="/">Registrarse</router-link>
          </div>
        </form>
      </div>
    </div>
    <div class="parallax"><img src="./../assets/img/background-beach.jpg" style="max-width:100%;opacity:1"></div>
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
        "user":{}
      }
    };
  },
  methods:{
    login: function() {
      if (this.form.user.mail != null) {
        if (this.form.user.password!=null) {
          var user = {
            "form" : this.form.user,
            "ref": firebase.database().ref('users'),
            "list": [],
            "exist":{
              "email":false,
              "password":false
            }
          }
          user.ref.once('value', (snapshot)=> {
            snapshot.forEach((childSnapshot)=> {
              //var childKey = childSnapshot.key
              user.list.push(childSnapshot.val())
              if (childSnapshot.val().mail == user.form.mail) {
                user.exist.email =true;
                if (childSnapshot.val().password == user.form.password) {
                    user.exist.password = true
                    this.$cookie.set('user',JSON.stringify(childSnapshot.val()))
                    this.$root.validateSesion()
                }else {
                  this.$root.messageService('toast','Contraseña Incorrecta 👀', 4000)
                  return
                }
              }
            })
            if (!user.exist.email) {
             this.$root.messageService('toast','Tu Email no se encuentra registrado o esta mal 💌', 4000)
            }
          })
          if (user.exist.password) {
            this.$root.validateSesion()
          }
        }else {
          this.$root.messageService('toast','Aún no has puesto tu contraseña 👀', 4000)
        }
      } else {
        this.$root.messageService('toast','Aún no has puesto tu email 💌', 4000)
      }
    }
  },
  created: function () {
    this.$root.validateSesion()
    // `this` points to the vm instance
    //$(document).ready(function(){
      //$('.parallax').parallax()
      //$('ul.tabs').tabs()
      //$('select').material_select()
    },
  beforeCreate:function() {
    document.addEventListener('DOMContentLoaded', function() {
      M.Parallax.init(document.querySelectorAll('.parallax'))
    })
  }
}
</script>
