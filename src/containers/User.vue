<template>
  <div class="row blue-grey darken-4">
      <SideBar/>
      <div class="col s12 m12 l10 right">
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
        <!-- General Data -->
        <div class="col s12"  v-show="!loader">

          <div class="col s12 no-padding right">
            <div class="parallax-container">
              <div class="col s12 m6 l5">
                <div class="col s12 center">
                  <h2 class="white-text light">Perfil</h2>
                  <div class="col s12">
                    <div class="image_wrapper">
                      <div class="file-field input-field">
                        <form id="uploadImagen" enctype="multipart/form-data">
                          <img class="circle responsive-img image" :src="img" v-on:error="ImgError" style="max-height:100px;max-width:100px" alt="Imagen perfil Aviatur Marcas Blancas">
                          <span class="add"><a class="btn-floating btn-small blue waves-effect waves-light"><i class="large material-icons">edit</i><input type="file" v-on:change="uploadImagen($event)"></a></span>
                        </form>
                      </div>
                    </div>
                  </div>
                  <h4 class="thin white-text">{{user.name}} {{user.fName}}</h4>
                  <h5 class="thin white-text">{{user.mail}}</h5>
                  <h6 class="thin white-text">{{user.city}}</h6>
                </div>
              </div>
              <div class="parallax"><img class="blur-profile" src="./../assets/img/background-beach.jpg" style="width:100%"></div>
            </div>
          </div>
          <div class="col s12">
            <h5 class="white-text thin">Información General</h5>
          </div>
          <div class="col s12 m12 l12">
            <ul class="collapsible popout" data-collapsible="expandable">
              <!-- Información Principal Agencia-->
              <li class="white-text">
                <div class="collapsible-header blue-grey darken-3 waves-effect waves-light active"><i class="material-icons">business</i>{{user.name}} {{user.fName}}</div>
                <div class="collapsible-body">
                  <div class="row">
                    <div class="input-field">
                      <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Nombre de la Agencia">account_circle</i>
                      <input name="user" type="text" v-model="user.name">
                      <label for="user">Nombre del Usuario</label>
                    </div>
                    <div class="input-field">
                      <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Correo de la Agencia">account_circle</i>
                      <input name="mail" type="text" v-model="user.fName">
                      <label for="mail">Apellido del Usuario</label>
                    </div>
                    <div class="input-field">
                      <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Estado de la Agencia">fingerprint</i>
                      <input name="state" type="text" v-model="user.document">
                      <label for="icon_prefix">Documento del usuario</label>
                    </div>
                    <div class="input-field">
                      <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Teléfono de la Agencia">mail</i>
                      <input name="phone" type="text"  v-model="user.mail">
                      <label for="icon_prefix">Correo del Usuario</label>
                    </div>
                    <div class="input-field">
                      <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Movil de la Agencia">phone_iphone</i>
                      <input name="movil" type="text" v-model="user.movil">
                      <label for="icon_prefix">Movil del Usuario</label>
                    </div>
                    <div class="input-field">
                      <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Estado de la Agencia">info_outline</i>
                      <input name="state" type="text" v-model="user.company">
                      <label for="icon_prefix">Empresa del Usuario</label>
                    </div>
                    <div class="">
                      <i class="material-icons blue-text darken-3 tooltipped" data-position="left" data-delay="50" data-tooltip="Sitio web de la Agencia" data-tooltip-id="5b06fe19-471e-b073-104b-407749803534">language</i>
                        <a v-bind:href="user.web" class="weblink" target="_blank">{{user.mail}}</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="col s12 hide">
            <div class="card blue-grey darken-3">
              <div class="card-content">
                <span class="card-content"></span>
                <div class="row">
                  <table>
                    <thead>
                      <tr>
                          <th>Name</th>
                          <th>Item Name</th>
                          <th>Item Price</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                      </tr>
                      <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                      </tr>
                      <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="input-field">
                    <textarea id="textarea1" class="materialize-textarea" v-model="chartstring"></textarea>
                    <label for="textarea1">JSON</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed-action-btn toolbar">
          <a class="btn-floating btn-large indigo">
            <i class="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li class="waves-effect waves-light tooltipped" data-position="top" data-delay="10" data-tooltip="Guardar Estadisticas"><a><i class="material-icons">insert_chart</i></a></li>
            <li class="waves-effect waves-light tooltipped" data-position="top" data-delay="10" data-tooltip="Guardar Cambios"><a  v-on:click="SaveChanges(user)"><i class="material-icons">save</i></a></li>
          </ul>
        </div>
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
        "chartstring":"",
        "users" : {
          "ref": firebase.database().ref('users'),
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
  },
  methods:{
    getuser:function (user) {
      this.users.ref.once('value', (users) => {
        users.forEach((element) => {
          if (element.val().document==user) {
            this.user = element.val()
            this.getImg(this.user.document)
            if (this.user.charts!=null) {
              this.user.chartstring = JSON.stringify(this.user.charts)
            }
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
    }
  },
  beforeCreate: function () {
    /*$(document).ready(()=>{
      $('input#input_text, textarea#note').characterCounter()
      $('.collapsible').collapsible()
      $('.parallax').parallax()
      $('.tooltipped').tooltip({delay: 50})
    })*/
  }
}
</script>
