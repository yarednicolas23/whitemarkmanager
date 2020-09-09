<template>
  <div class="row">
    <SideBar/>
    <div class="col s12 m12 l10 no-padding right">
      <div class="parallax-container" style="">
        <div class="container" style="margin-top:5vh">
          <h2 class="white-text light hide">Perfil</h2>
          <div class="col s4">
            <div class="image_wrapper">
              <div class="file-field input-field">
                <form id="uploadImagen" enctype="multipart/form-data">
                  <div class="circle center" v-bind:class="img.color" style="padding:5px 0;margin-bottom: 14px;" v-if="img.src==''">
                    <h3 class="light white-text">{{$root.session.user.name!=null?$root.session.user.name.substring(0, 1):null}}</h3>
                  </div>
                  <img class="circle responsive-img image" v-show="img.src!=''" :src="img.src" v-on:error="ImgError" style="max-height:100px;max-width:100px" alt="Imagen perfil Aviatur Marcas Blancas"/>
                  <span class="add hide"><a class="btn-floating btn-small blue waves-effect waves-light"><i class="large material-icons">edit</i><input type="file" v-on:change="uploadImagen($event)"></a></span>
                </form>
              </div>
            </div>
          </div>
          <div class="col s12 m8 l8">
            <h4 class="thin white-text">{{$root.session.user.name}} {{$root.session.user.fName}}</h4>
            <h5 class="thin white-text">{{$root.session.user.mail}}</h5>
            <h6 class="thin white-text" :key="index" v-for="(city,index) in cities.list"><span v-if="index==$root.session.user.city">{{city}}</span></h6>
          </div>
          <div class="col s12 white-text no-padding">
            <div class="col s4 center">
              <p class="thin">Empresa</p>
              <h5>{{$root.session.user.company}}</h5>
            </div>
            <div class="col s4 center">
              <p class="thin">Rol</p>
              <h5 :class="getRol($root.session.user.fRol).color">{{getRol($root.session.user.fRol).name}}</h5>
            </div>
            <div class="col s4 center">
              <p class="thin">Ciudad</p>
              <h5>{{this.cities.list[$root.session.user.city]}}</h5>
            </div>
          </div>
        </div>
        <div class="parallax"><img src="./../assets/img/background-admin.jpg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app"
import M from 'materialize-css'
import SideBar from '../components/SideBar'
export default{
  data: function() {
    return {
      "text": "Login View",
      "img": {
        "initial": "",
        "color": "indigo",
        "src": ""
      },
      "form":{
        "user":{}
      },
      "cities":{
        "ref": firebase.database().ref('cities'),
        "list": []
      },
      "rol":{
        "ref": firebase.database().ref('fRol'),
        "list": []
      },
      "upload":{
        "file":"",
        "title":"",
        "loader":false,
        "time":""
      }
    };
  },
  created: function () {
    this.getCitiesList()
    this.getRolList()
    this.$root.validateSesion()
    setTimeout(()=> {
      M.Parallax.init(document.querySelectorAll('.parallax'))
    },900)
    /*$(document).ready(function(){
      $('.parallax').parallax()
      $('ul.tabs').tabs()
      $('select').material_select()
    })*/
  },
  methods:{
    uploadImagen: function (e) {
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_img_profile")
      data.append('user', this.$root.session.user.document)
      /*
      $.ajax({
        url: 'dir/upload.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: (data)=>{
          try {
            if (data=="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Imagen subida")
              this.upload.time = new Date().getTime()
            }
            if (data=="error" || data!="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Imagen no subida")
            }
          } catch (e) {
            this.upload.loader=false
            this.$root.messageService("toast", "Imagen no subida")
          }
        },
      })*/
    },
    getImg:function(img){
      this.img = 'dir/users/'+img+'/'+img+'.png?'
    },
    ImgError:function() {
      this.img.src = "";
    },
    getCitiesList:function() {
      this.cities.ref.once('value', (cities)=> {
        cities.forEach((city)=> {
          this.cities.list.push(city.val())
        })
      })
    },
    getRolList:function() {
      this.rol.ref.once('value', (rols)=> {
        rols.forEach((r)=> {
          this.rol.list.push(r.val())
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
    }
  },
  components:{
    SideBar
  }
}
</script>
