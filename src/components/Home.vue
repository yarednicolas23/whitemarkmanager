<template>
  <div class="home">
    <div class="col s12 no-padding">
      <div class="row">
        <nav class="transparent no-box-shadow">
          <div class="nav-wrapper container">
            <a href="#/" class="brand-logo">
              <img src="https://www.aviatur.com/version/908/assets/aviatur_assets/img/header/aviatur-logo-gradient.svg?v=2" class="responsive-img" alt="">
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a class="grey-text" href="#">Inicio</a></li>
              <li><a class="grey-text" href="#how">¿Como Funciona?</a></li>
              <li><a class="grey-text" href="#moreinfo">¿Que debo hacer?</a></li>
              <li><a class="grey-text" href="#register">Registrarme</a></li>
              <li><button class="btn btn-circle  modal-trigger" href="#login">Iniciar Sesión</button></li>
            </ul>
          </div>
        </nav>
        <div class="row">
           <div id="init" class="row">
             <div class="container" style="margin-top:8%">
               <h3 class="header"><b>¿Tienes una agencia de viajes?</b></h3>
               <p class="grey-text">
                 En AVIATUR Ofrecemos a las agencias de viajes que esta en proceso de desarrollo,
                 <br>
                 la posibilidad de obtener su propio buscador en linea,
                 <br>
                 una herramienta de ventas personalizable de marca blanca,
                 <br>
                 en donde hacemos accesible para su agencia la forma de integrarte con AVIATUR,
                 <br>
                 nosotros nos encargamos del funcionamiento tecnológico
                 <br>
                 para que su agencia solo se preocupe por seguir creciendo.
               </p>
               <a class="btn btn-circle" href="#how">Dar el primer paso</a>
             </div>
           </div>
           <br><br><br><br><br><br><br><br><br><br>
           <section id="how" class="row">
             <div class="container">
               <div class="row">
                 <div class="col s12 m6 l8">
                   <i class="material-icons hide"><h1>mood</h1></i>
                   <h4><b>¿Como funciona?</b></h4>
                   <p>
                     Sabemos que muchas agencias pequeñas emergentes o medianas,
                     compran por aviatur.com, y gestionan con sus clientes.
                     <br>
                     Ahora queremos premiar a nuestros mejores consolidadores de ventas, incluyendolos en la empresa,
                     de forma que tengan un espacio donde puedan comprar, llevar control de sus ventas, y más importante aún,
                     comisionar por su nivel de ventas.
                   </p>
                 </div>
               </div>
               <div class="row">
                 <div class="col s12">
                   <i class="col s1 center material-icons" style="line-height:2;font-size:2rem;">flight</i>
                   <p class="col s10">
                     El servicio de vuelos y ventas de tiquetes nacionales e internacionales
                     con comision de 1% compartida con AVIATUR, si la aerolinea genera hover por metas de ventas tambíen
                     serán compartidas en comisión.
                   </p>
                 </div>
                 <div class="col s12">
                   <i class="col s1 center material-icons" style="line-height:2;font-size:2rem;">hotel</i>
                   <p class="col s10">
                     El servicio de hoteles nacionales e internacionales
                     con comision aproximada del 14% compartida con AVIATUR,
                     todas las negociaciones de hoteles que AVIATUR tenga directamente,
                     serán compartidas también con la agencias.
                   </p>
                 </div>
                 <div class="col s12">
                   <i class="col s1 center material-icons" style="line-height:2;font-size:2rem;">card_travel</i>
                   <p class="col s10">
                     El servicio de  paquetes nacionales e internacionales
                     con comision aproximada del 15%, las negociaciones de paquetes
                     que AVIATUR tenga directamente, serán compartidas también
                     con la agencias sugeto a excepciones.
                   </p>
                 </div>
               </div>
               <br><br><br><br><br><br><br><br><br><br>
               <div class="row">
                 <div class="col s12 m6 l4">
                   <i class="material-icons hide"><h1>brush</h1></i>
                   <h4><b>Edite su pagina web</b></h4>
                   <p>
                     Una vez su cuenta sea confirmada podrá editar el diseño
                     de su marca blanca en nuestra herramienta, iniciando sesión
                     y utilizando la herramienta "Diseño de mi web"
                   </p>
                 </div>
                 <div class="col s12 m6 l8 no-padding">
                   <img src="./../assets/img/steps/editor.png" class="responsive-img z-depth-5" alt="marca blanca aviatur">
                 </div>
               </div>
               <div class="row">
                  <div class="col s12">
                    <i class="material-icons hide"><h1>build</h1></i>
                    <h4><b>Herramientas de edición</b></h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Icono</th>
                          <th>Uso</th>
                          <th>Descripción</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><i class="material-icons">photo_size_select_large</i></td>
                          <td>Editar icono</td>
                          <td>Le permite subir el icono de su empresa</td>
                        </tr>
                        <tr>
                          <td><i class="material-icons tooltipped center">burst_mode</i></td>
                          <td>Editar color</td>
                          <td>Elija la paleta de colores</td>
                        </tr>
                        <tr>
                          <td><i class="material-icons tooltipped center">visibility</i></td>
                          <td>Editar botones</td>
                          <td>Seleccione los botones según el servicio que preste</td>
                        </tr>
                        <tr>
                          <td><i class="material-icons tooltipped center">format_shapes</i></td>
                          <td>Editar información</td>
                          <td>Edite la información visible de su empresa</td>
                        </tr>
                        <tr>
                          <td><i class="material-icons">collections</i></td>
                          <td>Editar imagen de fondo</td>
                          <td>Tendra una paleta de imagenes disponible para usar de fondo en su pagina</td>
                        </tr>
                        <tr>
                          <td><i class="material-icons tooltipped center">save</i></td>
                          <td>Guardar</td>
                          <td>Guarda el trabajo realizado</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
               </div>
               <br><br><br><br><br><br><br><br><br><br>
             </div>
           </section>
           <section id="moreinfo" class="row">
             <div class="container">
               <div class="row">
                 <div class="col s12 m6 l8">
                   <h4><b>¿Que debo hacer?</b></h4>
                   <p>Siga los pasos.</p>
                 </div>
               </div>
               <div class="row">
                 <div class="col s12">
                   <i class="col s1 center material-icons" style="line-height:1.8;font-size:2rem;">looks_one</i>
                   <p class="col s10">
                     El primer paso es registrarse dando click en <a v-on:click="selectTab('register')">Registro</a>
                   </p>
                 </div>
                 <div class="col s12">
                   <i class="col s1 center material-icons" style="line-height:1.8;font-size:2rem;">looks_two</i>
                   <p class="col s10">
                     Para el segundo paso al correo con el que se registre llegara un email en el cual deberá confirmar su cuenta.
                   </p>
                 </div>
                 <div class="col s12">
                   <i class="col s1 center material-icons" style="line-height:1.8;font-size:2rem;">looks_3</i>
                   <p class="col s10">
                     Al correo con el que se registre llegara un correo
                     en el cual deberá confirmar su cuenta y asignar una contraseña de acceso.
                   </p>
                 </div>
                 <div class="col s12">
                   <i class="col s1 center material-icons" style="line-height:1.8;font-size:2rem;">looks_4</i>
                   <p class="col s10">
                     Una vez confirmada su cuenta, tendra acceso a la plataforma,
                     puede iniciar sesión dando click <a href="#login">aquí</a> ,
                     y podra ingresar a la herramienta "Diseño de mi web"
                     donde puede editar el diseño de su web.
                   </p>
                 </div>
               </div>
             </div>
             <br><br><br><br><br><br><br><br><br><br>
           </section>
           <div id="register" class="container">
             <div class="row">
               <div class="col s12 m6 l8">
                 <h4><b>Registro</b></h4>
               </div>
             </div>
             <div class="row">
               <form id="form-register" class="" v-on:submit.prevent="register">
                 <div class="input-field col s12">
                   <i class="material-icons prefix">email</i>
                   <input name="mail" id="mail" type="email" class="validate" required="" v-model="agency.mail">
                   <label for="mail">Email</label>
                   <span class="helper-text" data-error="Tu correo no es valido 😕" data-success="ok"></span>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">location_city</i>
                   <input name="nit" id="nit" type="text" pattern="[0-9]{8,11}" class="validate" required="" v-model="agency.nit">
                   <label for="nit">Nit de la empresa</label>
                   <span class="helper-text" data-error="Tu Nit no es valido 😕" data-success="Tu Nit esta perfecto 😃"></span>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">account_circle</i>
                   <input name="name" id="name" type="text" class="validate" required="" v-model="agency.agency">
                   <label for="name">Nombre de la empresa</label>
                   <span class="helper-text" data-error="Tu nombre no es valido 😕" data-success="Que buen nombre 😃"></span>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">fingerprint</i>
                   <input name="document" id="document" type="text" pattern="[0-9]{8,11}" class="validate" required="" v-model="user.document">
                   <label for="document">Tu Cedula</label>
                   <span class="helper-text" data-error="Tu Cedula no es valido 😕" data-success="Tu Cedula esta perfecto 😃"></span>
                 </div>
                 <div class="input-field col s12">
                   <i class="material-icons prefix">mood</i>
                   <input name="username" id="username" type="text" class="validate" required="" v-model="user.name">
                   <label for="username">Tu Nombre</label>
                   <span class="helper-text" data-error="Tu nombre no es valido 😕" data-success="Que buen nombre 😃"></span>
                 </div>
                 <div class="col s12">
                 <label>Ciudad</label>
                 <select name="city" id="city" class="browser-default black-text" v-model="agency.country" required>
                   <option value="" disabled selected>Selecciona tu ciudad</option>
                   <option v-bind:value="index" v-bind:key="index" v-for="(city,index) in cities.list">{{city}}</option>
                 </select>
                 </div>
                 <div class="center hide">
                   <h5>Realiza esta sencilla suma, para verificar que no eres un robot.</h5>
                 </div>
                 <div class="input-field col s12 row center">
                   <input class="hide" type="submit" value="Send">
                   <button class="btn btn-circle" type="submit" name="action" v-show="!loader.register">
                     <i class="material-icons right">send</i>
                     Registrar
                   </button>
                   <div class="preloader-wrapper active" v-show="loader.register">
                      <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                          <div class="circle"></div>
                        </div><div class="gap-patch">
                          <div class="circle"></div>
                        </div><div class="circle-clipper right">
                          <div class="circle"></div>
                        </div>
                      </div>
                    </div>
                 </div>
               </form>
             </div>
           </div>
         </div>
      </div>
      <!-- Modal Success -->
      <div id="success" class="modal modal-success">
        <div class="modal-content">
          <h4>Perfecto, su registro está listo 🤖</h4>
          <p>Ahora debe confirmar su cuenta dando click <router-link :to="'/confirmation/'+agency.nit">aquí</router-link> o revisando su correo.</p>
        </div>
        <div class="modal-footer">
          <a class="modal-close waves-effect waves-green btn-flat">ok</a>
        </div>
      </div>
      <!-- Modal Login -->
      <div id="login" class="modal modal-success">
        <div class="modal-content">
          <Login/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import * as firebase from "firebase/app"
import Login from '../containers/Login'
export default {
  name: 'Home',
  components:{Login},
  data:function(){
    return {
      "agency":{},
      "user":{},
      "cities":{
        "ref": firebase.database().ref('cities'),
        "list":["Bogotá","Medellín"]
      },
      "users":{
        "ref": firebase.database().ref('users'),
        "list": [],
        "exist":{
          "mail":false,
          "doc":false
        }
      },
      "agencies":{
        "ref": firebase.database().ref('agencies'),
        "list": [],
        "exist":false
      },
      "notifications":{
        "ref": firebase.database().ref('notifications')
      },
      "loader":{
        "register":false
      }
    }
  },
  beforeCreate:function(){},
  created:function() {
    this.getCitiesList()
  },
  mounted:function() {
    document.addEventListener('DOMContentLoaded', function() {
      M.Parallax.init(document.querySelectorAll('.parallax'))
      M.Tabs.init(document.querySelectorAll('.tabs'))
      M.Modal.init(document.querySelectorAll('.modal'))
    })
    //this.success()
  },
  updated:function() {
    M.Parallax.init(document.querySelectorAll('.parallax'))
    M.Tabs.init(document.querySelectorAll('.tabs'))
  },
  methods:{
    selectTab(tab){
      var instance = M.Tabs.getInstance(document.getElementById("tabs"))
      instance.select(tab)
    },
    getCitiesList:function() {
      this.cities.ref.once('value', (cities)=> {
        cities.forEach((city)=> {
          this.cities.list.push(city.val())
        })
      })
    },
    sendEmail:function() {

      this.$root.messageService('toast','Revisa tu email 📧 🤖')
      var mail = ''+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#d6d6d5" class="" style="background-color: #efefef;border:0;border-collapse:collapse;border-spacing:0;">'+
        '<tbody><tr><td align="center" style="display:block">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:0; border-collapse:collapse; border-spacing:0; max-width:700px">'+
        '<tbody><tr><td style="background-color: #0b65c1;">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" style="border:none; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr><td class="x_outsidegutter" align="left" style="padding:0 14px 0 14px">'+
        '<table border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr><td>'+
        '<table border="0" cellpadding="0" cellspacing="0" class="x_t12of12" align="left" style="border:none; border-collapse:collapse; border-spacing:0; max-width:672px; width:100%">'+
        '<tbody><tr><td style="padding-left:12px; padding-right:12px">'+
        '<table border="0" cellpadding="0" cellspacing="0" style="border:0;border-collapse:collapse;border-spacing:0;width:100%;margin-top: 40px;margin-bottom: 40px;">'+
        '<tbody><tr><td align="center" valign="middle" style="direction:ltr; margin:0; padding:0; width:12%">'+
        '<table border="0" cellpadding="0" cellspacing="0" style="border:0; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr><td style="direction:ltr">'+
        '<img src="https://www.aviatur.com/version/478/assets/aviatur_assets/img/header/aviatur_logo_beach.svg" width="75" height="" border="0" class="x_bitTop" id="OWATemporaryImageDivContainer648655" style="clear:both;display:block;height:auto;max-height: 95px;max-width: 125px;min-width: 115px;outline:0;text-decoration:none;width:100%;">'+
        '</td></tr></tbody></table></td>'+
        '<td align="center" style="padding:0; margin:0; direction:ltr; text-align:left; width:88%">'+
        '&nbsp; </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_tron" style="border:0;border-collapse:collapse;border-spacing:0;margin:auto;max-width:700px;"><tbody><tr><td align="center">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" class="x_basetable" style="background-color:#fff; border:0; border-collapse:collapse; border-spacing:0; margin:auto">'+
        '<tbody><tr><td align="center">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_basetable" style="border:0; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td align="center" style="background-color:#ffffff">'+
        '<table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_basetable" style="border:0; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td>'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_basetable" style="border:0; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td>'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:0; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td>'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr><td width="700" valign="top" align="center" style="width:700px; height:auto"><div>'+
        '<table border="0" cellpadding="0" cellspacing="0" class="x_t10of12" align="center" style="border:none; border-collapse:collapse; border-spacing:0; max-width:560px; width:100%">'+
        '<tbody><tr><td style="padding-left:12px; padding-right:12px; direction:ltr; text-align:left">'+
        '<table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none; border-collapse:collapse; border-spacing:0; table-layout:fixed; width:100%">'+
        '<tbody><tr><td style="direction:ltr; text-align:left">'+
        '<table border="0" cellpadding="0" cellspacing="0" width="100%" class="" style="border:none; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr>'+
        '<td class="x_lhreset" style  ="font-size:0px;line-height:1px;padding-bottom: 10px;direction:ltr;text-align:left;">'+
        '&nbsp;</td></tr></tbody></table>'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="border:none; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr>'+
        '<td class="x_outsidegutter" align="left" style="padding:0px 14px 0px 14px; direction:ltr; text-align:left">'+
        '<table border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr>'+
        '<td style="direction:ltr; text-align:left">'+
        '<table border="0" cellpadding="0" cellspacing="0" class="x_t8of12" align="center" style="border:none; border-collapse:collapse; border-spacing:0; max-width:460px; width:100%">'+
        '<tbody><tr>'+
        '<td style="padding-left:12px; padding-right:12px; direction:ltr; text-align:left">'+
        '<table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="border:none; border-collapse:collapse; border-spacing:0; table-layout:fixed; width:100%">'+
        '<tbody><tr><td style="padding-top:30px">&nbsp;</td></tr><tr>'+
        '<td class="x_h2 x_h2-p1" style="color:rgb(0,0,0); font-family:ClanPro-Book,HelveticaNeue-Light,Helvetica Neue Light,Helvetica,Arial,sans-serif; font-size:24px; line-height:30px; padding-top:20px; padding-bottom:22px; direction:ltr; text-align:left;text-transform: capitalize">'+
        this.agency.agency+', gracias por registrarse en AVIATUR Marcas Blancas, Confirma tu cuenta </td> '+
        '</tr><tr>'+
        '<td class="x_p1 x_p1-p1" style="color:rgb(89,89,89); font-family:ClanPro-Book,HelveticaNeue-Light,Helvetica Neue Light,Helvetica,Arial,sans-serif; font-size:16px; line-height:28px; padding-bottom:28px; direction:ltr; text-align:left">'+
        '<p>Confirmar tu cuenta es el primer paso para ser una marca blanca AVIATUR,</p>'+
        '<p>Si uno de nuestros directores comerciales les invito a llenar el formulario, el proceso lo llevaran a cabo con dicho director,</p>'+
        '<p>Para confirmar con tu correo da click en: <a href="https://whitemanager.grupoaviatur.com/#/confirmation/'+this.agency.nit+'">Aquí</a>,</p>'+
        '<p>Para cualquier información o duda frente al proceso de marca blanca pueden comunicarse al 3817111,  extensión 10382, o al correo: yared.toro@aviatur.com</p>'+
        '</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>'+
        '<table border="0" cellpadding="0" cellspacing="0" width="100%" class="" style="border:none; border-collapse:collapse; border-spacing:0; width:100%">'+
        '<tbody><tr>'+
        '<td class="x_lhreset" style="font-size:0px; line-height:1px; padding-bottom:70px; direction:ltr; text-align:left">'+
        '&nbsp;</td></tr></tbody></table></td></tr><tr><td style="direction:ltr; text-align:left"></td>'+
        '</tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></td></tr>'+
        '</tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>'+
        '</td></tr></tbody></table></td></tr></tbody></table>'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_tron" style="border:0; border-collapse:collapse; border-spacing:0; margin:auto; max-width:700px; background-color:#ffffff">'+
        '<tbody><tr><td style="display:block">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" bgcolor="#ffffff" style="border:none; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td align="center" style="background-color: rgb(11, 101, 193);text-align:left;">'+
        '<table border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td align="center" style="text-align:left">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0; max-width:700px">'+
        '<tbody><tr><td style="padding:0px 26px; text-align:left">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0; max-width:648px; table-layout:fixed">'+
        '<tbody><tr><td style="font-size:0px; line-height:0px; padding-top:20px; text-align:left">&nbsp;</td>'+
        '</tr><tr><td style="text-align:left">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td align="left" style="text-align: center;"><h1></h1>'+
        '<table border="0" cellpadding="0" cellspacing="0" class="x_basetable" align="left" style="border:none;border-collapse:collapse;border-spacing:0;max-width: 100%;text-align: center;">'+
        '<tbody><tr><td style="padding-top:40px;text-align: center;">'+
        '<table border="0" cellpadding="0" cellspacing="0" class="x_basetable" align="left" style="border:none;border-collapse:collapse;border-spacing:0;">'+
        '<tbody><tr>'+
        '<td align="left" style="text-align:left"><img src="https://www.aviatur.com/version/478/assets/aviatur_assets/img/header/aviatur_logo_beach.svg" width="90" height="20" alt="" class="" id="OWATemporaryImageDivContainer1735528" style="border:none; clear:both; display:block; max-width:100%; outline:none; text-decoration:none; width:auto"> </td>'+
        '</tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr>'+
        '<td style="padding:40px 0px 0px 0px; text-align:left">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0"><tbody><tr>'+
        '<td height="1" style="font-size:0px;line-height:0px;background: rgb(255, 255, 255);text-align:left;">'+
        '&nbsp;</td></tr></tbody></table></td></tr><tr><td style="text-align:left">'+
        '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="" style="border:none; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td valign="top" style="vertical-align:top; text-align:left">'+
        '<table border="0" cellpadding="0" cellspacing="0" class="x_basetable" align="left" style="border:none; border-collapse:collapse; border-spacing:0; max-width:313px; table-layout:fixed">'+
        '<tbody><tr><td style="text-align:left">'+
        '<table border="0" cellpadding="0" cellspacing="0" class="x_basetable" width="100%" align="left" style="border:none; border-collapse:collapse; border-spacing:0">'+
        '<tbody><tr><td align="left" style="text-align:left"><table border="0" cellpadding="0" cellspacing="0" class="x_basetable" align="left" style="border:none; border-collapse:collapse; border-spacing:0; max-width:205px; table-layout:fixed"><tbody><tr>'+
        '<td class="x_p3" align="left" style="color: rgb(255, 255, 255);font-family:ClanPro-Medium,Helvetica,Arial,sans-serif;font-size:12px;line-height:18px;padding-top:30px;text-align:left;">'+
        '    © 2017 AVIATUR'+
        '    <br>'+
        '    Calle 19 #4-62'+
        '    <br>'+
        '    Teléfono: 3817111'+
        '    <br>'+
        '    Bogotá D.C, Colombia'+
        '    <br>'+
        '    <a href="https://www.aviatur.com" style="color:white">www.aviatur.com</a>'+
        '    <br>'+
        '<a href="&#10;http://whitemanager.grupoaviatur.com/" style="color:white">'+
        'http://whitemanager.grupoaviatur.com/</a>'+
        '</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr>'+
        '<td style="font-size:0px; line-height:0px; padding-top:60px; text-align:left">&nbsp;</td>'+
        '</tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>'+
        '</td></tr></tbody></table></td></tr></tbody></table>';
      var email = {
        to:this.agency.mail,
        subject:this.agency.agency+", Gracias por registrarte en AVIATUR",
        message:mail
      }
      var data = new FormData()
      data.append('to',email.to)
      data.append('subject',email.subject)
      data.append('message',email.message)
      fetch('dir/sendMail.php',
      {
        body:data,
        method: 'POST',
        headers:{
          cache: false,
          contentType:false,
          processData:false
        }
      })
      .then(res=>res.text().then((s)=>{
        try {
          if (s=="ok") {
            this.upload.loader=false
            this.$root.messageService("toast", "Logo subido")
            this.upload.time = new Date().getTime()
          }
          if (s=="error" || s!="ok") {
            this.upload.loader=false
            this.$root.messageService("toast", "Logo no subido")
          }
        } catch (e) {
          this.upload.loader=false
          this.$root.messageService("toast", "Logo no subido")
        }
      }))
      .then(error => console.log('error:', error))
      .then(response => console.log('Success:', response))

      /*
      this.$ajax({
        url: 'dir/sendMail.php',
        data: dataMail,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: (data)=> {
          try {
            if (data.errors) {
              //console.log('Ha ocurrido un error al enviar el correo!!')
            }else{
              //console.log('El Correo ha sido enviado exitosamente!!')
              //console.log(data)
            }
          } catch (e) {
            //console.log('entro en excepción')
            //console.log(e)
          }
        }
      })*/
    },
    notification:function() {
      this.notifications.ref.child(this.user.document).push().set({
        icon:"notifications_active",
        date:new Date().toString(),
        name:"Gracias por registrarse",
        url:"myagencydesign",
        description:"Edite el diseño de su pagina"
      })
      this.notifications.ref.child('admin').push().set({
        icon:"notifications",
        date:new Date().toString(),
        name:"Registro de agencia "+this.agency.agency,
        url:"agencies",
        description:"..."
      })
    },
    success:function () {
      this.$root.messageService('toast','Perfecto, su registrado está listo 🤖')
      var Modalelem = document.querySelector('.modal-success');
      var instance = M.Modal.init(Modalelem)
      instance.open()
    },
    register: function() {
      this.users.exist = false
      this.users.ref.once('value', (users)=> {
        users.forEach((user)=> {
          if (user.val().document == this.user.document) {
            this.$root.messageService('toast','Lo sentimos, tu Cedula se encuetra registrado 🤖')
            this.users.exist = true
            return
          }
          if (user.val().mail == this.user.mail) {
            this.$root.messageService('toast','Lo sentimos, tu Email se encuetra registrado 🤖')
            this.users.exist = true
            return
          }
        })
        if (this.users.exist == false) {
          this.user.agency = this.agency.nit
          this.user.mail = this.agency.mail
          this.user.city = this.agency.country
          this.user.company = "aviatur"
          this.user.fRol = 5
          this.user.password = this.user.mail
          firebase.database().ref('users/'+ this.user.document)
          .set(this.user)
          .then(()=> {
            this.agencies.ref.once('value', (agencies)=> {
              agencies.forEach((agency)=> {
                if (agency.val().nit == this.agency.nit) {
                  this.$root.messageService('toast','Lo sentimos, tu Nit se encuetra registrado 🤖')
                  this.agencies.exist = true
                  return
                }
              })
              if (this.agencies.exist == false) {
                this.agency.state=1
                firebase.database().ref('agencies/'+ this.agency.nit)
                  .set(this.agency)
                  .then(()=> {
                    this.success()
                    this.notification()
                    this.sendEmail()
                })
                .catch(function (error) {
                  console.log(error)
                  this.$root.messageService('toast','Algo salio mal, recarga la pagina por fa 🤖')
                })

              }
            })
          })
          .catch(function (error) {
            console.log(error)
            this.$root.messageService('toast','Algo salio mal, recarga la pagina por fa 🤖')
          })
        }
      })
    }
  },
}
</script>
