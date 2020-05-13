<template>
  <div class="row">
    <SideBar/>
    <div class="col s12 m12 l10 no-padding right">
      <div class="parallax-container" style="height:25vh;padding-top:5vh;">
        <!-- General Data -->
        <div class="container no-padding"  v-show="!loader">
          <div class="col s12">
            <div class="col s2">
              <div class="image_wrapper">
                <div class="file-field input-field">
                  <form id="uploadImagen" enctype="multipart/form-data">
                    <div class="circle center indigo" v-bind:class="img.color" style="padding:5px 0;margin-bottom: 14px;">
                      <h3 class="light white-text">{{user.name!=null?user.name.substring(0, 1):null}}</h3>
                    </div>
                    <img class="circle responsive-img image hide" :src="img" v-on:error="ImgError" style="max-height:100px;max-width:100px" alt="Imagen perfil Aviatur Marcas Blancas">
                    <span class="add hide"><a class="btn-floating btn-small blue waves-effect waves-light"><i class="large material-icons">edit</i><input type="file" v-on:change="uploadImagen($event)"></a></span>
                  </form>
                </div>
              </div>
            </div>
            <div class="col s8">
              <h4 class="thin white-text">{{user.name}} {{user.fName}}</h4>
              <h5 class="thin white-text">{{user.mail}}</h5>
              <h6 class="thin white-text"><span :class="getRol(user.fRol).color">{{getRol(user.fRol).name}}</span> - {{cities.list[user.city]}}</h6>
            </div>
          </div>
        </div>
        <div class="parallax"><img src="./../assets/img/background-admin.jpg" style="width:100%"></div>
      </div>
      <div class="col s12 blue-grey darken-4">
        <!-- Loader -->
        <div class="col s12 center" v-show="loader">
          <div class="preloader-wrapper big active" style="margin-top:5%">
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
          <h5 class="white-text light">Cargando...</h5>
        </div>
        <div class="col s12 mono center white-text" v-if="user == 0">
            <h1>😱</h1>
            <h3 class="thin">No encontramos este Usuario, es probable que no exista</h3>
          </div>
        <div class="container">
          <div class="card blue-grey darken-3">
            <div class="card-content white-text">
              <div class="card-title">Información General</div><br>
                <div class="row">
                  <div class="input-field">
                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Nombre de la Agencia">account_circle</i>
                    <input name="user" type="text" class="white-text" v-model="user.name">
                    <label for="user">Nombre del Usuario</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Correo de la Agencia">account_circle</i>
                    <input name="mail" type="text" class="white-text" v-model="user.fName">
                    <label for="mail">Apellido del Usuario</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Estado de la Agencia">fingerprint</i>
                    <input name="state" type="text" class="white-text" v-model="user.document">
                    <label for="icon_prefix">Documento del usuario</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Teléfono de la Agencia">mail</i>
                    <input name="phone" type="text" class="white-text" v-model="user.mail">
                    <label for="icon_prefix">Correo del Usuario</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Movil de la Agencia">phone_iphone</i>
                    <input name="movil" type="text" class="white-text" v-model="user.movil">
                    <label for="icon_prefix">Movil del Usuario</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Estado de la Agencia">info_outline</i>
                    <input name="state" type="text" class="white-text" v-model="user.company">
                    <label for="icon_prefix">Empresa del Usuario</label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Cuidad">map</i>
                    <input name="state" type="text" class="white-text" v-model="user.city">
                    <label for="icon_prefix">Cuidad</label>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div class="fixed-action-btn toolbar">
      <a class="btn-floating btn-large indigo" v-on:click="SaveChanges(user)">
        <i class="large material-icons">save</i>
      </a>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import * as firebase from "firebase/app"
import SideBar from '../components/SideBar'
export default {
  data: ()=> {
      return {
        "search": "",
        "img": "web/assets/img/users/1/1.png",
        "loader":true,
        "users" : {
          "ref": firebase.database().ref('users'),
          "list": []
        },
        "cities":{
          "ref": firebase.database().ref('cities'),
          "list": []
        },
        "note":{
          "value":"",
          "date":new Date().toString()
        },
        "user":{},
        "charts":{
          "2017":{
            "sales":{
              "months":[],
              "values":[]
            },
            "commission":{
              "months":[],
              "values":[]
            }
          },
          "2018":{
            "sales":{
              "months":[],
              "values":[]
            },
            "commission":{
              "months":[],
              "values":[]
            }
          }
        },
        "upload":{
          "file":"",
          "title":"",
          "loader":false,
          "time":""
        }
      }
  },
  components:{
    SideBar
  },
  created: function () {
    this.$root.validateSesion()
    if (this.$route.params.id != null) {
      this.getuser(this.$route.params.id)
    }
    this.getCitiesList()
  },
  methods:{
    getuser:function (user) {
      this.users.ref.once('value', (users) => {
        users.forEach((element) => {
          if (element.val().document==user) {
            this.user = element.val()
            this.getImg(this.user.document)
            setTimeout(()=> {
              M.updateTextFields()
                M.Parallax.init(document.querySelectorAll('.parallax'))
              this.loader = false
            },900)
          }
        });
      });
    },
    SaveChanges:function() {
      firebase.database().ref('users/'+this.user.document).set(this.user).then(()=> {
        this.$root.messageService('toast','Cambios Guardados  🤖', 10000)
      }).catch(function (error) {
        console.log(error)
        this.$root.messageService("toast", "Algo salio mal, recarga la pagina por favor  🤖")
      })
    },
    getImg:function(img){
      this.img = 'dir/users/'+img+'/'+img+'.png?'
    },
    ImgError:function () {
      this.img = "web/assets/img/users/1/1.png";
    },
    getCitiesList:function() {
      this.cities.ref.once('value', (cities)=> {
        cities.forEach((city)=> {
          this.cities.list.push(city.val())
        })
      })
    },
    getRol(rol) {
      switch (rol) {
        case "1":
          return {"color":"purple-text","name":"Administrador"}
        case "2":
          return {"color":"orange-text","name":"Usuario"}
        case "3":
          return {"color":"blue-text","name":"Comercial"}
        case "4":
          return {"color":"cyan-text","name":"Auditor"}
        case "5":
          return {"color":"green-text text-accent-2","name":"Agencia"}
        default:
          return {"color":"green-text text-accent-2","name":"Agencia"}
        }
      },
  },
  beforeCreate: function () {
    document.addEventListener('DOMContentLoaded', function() {
    })
    /*$(document).ready(()=>{
      $('input#input_text, textarea#note').characterCounter()
      $('.collapsible').collapsible()
      $('.parallax').parallax()
      $('.tooltipped').tooltip({delay: 50})
    })*/
  }
}
</script>
