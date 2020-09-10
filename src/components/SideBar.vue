<template>
  <div>
    <ul id="nav-icos" class="col s1 no-padding sidenav fixed mobile-no-show hide"  style="transform: translateX(0%);">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="./../assets/img/background-admin.jpg">
          </div>
          <a class=""><img class="circle" v-bind:src="'dir/users/'+this.user.document+'/'+this.user.document+'.png?'"></a>
          <a><span class="white-text name text-trasnform center">{{this.user.name}} {{this.user.fName}}</span></a>
        </div>
      </li>
      <li v-if="nav.analitycs">
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Home" to="/admin">
          <i class="grey-text material-icons" style="margin-left: 20px;">home</i>
        </router-link>
      </li>
      <li v-if="nav.myagency">
          <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Mi Agencia" to="/myagency">
          <i class="grey-text material-icons" style="margin-left: 20px;">home</i>
        </router-link>
      </li>
      <li v-if="nav.myagencydesign">
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Diseño de mi Web" to="/myagencydesign">
          <i class="grey-text material-icons" style="margin-left: 20px;">format_shapes</i>
        </router-link>
      </li>
      <!--  <li v-if="nav.reports">
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Reportes de Ventas" to="/reports">
          <i class="grey-text material-icons" style="margin-left: 20px;">score</i>
        </router-link>
      </li>-->
      <!--<li v-if="nav.transactions">
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Transacciones" to="/transactions">
          <i class="grey-text material-icons" style="margin-left: 20px;">format_shapes</i>
        </router-link>
      </li>-->
      <li v-if="nav.agencies">
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Agencias" to="/agencies">
          <i class="grey-text material-icons" style="margin-left: 20px;">business_center</i>
        </router-link>
      </li>
      <li v-if="nav.users">
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Usuarios" to="/users">
          <i class="grey-text material-icons" style="margin-left: 20px;">group</i>
        </router-link>
      </li>
      <li>
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Información +" to="/info">
          <i class="grey-text material-icons" style="margin-left: 20px;">find_in_page</i>
        </router-link>
      </li>
      <li>
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="FAQ" to="/faq">
          <i class="grey-text material-icons" style="margin-left: 20px;">help</i>
        </router-link>
      </li>
      <li>
        <router-link class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Mi Perfil" to="/profile">
          <i class="grey-text material-icons" style="margin-left: 20px;">mood</i>
        </router-link>
      </li>
      <li>
        <a v-on:click="$root.closeSession()" class="grey-text waves-effect waves-light tooltipped" data-position="right" data-delay="50" data-tooltip="Perfil">
          <i class="grey-text material-icons" style="margin-left: 20px;">exit_to_app</i>
        </a>
      </li>
    </ul>
    <ul id="nav-mobile" class="col s2 no-padding sidenav fixed mobile-no-show" style="transform: translateX(0%);">
      <li>
        <div class="user-view">
          <form id="uploadImagen" enctype="multipart/form-data">
            <div class="circle center" v-bind:class="img.color" style="padding:5px 0; margin:auto" v-if="img.src==''">
              <h4 class="light white-text" style="margin-top:10px;">{{this.user.name.substring(0, 1)}}</h4>
            </div>
            <img class="circle responsive-img image" v-show="img.src!=''" :src="img.src" v-on:error="ImgError" style="max-height:100px;max-width:100px" alt="Imagen perfil Aviatur Marcas Blancas">
          </form>
          <span class="name text-trasnform center">{{this.user.name}} {{this.user.fName}}</span>
          <span class="email center">{{this.user.mail}}</span>
        </div>
      </li>
        <li v-if="nav.analitycs"><router-link class="grey-text waves-effect" to="/admin"><i class="grey-text material-icons">home</i>Home</router-link></li>
        <li v-if="nav.myagency" class="disabled"><router-link class="grey-text waves-effect" to="/myagency"><i class="grey-text material-icons">home</i>Mi Agencia</router-link></li>
        <li v-if="nav.myagencydesign"><router-link class="grey-text waves-effect" to="/myagencydesign"><i class="grey-text material-icons">format_shapes</i>Diseño de mi Web</router-link></li>
        <li v-if="nav.reports" class="hide disabled"><router-link class="grey-text waves-effect" to="/reports"><i class="grey-text material-icons">monetization_on</i>Reportes de Ventas</router-link></li>
        <li v-if="nav.transactions" class="disabled"><router-link class="grey-text waves-effect" to="/transactions"><i class="grey-text material-icons">compare_arrows</i>Transacciones</router-link></li>
        <li v-if="nav.agencies"><router-link class="grey-text waves-effect" to="/agencies"><i class="grey-text material-icons">business_center</i>Agencias</router-link></li>
        <li v-if="nav.users"><router-link class="grey-text waves-effect" to="/users"><i class="grey-text material-icons">group</i>Usuarios</router-link></li>

      <li><router-link class="grey-text waves-effect" to="/info"><i class="grey-text material-icons">find_in_page</i>Información +</router-link></li>
      <li><router-link class="grey-text waves-effect hide" to="/notifications"><i class="grey-text material-icons">notifications</i>Notificaciones</router-link></li>
      <li><router-link class="grey-text waves-effect hide" to="/faq"><i class="grey-text material-icons">help</i>FAQ</router-link></li>
      <li><router-link class="grey-text waves-effect" to="/profile"><i class="grey-text material-icons">mood</i>Mi Perfil</router-link></li>
      <li><a v-on:click="$root.closeSession()" class="grey-text waves-effect"><i class="grey-text material-icons">exit_to_app</i>Cerrar Sesion</a></li>
    </ul>
    <nav class="col s12 m12 l10 right white hide" v-if="!navTop">
      <div class="nav-wrapper">
        <a data-target="slide-out" class="sidenav-trigger pointer"><i class="material-icons">menu</i></a>

        <!-- Dropdown Trigger -->
        <Notifications/>
      </div>
    </nav>
    <ul id="slide-out" class="sidenav">
      <li>
          <div class="user-view">
          <div class="background">
            <img src="./../assets/img/background-admin.jpg">
          </div>
          <form id="uploadImagen" enctype="multipart/form-data">
            <div class="circle center" v-bind:class="img.color" style="padding:5px 0; margin-left: 54px" v-if="img.src==''">
              <h4 class="light white-text" style="margin-top:10px;">{{this.user.name.substring(0, 1)}}</h4>
            </div>
            <img class="circle responsive-img image" v-show="img.src!=''" :src="img.src" v-on:error="ImgError" style="max-height:100px;max-width:100px" alt="Imagen perfil Aviatur Marcas Blancas">
          </form>
          <a><span class="white-text name text-trasnform center">{{this.user.name}} {{this.user.fName}}</span></a>
          <a><span class="white-text email center">{{this.user.mail}}</span></a>
        </div>
      </li>
      <li v-if="nav.analitycs"><router-link class="grey-text waves-effect waves-light" to="/admin"><i class="grey-text material-icons">home</i>Home</router-link></li>
      <li v-if="nav.myagency" class="disabled"><router-link class="grey-text waves-effect waves-light" to="/myagency"><i class="grey-text material-icons">home</i>Mi Agencia</router-link></li>
      <li v-if="nav.myagencydesign"><router-link class="grey-text waves-effect waves-light" to="/myagencydesign"><i class="grey-text material-icons">format_shapes</i>Diseño de mi Web</router-link></li>
      <li v-if="nav.reports" class="hide disabled"><router-link class="grey-text waves-effect waves-light" to="/reports"><i class="grey-text material-icons">monetization_on</i>Reportes de Ventas</router-link></li>
      <li v-if="nav.transactions" class="disabled"><router-link class="grey-text waves-effect waves-light" to="/transactions"><i class="grey-text material-icons">compare_arrows</i>Transacciones</router-link></li>
      <li v-if="nav.agencies"><router-link class="grey-text waves-effect waves-light" to="/agencies"><i class="grey-text material-icons">business_center</i>Agencias</router-link></li>
      <li v-if="nav.users"><router-link class="grey-text waves-effect waves-light" to="/users"><i class="grey-text material-icons">group</i>Usuarios</router-link></li>
      <li><router-link class="grey-text waves-effect waves-light" to="/info"><i class="grey-text material-icons">find_in_page</i>Información +</router-link></li>
      <li><router-link class="grey-text waves-effect waves-light" to="/notifications"><i class="grey-text material-icons">notifications</i>Notificaciones</router-link></li>
      <li><router-link class="grey-text waves-effect waves-light" to="/faq"><i class="grey-text material-icons">help</i>FAQ</router-link></li>
      <li><router-link class="grey-text waves-effect waves-light" to="/profile"><i class="grey-text material-icons">mood</i>Mi Perfil</router-link></li>
      <li><a v-on:click="$root.closeSession()" class="grey-text waves-effect waves-light"><i class="grey-text material-icons">exit_to_app</i>Cerrar Sesion</a></li>
    </ul>
  </div>
</template>
<script>
import Notifications from './Notifications'
import M from 'materialize-css'
export default{
  props: {
    navTop:Boolean
  },
  data: function() {
    return {
      "user":{},
      "agencies":{},
      "img": {
        "initial": "",
        "color": "indigo",
        "src": ""
      },
      "nav":{
        "myagencydesign":false,
        "reports":false,
        "myagency":false,
        "analitycs":false,
        "agencies":false,
        "users":false,
        "transactions": false
      }
    }
  },
  created:function (){
    if(this.$root.session.user==null) {
        this.$root.validateSesion()
    }
    if(this.$root.session.user!=null){
      this.user= this.$root.session.user
      this.rolNav(this.user.fRol)
    }
  },
  mounted: function () {
    document.addEventListener('DOMContentLoaded', function() {
      M.Sidenav.init(document.querySelectorAll('.sidenav'))
     });
    /*$(document).ready(()=>{
      $(".button-collapse").sideNav({
        closeOnClick: true
      })
    })*/
  },
  methods:{
    rolNav: function(rol) {
      if (rol == 1) {
        this.nav.analitycs = true
        this.nav.agencies = true
        this.nav.users = true
      }
      if (rol == 4) {
        this.nav.analitycs = false
        this.nav.agencies = true
      }
      if (rol == 5) {
        this.nav.myagency = true
        this.nav.myagencydesign = true
        this.nav.reports = true
        this.nav.transactions = true
      }
    },
    getImg:function(img){
       this.user.img = 'dir/users/'+img+'/'+img+'.png?'
    },
    ImgError:function () {
      this.img.src = "";
    }
  },
  components:{
    Notifications
  }
}
</script>
