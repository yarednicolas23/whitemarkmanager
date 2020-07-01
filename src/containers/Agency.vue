<style scoped>
  .bbody,
  :after,
  :before {
    box-sizing: border-box;
  }
  .bbody {
    margin: 0px auto;
    text-align: center;
    transition: background-color 0.2s cubic-bezier(0, -1.85, 0.27, 1.75);
  }
  .toggle {
    position: relative;
    top: 0%;
    left: 0%;
    transform: translate3d(-0%, -0%, 0);
  }
  .toggle label {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: #fd1015;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.1), 0px 9px 15px 0px #ef4247;
    -webkit-tap-highlight-color: transparent;
  }
  .toggle label:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.2s cubic-bezier(0, -1.85, 0.27, 1.75);
    height: 42px;
    width: 42px;
    background-color: #fd0f14;
    border-radius: 46px;
    box-shadow: inset 0px 0px 0px 8px #fff;
  }
  .toggle .checkbox-active + label {
    background-color: #57de72;
    box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.1), 0px 9px 15px 0px rgba(3, 132, 28, 0.5411764706);
  }
  .toggle .checkbox-active + label:before {
    width: 10px;
    background-color: #fff;
  }

  .on {
    background-color: #6fc57c;
  }
  .on .toggle:before {
    color: rgba(62, 160, 81, 0.89);
  }
  .on .toggle:after {
    color: #fff;
  }
  @media screen and (max-width:1025px) {
    .chrome {
      width: 90vw;
    }
  }
  /*
    Seacher review
  */
  .input-review{
    background-color: white;
    border: none;
    margin: 0;
    padding: 0 8px;
    line-height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
  .btn-seacher{
    background-color: #253036;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding: 15px 5px;
    -webkit-box-shadow: inset 0px -30px 40px -10px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px transparent;
    -moz-box-shadow: inset 0px -30px 40px -10px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px transparent;
    box-shadow: inset 0px -30px 40px -10px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px transparent;
    padding-bottom: 10px;
  }

  .search__engine {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px 20px !important;
    margin: 20px;
  }
  .row .col.navbutton {
      width: 11.88%;
      margin-left: auto;
      left: auto;
      right: auto;
  }
  .btn2 {
      display: inline-block;
      vertical-align: middle;
      font: inherit;
      text-align: center;
      border: none;
      margin: 0;
      cursor: pointer;
      overflow: visible;
      padding: 4px 17px;
      background-color: #AD0E0E;
      border: 1px solid #AD0E0E;
      border-radius: 5px;
      color: white;
      outline: none;
  }
  .btn-group > .btn2:not(.btn--inactive), .btn2-group > .btn--slim:not(.btn--inactive) {
      background-color: #fdc80e;
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .search__btn-group {
      float: right;
      margin: 14px 0;
      border-radius: 5px;
  }
  .btn-group > .btn2:first-child {
      border-radius: 5px 0 0 5px;
  }
  .btn-group {
      -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.12);
      -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.12);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.12);
  }
  .btn-group > .btn2:last-child {
      border-radius: 0 5px 5px 0;
      margin-left: -1px;
  }
  .btn-group > .btn2:not(:first-child):not(:last-child) {
      border-radius: 0;
      margin-left: -1px;
  }
  .btn-group > .btn2 {
      float: left;
      position: relative;
  }
  .btn-group > .btn2 {
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      border-color: rgba(158, 10, 97, 0);
  }
  .btn--inactive {
      font-weight: 300;
      background-color: rgba(0, 0, 0, 0.5);
      border-color: rgba(0, 0, 0, 0.5);
  }
  .btn--submit {
      font-weight: 300;
      background-color: #c81111;
      border-color: #c81111;
  }
  .page-foot__social {
      background-color: #009bf8;
      color: #fff;
      text-align: center;
      padding-top: 18px;
  }
  .wrapper {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      margin: 0 auto;
      padding-right: 0;
      padding-left: 0;
  }
  .grid {
      position: relative;
      clear: both;
      margin: 0 auto;
      padding: 1em 0 4em;
      list-style: none;
      color: black;
      text-align: center;
      font-family: Verdana, sans-serif;
  }
  .grid {
      width: 25%;
      float: left;
      padding-left: 9px;
      padding-right: 9px;
  }
  .page-foot__legal {
      padding-right: 18px;
      font-size: 11px;
      font-size: 0.6875rem;
      line-height: 1.63636;
      display: -webkit-box;
  }
  .page-head__contact {
      padding: 14px 0;
      position: relative;
  }
  .page-head__contact li {
      line-height: 27px;
      display: -webkit-inline-box;
  }
  .divider {
      height: 1px;
      overflow: hidden;
      background-color: #446dd1;
      width: 100%;
  }

  /*
    Color Picker
  */
  .color-picker {
    height:148px;
    width:224px;
    box-shadow:0 2px 5px rgba(0,0,0,0.25);
    background-color:#eee;
    display:inline-flex;
    flex-direction:row;
    flex-wrap:wrap;
    transform: scale(0,0);
    transform-origin: bottom left;
    transition: transform 0.2s ease;
    will-change: transform;
  }
  .hex {
    width:96px;
    height:60px;
    padding:8px;
    box-sizing:border-box;
  }
  input[type=color] {
    width:64px;
    height:32px;
    box-sizing:border-box;
    background-color:transparent;
    border:none;
    cursor:pointer;
    outline:none;
    transition:box-shadow 0.5s ease;
  }
  input[type=color]:active, input[type=color]:focus {
    box-shadow:0 5px 30px rgba(0,0,0,0.25),
      0px -5px 10px rgba(0,0,0,0.25);
  }
  .color-picker2 > div {
    width:32px;
    height:32px;
    cursor:pointer;
  }
  .translate {
    transform:translate(0);
    position:absolute;
    z-index:99;
    left:0px;
    top:36px;
  }
  .container-background{
    background-size: cover;
  }
  .color-picker3 {
    width: 100%;
    padding: 40px 0;
  }

  .base-colors,
  .varied-colors {
    overflow: hidden;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-pack: center;
            justify-content: center;
    width: 100%;
  }

  .color,
  .color-var {
    float: left;
    border-radius: 50%;
    cursor: pointer;
  }

  .color {
    -webkit-transition: all .2s;
    transition: all .2s;
    width: 25px;
    height: 25px;
    margin: 20px;
  }
  .color.active {
    -webkit-transform: scale(1.3, 1.3);
            transform: scale(1.3, 1.3);
  }

  .color-var {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
    width: 40px;
    height: 40px;
    margin: 10px;
  }
  .color-var.visible {
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
  }
  .color-var.active {
    -webkit-transform: scale(1.3, 1.3);
            transform: scale(1.3, 1.3);
  }
</style>
<template>
  <div class="row blue-grey darken-4 full-screen">
      <SideBar/>
      <div class="col s12 m12 l10 no-padding right">
        <!-- Loader -->
        <div class="col s12 center" v-show="loader" style="margin-top:5%">
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
          <h5 class="white-text light">Cargando...</h5>
        </div>
        <div class="col s12 mono center white-text" v-if="agency == 0">
          <h1>😱</h1>
          <h3 class="thin">No encontramos esta agencia, es probable que no exista</h3>
        </div>
        <!-- General Data -->
        <div class="no-padding"  v-show="!loader">
          <!-- Tabs  -->
          <div>
             <div class="col s12">
               <ul class="tabs transparent white-text">
                 <li class="tab"><a class="active" href="#general">Información General</a></li>
                 <li class="tab"><a href="#info">Detalles de la agencia</a></li>
                 <li class="tab"><a href="#details">Detalles Tecnicos</a></li>
                 <!--<li class="tab hide"><a href="#atached">Adjuntos</a></li>-->
                 <li class="tab"><a href="#reports">Reportes</a></li>
                 <li class="tab"><a href="#web">Diseño web</a></li>
               </ul>
             </div>
             <div id="general" class="col s12">
               <div class="container">
                  <div class="col s12">
                    <div>
                      <div class="white-text">
                        <h4><b>{{agency.agency}}</b></h4>
                        <div class="row">
                          <div class="col s12 m12 l2">
                            <div class="input-field">
                              <div class="image_wrapper" style="margin-left:0">
                                <div class="file-field input-field">
                                  <form id="uploadLogo" enctype="multipart/form-data">
                                    <div class="circle center" v-bind:class="img.color" style="padding:5px 0" v-if="img.src==''">
                                      <h3 class="light">{{this.letter}}</h3>
                                    </div>
                                    <img class="image"  v-show="img.src!=''" :src="img.src" v-on:error="ImgError" alt="Imagen perfil Aviatur Marcas Blancas">
                                    <div class="center no-margin"><i class="material-icons" :class="agency.confirmation==true?'green-text':'red-text'">{{agency.confirmation==true?'check_circle':'cancel'}}</i></div>
                                    <div class="center thin">{{agency.confirmation==true?'Cuenta confirmada':'Cuenta No confirmada'}}</div>

                                    <span class="add hide"><a class="btn-floating blue waves-effect waves-light"><i class="large material-icons">edit</i><input type="file" v-on:change="uploadLogo($event)"></a></span><br><br>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col s12 m12 l10">
                            <div class="input-field">
                              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Nombre de la Agencia">account_circle</i>
                              <input name="agency" type="text" class="white-text" v-model="agency.agency" >
                              <label for="agency">Nombre de la Agencia</label>
                            </div>
                            <div class="input-field">
                              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Correo de la Agencia">mail</i>
                              <input name="mail" type="text" class="white-text" v-model="agency.mail">
                              <label for="mail">Correo de la Agencia</label>
                            </div>
                            <div class="input-field">
                              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Pagina web de la Agencia">web</i>
                              <input name="web" type="text" class="white-text" v-model="agency.web">
                              <label for="web">URL</label>
                            </div>
                            <div class="input-field">
                              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Movil de la Agencia">phone_iphone</i>
                              <input name="movil" type="number" class="white-text" v-model="agency.phone">
                              <label for="icon_prefix">Movil de la Agencia</label>
                            </div>
                            <div class="input-field">
                              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Estado de la Agencia">info_outline</i>
                              <div class="col s12" style="padding-left: 40px;">
                                <select class="browser-default blue-grey darken-4 white-text  " v-bind:value="agency.state" v-model.number="agency.state">
                                  <option value="" disabled selected>Estado de la Agencia</option>
                                  <option value="0">Online</option>
                                  <option value="1">Inicial</option>
                                  <option value="2">Offline</option>
                                  <option value="3">En proceso</option>
                                  <option value="4">No continuo</option>
                                </select>
                              </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col s12" style="padding-left: 33px; padding-right: 33px;">
                  <div class="card " v-bind:class="agency.state==0?'green accent-1':'red accent-1'">
                    <div class="card-content">
                      <div class="bbody toggle">
                        <div id="checkbox" class="" v-bind:class="agency.state==0?'checkbox-active':''"></div>
                        <label for="checkbox" v-on:click="openModalActivateMark()"></label>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             <div id="info" class="col s12">
               <div class="container">
                  <div class="col s12">
                    <div>
                      <div class="white-text">
                        <h4><b>{{agency.agency}}</b></h4>
                        <div class="row">
                          <div class="col s12 info">
                            <table>
                              <tr clas="">
                                <td class="">
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="NIT">fingerprint</i>
                                    <input class="white-text" readonly="readonly" name="nit" type="text" v-model="agency.nit">
                                    <label for="icon_prefix">NIT</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="RNT">beenhere</i>
                                    <input class="white-text" readonly="readonly" name="rnt" type="text"  v-model="agency.rnt">
                                    <label for="icon_prefix">RNT</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Representante legal">gavel</i>
                                    <input class="white-text" name="legal" type="text" v-model="agency.legal"/>
                                    <label for="icon_prefix">Representante legal</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Fecha de Registro">date_range</i>
                                    <input class="white-text" name="date" type="text" v-model="agency.date">
                                    <label for="icon_prefix">Fecha de Registro</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Cuidad de la Agencia">location_on</i>
                                    <input class="white-text" name="" readonly="readonly" type="text" v-model="agency.country">
                                    <label for="icon_prefix">Cuidad de la Agencia</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Dirreción de la Agencia">my_location</i>
                                    <input class="white-text" name="location" type="text" v-model="agency.location">
                                    <label for="icon_prefix">Dirreción de la Agencia</label>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             <div id="details" class="col s12">
               <div class="container">
                  <div class="col s12">
                    <div>
                      <div class="white-text">
                        <h4><b>{{agency.agency}}</b></h4>
                        <div class="row">
                          <div class="col s12 info">
                            <table>
                              <tr clas="">
                                <td class="">
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Referer">vpn_key</i>
                                    <input class="white-text" name="referer" type="text" v-model="agency.referer">
                                    <label for="referer">Referer</label>
                                  </div>
                                </td>
                              </tr>
                              <tr clas="">
                                <td class="">
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Centro de Costos">attach_money</i>
                                    <input class="white-text" name="costcenter" type="text" v-model="agency.costcenter">
                                    <label for="costcenter">Centro de Costos</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Fecha de Registro">date_range</i>
                                    <input class="white-text" name="date" type="text" v-model="agency.dateend">
                                    <label for="icon_prefix">Fecha de Entrega</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Comercial de la Negociación">person_pin</i>
                                    <input class="white-text" name="comercial" type="text" v-model="agency.comercial"/>
                                    <label for="comercial">Comercial de la Negociación</label>
                                  </div>
                                </td>
                              </tr>
                            <!--<tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Tipo de Marca Blanca">web</i>
                                    <input name="type" type="text" v-model="agency.type"/>
                                    <label for="type">Tipo de Marca Blanca</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="¿Comparte Imagen Corporativa?">photo_album</i>
                                    <input readonly="readonly" name="imgCorp" type="text" v-model="agency.imgCorp">
                                    <label for="imgCorp">¿Comparte Imagen Corporativa?</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="¿Tiene personal para administrar el sitio web?">person_pin</i>
                                    <input readonly="persons" name="personal" type="text" v-model="agency.persons">
                                    <label for="persons">¿Tiene personal para administrar el sitio web?</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Numero de personas administradoras del sitio">person_add</i>
                                    <input readonly="readonly" name="personsNum" type="text" v-model="agency.personsNum">
                                    <label for="personsNum">Numero de personas administradoras del sitio</label>
                                  </div>
                                </td>
                              </tr>-->
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
             <!--<div id="atached" class="col s12">
               <div class="container">
                  <div class="col s12">
                    <div>
                      <div class="white-text">
                        <h4><b>{{agency.agency}}</b></h4>
                        <div class="row" style="margin: 0px;">
                          <div>
                            <span>Liquidaciones</span>
                          </div>
                          <span class="col s6 center" :key="index" v-for="(file,index) in liquidations">
                            <i class="material-icons blue-text col s12" style="font-size:4rem">attachment</i>
                            <a target="_blank" :href="'../dir/marks/'+agency.referer+'/'+file">
                              {{file}}
                            </a>
                            <i class="large material-icons red-text pointer" style="font-size:1.2rem" v-on:click="deleteLiquidation(file)">delete</i>
                          </span>
                          <form id="uploadLiquidation" class="col s12" enctype="multipart/form-data">
                            <div class="file-field input-field">
                              <div class="btn indigo">
                                <span>File</span>
                                <input type="file" v-on:change="uploadLiquidation($event)">
                              </div>
                              <div class="file-path-wrapper">
                                <input class="file-path validate" type="text"  v-model="upload.title">
                              </div>
                            </div>
                            <div class="col s12 center " v-if="upload.loader" >
                              <div class="preloader-wrapper small active center">
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
                              <p class="center">Cargando</p>
                            </div>
                          </form>
                          <div>
                            <span>PDF</span>
                          </div>
                          <a class="col s6 center" target="_blank" :key="index" :href="'../dir/marks/'+agency.referer+'/'+file" v-for="(file,index) in agency.files ">
                            <i class="material-icons blue-text" style="font-size:4rem">insert_drive_file</i>
                            <p>{{file}}</p>
                          </a>
                          <form id="uploadFile" class="col s12" enctype="multipart/form-data">
                            <div class="file-field input-field">
                              <div class="btn indigo">
                                <span>File</span>
                                <input type="file" v-on:change="uploadFile($event)">
                              </div>
                              <div class="file-path-wrapper">
                                <input class="file-path validate" type="text"  v-model="upload.title">
                              </div>
                            </div>
                            <div class="col s12 center " v-if="upload.loader" >
                              <div class="preloader-wrapper small active center">
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
                              <p class="center">Cargando</p>
                            </div>
                          </form>
                          <div>
                            <span>Notas</span>
                          </div>
                          <div>
                            <ul class="collection">
                              <li class="collection-item avatar blue-grey darken-3" :key="index" v-for="(note,index) in agency.notes ">
                                <i class="material-icons circle indigo">speaker_notes</i>
                                <span class="title">{{note.value }} {{index}}</span>
                                <br>
                                <small>{{note.date }} </small>
                                <a class="secondary-content red-text pointer" v-on:click="removeNote(index)"><i class="material-icons">delete_forever</i></a>
                              </li>
                            </ul>
                            <div class="input-field row">
                              <form class="" v-on:submit.prevent="addNote(agency)">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea id="note" class="materialize-textarea" data-length="120" required v-model="note.value"></textarea>
                                <label for="note">Agregar nota</label>
                                <button class="btn indigo waves-effect" type="submit" name="button">Agregar <i class="material-icons left">add</i></button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>-->
             <div id="reports" class="col s12">
               <div class="container">
                  <div class="white-text" style="margin-top: 25px">
                      <div class="row">
                        <div class="col s2">
                          <select v-model="formReport.type" class="browser-default blue-grey darken-4">
                            <option value="sales">Ventas</option>
                            <option value="comission">Comisiones</option>
                          </select>
                        </div>
                        <div class="col s2">
                          <select v-model="formReport.year" class="browser-default blue-grey darken-4">
                            <option value="" disabled selected>Año</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                          </select>
                        </div>
                        <div class="col s2">
                          <select v-model="formReport.month" class="browser-default blue-grey darken-4">
                            <option value="" disabled selected>Mes</option>
                            <option value="enero">Enero</option>
                            <option value="febrero">Febrero</option>
                            <option value="marzo">Marzo</option>
                            <option value="abril">Abril</option>
                            <option value="mayo">mayo</option>
                            <option value="junio">Junio</option>
                            <option value="julio">Julio</option>
                            <option value="agosto">Agosto</option>
                            <option value="septiembre">Septiembre</option>
                            <option value="octubre">octubre</option>
                            <option value="noviembre">Noviembre</option>
                            <option value="diciembre">Diciembre</option>
                          </select>
                        </div>
                        <div class="input-field col s6">
                          <i class="material-icons prefix">attach_money</i>
                          <input name="movil" type="number" v-model.number="formReport.value">
                          <label for="icon_prefix">Liquidación</label>
                        </div>
                      </div>
                      <div class="col s12 center" style="margin-top: 0px; padding-top: 10px; padding-bottom: 6px;margin-bottom: 65px;">
                          <a class="modal-trigger btn blue-grey darken-2 waves-effect waves-light tooltipped"
                              data-position="bottom"
                              data-delay="10"
                              data-tooltip="Guardar Estadisticas"
                              v-on:click="saveReport()">
                            <i class="white-text material-icons">insert_chart</i>
                          </a>
                      </div>
                  </div>
                </div>
               <div class="col s12">
                 <div class="col s12 m6 l6">
                   <div>
                     <div class="white-text">
                       <h5 class="card-title">Ventas</h5>
                       <canvas id="sales" width="400" height="400"></canvas>
                     </div>
                   </div>
                 </div>
                 <div class="col s12 m6 l6">
                   <div class=" blue-grey darken-4">
                     <div class="white-text">
                       <h5 class="card-title">Comisiones</h5>
                       <canvas id="commission" width="400" height="400"></canvas>
                     </div>
                   </div>
                 </div>
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
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div id="web" class="col s12" v-if="agency.agency!=null">
               <div class="col s12">
                 <ul class="row">
                   <li class="col s2">
                     <a class="btn-flat waves-effect waves-light modal-trigger col s12 center tooltipped"
                     data-target="image"
                     data-position="bottom"
                     data-delay="10"
                     data-tooltip="Cambiar Logo"><i class="white-text material-icons">photo_size_select_large</i></a>
                   </li>
                   <li class="col s2 hide">
                     <a class="btn-flat waves-effect waves-light modal-trigger col s12 center tooltipped"
                     data-position="bottom"
                     data-delay="10"
                     data-tooltip="Cambiar Favicon"
                     data-target="favicon"><i class="white-text material-icons">burst_mode</i></a>
                   </li>
                   <li class="col s2">
                     <a class="btn-flat waves-effect waves-light modal-trigger col s12 center tooltipped"
                     data-position="bottom"
                     data-delay="10"
                     data-tooltip="Cambiar Color Base"
                     data-target="color"><i class="white-text material-icons">format_color_fill</i></a>
                   </li>
                   <li class="col s2">
                     <a id="menu" class="btn-flat waves-effect waves-light modal-trigger col s12 center tooltipped"
                     data-position="bottom"
                     data-delay="10"
                     data-tooltip="Botones Visibles"
                     data-target="buttons"><i class="white-text material-icons">visibility</i></a>
                   </li>
                   <li class="col s2" v-show="false">
                     <a class="btn-flat waves-effect waves-light modal-trigger col s12 center tooltipped"
                     data-position="bottom"
                     data-delay="10"
                     data-tooltip="Información Visible"
                     data-target="info"><i class="white-text material-icons">format_shapes</i></a>
                   </li>
                   <li class="col s2">
                     <a class="btn-flat waves-effect waves-light modal-trigger col s12 center tooltipped"
                     data-position="bottom"
                     data-delay="10"
                     data-tooltip="Cambiar Fondo"
                     data-target="background"><i class="white-text material-icons">collections</i></a>
                   </li>
                   <li class="col s2">
                     <a class="btn-flat blue-grey lighten-1 waves-effect waves-light modal-trigger col s12 center tooltipped"
                     data-position="bottom"
                     data-delay="10"
                     data-tooltip="Guardar Cambios"
                     v-on:click="SaveChanges()"><i class="white-text material-icons">save</i></a>
                   </li>
                 </ul>
               </div>
               <div class="col s12 m12 l12 right no-padding">
                 <div class="col s12 no-padding">
                 <!--<iframe class="hide" :src="'https://'+agency.web" style="width:100%;height:100vh"></iframe>-->
                 <!-- Chrome Preview -->
                 <div class="col s12 m12">
                   <div class="chrome">
                     <div class="tabs-chrome">
                       <div class="tab-1 tab selt" style="background:#4385f5">
                         <p>{{agency.agency}}</p>
                         <span class="close">x</span>
                       </div>
                     </div>
                     <div class="bar googleb">
                       <div class="buttons">
                         <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                           <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                         </svg>
                         <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                           <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                         </svg>
                         <svg style="width:30px;height:30px" id="rel" viewBox="0 0 24 24">
                           <path d="M19,12H22.32L17.37,16.95L12.42,12H16.97C17,10.46 16.42,8.93 15.24,7.75C12.9,5.41 9.1,5.41 6.76,7.75C4.42,10.09 4.42,13.9 6.76,16.24C8.6,18.08 11.36,18.47 13.58,17.41L15.05,18.88C12,20.69 8,20.29 5.34,17.65C2.22,14.53 2.23,9.47 5.35,6.35C8.5,3.22 13.53,3.21 16.66,6.34C18.22,7.9 19,9.95 19,12Z" />
                         </svg>
                       </div>
                       <p contenteditable="true" class="url">{{agency.web}}</p>
                       <div class="urlfiller"></div>
                     </div>
                     <svg class="menu" style="width:24px;height:24px" viewBox="0 0 24 24">
                       <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                     </svg>
                     <div class="content">
                       <div class="row">
                         <div class="col s12 container-background" style="box-shadow: -10px -10px 10px 10px #aaaaaa;" v-bind:style="'background-image:url(https://whitemark.grupoaviatur.com/assets/whitemark_assets/img/header/_covers/'+agency.page.background+'.jpg)'">
                           <div class="wrapper" v-bind:class="agency.page.background=='no-image'?'':'black-trasnparent'" style="padding-bottom:20px;">
                             <div class="col s12 no-padding" v-bind:style="'color:'+agency.page.color + ';' ">
                               <div class="col">
                                 <p><b>Dirección: </b> {{agency.location}}</p>
                               </div>
                               <div class="col">
                                 <p>| <b> Telefono: </b> {{agency.location}} | </p>
                               </div>
                               <div class="col">
                                 <p><b>Correo: </b>{{agency.mail}}</p>
                               </div>
                             </div>
                             <div class="col s12 divider"></div>
                             <div class="col s4">
                               <img class="image" :src="agency.referer!=null?'https://whitemanager.grupoaviatur.com/dir/marks/'+agency.referer+'/'+agency.referer+'.png?'+upload.time+'':''" style="max-height:150px;" alt="Imagen perfil Aviatur Marcas Blancas">
                             </div>
                             <div class="col s12">
                               <div class="col navbutton" v-if="agency.page.button.flights">
                                 <div class="btn-seacher" v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/flight.svg" alt="">
                                   Vuelos
                                 </div>
                               </div>
                               <div class="col navbutton" v-if="agency.page.button.hotels">
                                 <div class="btn-seacher"  v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/hotel.svg" alt="">
                                   Hoteles
                                 </div>
                               </div>
                               <div class="col navbutton" v-if="agency.page.button.flightsAndHotels">
                                 <div class="btn-seacher"  v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/flight+hotel.svg" alt="">
                                   Vuelos + Hotel
                                 </div>
                               </div>
                               <div class="col navbutton" v-if="agency.page.button.packages">
                                 <div class="btn-seacher"  v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/packages.svg" alt="">
                                   Paquetes
                                 </div>
                               </div>
                               <div class="col navbutton" v-if="agency.page.button.cars">
                                 <div class="btn-seacher"  v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/cars.svg" alt="">
                                   Autos
                                 </div>
                               </div>
                               <div class="col navbutton" v-if="agency.page.button.cruisers">
                                 <div class="btn-seacher"  v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/cruisers.svg" alt="">
                                   Cruseros
                                 </div>
                               </div>
                               <div class="col navbutton" v-if="agency.page.button.assistance">
                                 <div class="btn-seacher"  v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/assistance.svg" alt="">
                                   Asistencia
                                 </div>
                               </div>
                               <div class="col navbutton" v-if="agency.page.button.bus">
                                 <div class="btn-seacher"  v-bind:style="'background-color:'+agency.page.color + ';' ">
                                   <img class="responsive-img" src="./../assets/img/icons/bus.svg" alt="">
                                   Buses
                                 </div>
                               </div>
                             </div>
                             <div class="col 12"><br></div>
                           </div>
                         </div>
                         <div class="wrapper search__engine">
                           <div class="col s12">
                             <div class="col s12 m6 l6">
                               <h5 class="light" v-bind:style="'color:'+agency.page.color + ';' ">Comprar Vuelos Baratos</h5>
                             </div>
                             <div class="col s12 m6 l6">
                               <div class="search__btn-group btn-group" role="group" aria-label="Select flight type">
                                 <button type="button" id="vuelta" class="btn2 tooltips" :style="'background:'+agency.page.color" data-date="1" data-type="roundtrip" title="Ida y Vuelta">
                                   <i class="material-icons">autorenew</i>
                                   <span class="hide-availengine">
                                     Ida y Vuelta
                                   </span>
                                 </button>
                                 <button type="button" id="ida" class="btn2 btn--inactive tooltips" data-date="1" data-type="oneway" title="Solo Ida">
                                   <i class="material-icons">redo</i>
                                   <span class="hide-availengine">
                                     Solo Ida
                                   </span>
                                 </button>
                                 <button type="button" id="multidest" class="btn2 btn--inactive tooltips" title="Multidestino">
                                   <i class="material-icons">repeat</i>
                                   <span class="hide-availengine">
                                     Multidestino
                                   </span>
                                 </button>
                               </div>
                             </div>
                           </div>
                           <div class="col s12">
                             <div class="col s12 m3 l3">
                               <input type="" name="" value="" class="input-review col s12" placeholder="Cuidad Origen">
                             </div>
                             <div class="col s12 m3 l3">
                               <input type="" name="" value="" class="input-review col s12" placeholder="Cuidad Destino">
                             </div>
                             <div class="col s2">
                               <input type="" name="" value="" class="input-review" placeholder="Fecha">
                             </div>
                             <div class="col s2">
                               <input type="" name="" value="" class="input-review" placeholder="Fecha">
                             </div>
                             <div class="col s2">
                               <select class="browser-default">
                                   <option value="1" selected>1 Pasajero</option>
                                   <option value="2">2 Pasajeros</option>
                                   <option value="3">3 Pasajeros</option>
                                 </select>
                             </div>
                             <br>
                             <div class="col s12">
                               <span class="blue-text right">Opciones Avanzadas</span>
                             </div>
                             <div class="col s12">
                               <button type="button" name="button" class="btn2 btn--submit col s12">Buscar</button>
                             </div>
                             <div class="col s12"><br></div>
                           </div>
                         </div>
                         <div class="col s12 no-padding">
                           <footer class="page-foot">
                             <div class="page-foot__social clearfix" v-bind:style="'background-color:'+agency.page.color + ';' ">
                                 <div class="wrapper"></div>
                             </div>
                             <div class="">
                                 <div class="wrapper">
                                     <div class="flag page-foot__last">
                                         <div class="flag__body page-foot__legal">
                                           <div class="grid">
                                             <p>
                                               <a href="" target="_blank" v-bind:style="'color:'+agency.page.color + ';' ">Derechos del pasajero y/o deberes del transportador</a>
                                               <br><a href="http://www.sic.gov.co/" target="_blank" rel="nofollow" v-bind:style="'color:'+agency.page.color + ';' ">SIC</a>
                                               <br><a href="http://www.aerocivil.gov.co/" target="_blank" rel="nofollow" v-bind:style="'color:'+agency.page.color + ';' ">Aerocivil</a>
                                               <br><a href="http://www.aviatur.com/es/terminos-y-condiciones/contrato-de-transporte-de-las-aerolineas" target="_blank"  v-bind:style="'color:'+agency.page.color + ';' ">Contrato de Transporte de Aerolíneas</a>
                                               <br><a href="http://www.aviatur.com/es/terminos-y-condiciones-del-sitio#contra" target="_blank"  v-bind:style="'color:'+agency.page.color + ';' ">Contra la pornografía infantil</a>
                                               <br><a href="http://www.aviatur.com/es/terminos-y-condiciones-del-sitio" target="_blank"  v-bind:style="'color:'+agency.page.color + ';' ">Términos y condiciones del Sitio</a>
                                               <br><a href="http://www.aviatur.com/es/politica-de-privacidad" target="_blank"  v-bind:style="'color:'+agency.page.color + ';' ">Política de privacidad</a>
                                               <br><a href="http://octopus.com.co/contenidos/clausula-de-responsabilidad" target="_blank"  v-bind:style="'color:'+agency.page.color + ';' ">Cláusula de Responsabilidad</a>
                                               <br><a href="" v-bind:style="'color:'+agency.page.color + ';' ">Formulario de Reversión de Pagos</a>

                                             </p>
                                           </div>
                                           <div class="grid">
                                             <p>Todos los derechos reservados
                                               <br>Derecho de retracto y desistimiento, según Resolución 1209 del 5/25/2015 de la UAEAC
                                               <br>Aviatur.com 2017
                                               <br>NIT: {{agency.nit}} | RNT No. {{agency.rnt}}
                                               <br>{{agency.country}} - Dirección: {{agency.location}}
                                             </p>
                                           </div>
                                           <div class="grid">
                                             <p>
                                               Celular: +(57) {{agency.phone}}
                                               <br>Teléfono: +(57) {{agency.telephone}}

                                               <br>Correos:
                                               <br>{{agency.mail}}
                                             </p>
                                             </div>
                                             <div class="flag__img page-foot__p2p grid">
                                                 <img src="./../assets/img/icons/p2p.png" alt="Place to Pay">
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                           </footer>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
      </div>
      <!-- Modal activate create mark -->
      <div id="activatemark" class="modal activatemark">
        <div class="modal-content">
          <h4>¿Está seguro que desea activar esta marca?</h4>
          <p>Recuerde que al dar click en "Activar" la pagina web estará activa en la URL que este registrada actualmente.</p>
          <p>Recuerde también verificar los datos URL, referer, telefóno, dirección y email.</p>
          <div class="">
            <div class="input-field col s8">
              <input placeholder="Bearer" id="key" type="text" v-model="bearer" class="validate">
              <label for="key">Ingrese el Bearer Key:</label>
            </div>
          </div>
          <div class="center" v-if="loaderservice">
            <div class="preloader-wrapper active">
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
        </div>
        <div class="modal-footer" style="padding-right: 40px; padding-top: 10px;">
          <a class="modal-close waves-effect waves-green btn-flat">No</a>
          <a v-on:click="activateMark()" :disabled="activatebutton" class="waves-effect btn green">Activar</a>
        </div>
      </div>
      <div id="errorActivatemark" class="modal errorActivatemark" style="background-color:#fff">
        <div class="modal-content" style="color:#ff887c;">
        <h3><i class="material-icons" style="font-size: 30px; font-weight:bold;">error_outline</i> Error al activar</h3>
          <h5>Recuerde que necesita una Key Bearer para realizar la activación.</h5>
        </div>
      </div>
      <!-- Modal Logo -->
      <div id="image" class="modal bottom-sheet blue-grey darken-4" v-if="agency.agency!=null">
        <div class="modal-content">
          <h4 class="white-text">Logo de la agencia</h4>
          <div class="row">
            <div class="col s12 image_wrapper">
              <div class="file-field input-field">
                <form id="uploadLogo" enctype="multipart/form-data">
                  <img class="responsive-img" style="" :src="agency.referer!=null?'https://whitemanager.grupoaviatur.com/dir/marks/'+agency.referer+'/'+agency.referer+'.png?'+upload.time+'':''"  alt="Imagen perfil Aviatur Marcas Blancas">
                  <span class="add"><a class="btn-floating blue waves-effect waves-light"><i class="large material-icons">edit</i><input type="file" v-on:change="uploadLogo($event)"></a></span><br><br>
                </form>
              </div>
            </div>
          </div>
          <!-- Logo -->
        </div>
        <div class="modal-footer blue-grey darken-4">
          <a class="modal-action modal-close white-text waves-effect waves-red btn-flat">Cerrar</a>
        </div>
      </div>
      <!-- Modal Color -->
      <div id="color" class="modal bottom-sheet blue-grey darken-4" v-if="agency.agency!=null">
        <div class="modal-content">
          <h4 class="white-text">Editar Color de mi Agencia</h4>
          <div class="row">
            <!-- Color -->
            <div class="color" :class="index" :key="index" v-for="(color,index) in colors" v-on:click="changeColor(color)"></div>
            <div class="col s12 input-field white-text">
              <input id="text" type="text" class="col s3" v-model="agency.page.color">
              <input id="colorinput" type="color" class="col s3" v-model="agency.page.color">
              <label>Color Seleccionado:</label>
            </div>
          </div>
          <div class="col s12">
            <div class="color-picker3"></div>
          </div>
        </div>
        <div class="modal-footer blue-grey darken-4">
          <a class="modal-action modal-close white-text waves-effect waves-red btn blue-grey darken-2"
          v-on:click="SaveChanges()">
            <i class="left material-icons">save</i>Guardar Cambios
          </a>
          <a class="modal-action modal-close white-text waves-effect waves-red btn-flat">Cerrar</a>
        </div>
      </div>
      <!-- Modal Buttons -->
      <div id="buttons" class="modal bottom-sheet blue-grey darken-4" v-if="agency.agency!=null">
        <div class="modal-content">
          <h4 class="white-text">Escoje los servicios que quieres en tu agencia:</h4>
          <div class="row">
              <div class="switch">
              <table class="white-text">
                <thead>
                  <tr>
                      <th>Icono</th>
                      <th>Nombre</th>
                      <th>Activar/Desactivar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src="./../assets/img/icons/flight.svg" alt="" class="responsive-img"/></td>
                    <td>Vuelos</td>
                    <td>
                      <label>
                        <input type="checkbox" name=""  v-model="agency.page.button.flights">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="./../assets/img/icons/hotel.svg" alt="" class="responsive-img"/></td>
                    <td>Hoteles</td>
                    <td>
                      <label>
                        <input type="checkbox"  name=""  v-model="agency.page.button.hotels">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="./../assets/img/icons/cars.svg" alt="" class="responsive-img"/></td>
                    <td>Autos</td>
                    <td>
                      <label>
                        <input type="checkbox" name="" v-model="agency.page.button.cars">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="./../assets/img/icons/flight+hotel.svg" alt="" class="responsive-img"/></td>
                    <td>Vuelos+Hoteles</td>
                    <td>
                      <label>
                        <input type="checkbox"  name=""  v-model="agency.page.button.flightsAndHotels">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="./../assets/img/icons/packages.svg" alt="" class="responsive-img"/></td>
                    <td>Paquetes</td>
                    <td>
                      <label>
                        <input type="checkbox"  name=""  v-model="agency.page.button.packages">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="./../assets/img/icons/bus.svg" alt="" class="responsive-img" style ="max-width: 150px;"/></td>
                    <td>Buses</td>
                    <td>
                      <label>
                        <input type="checkbox" name=""  v-model="agency.page.button.bus">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="./../assets/img/icons/cruisers.svg" alt="" class="responsive-img"/></td>
                    <td>Cruceros</td>
                    <td>
                      <label>
                        <input type="checkbox"  name=""  v-model="agency.page.button.cruisers">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td><img src="./../assets/img/icons/assistance.svg" alt="" class="responsive-img"/></td>
                    <td>Asistencia</td>
                    <td>
                      <label>
                        <input type="checkbox" name="" v-model="agency.page.button.assistance">
                        <span class="lever"></span>
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer blue-grey darken-4">
          <a class="modal-action modal-close white-text waves-effect waves-red btn blue-grey darken-2"
          v-on:click="SaveChanges()">
            <i class="left material-icons">save</i>Guardar Cambios
          </a>
          <a class="modal-action modal-close white-text waves-effect waves-red btn-flat">Cerrar</a>
        </div>
      </div>
      <!-- Modal Background -->
      <div id="background" class="modal bottom-sheet blue-grey darken-4" style="height:70%" v-if="agency.agency!=null">
        <div class="modal-content">
          <h4 class="white-text">Fondo de pagina</h4>
            <div class="col s12">
              <div class="col s6" :key="index" v-for="(img,index) in imgs">
                <div class="card" style="height:200px;padding-top:50px" v-if="index==0">
                    <div class="card-content center">
                      <a class="card-title waves-effect waves-light black-text" v-on:click="changeBackground('no-image')">Sin Imagen</a>
                    </div>
                </div>
                <div class="card">
                    <div class="card-image">
                      <img v-bind:src="'https://whitemark.grupoaviatur.com/assets/whitemark_assets/img/header/_covers/'+img+'.jpg'"/>
                      <a class="card-title waves-effect waves-light" v-on:click="changeBackground(img)">Seleccionar</a>
                    </div>
                </div>
              </div>
            </div>
            <div class="col s12 modal-footer blue-grey darken-4">
              <a class="modal-action modal-close white-text waves-effect waves-red btn-flat bottom right">Cerrar</a>
              <a class="modal-action modal-close blue-grey darken-2 white-text waves-effect waves-red btn"
                v-on:click="SaveChanges(agency)">
                <i class="left material-icons">save</i>Guardar Cambios
              </a>
            </div>
        </div>
      </div>
      <div class="fixed-action-btn toolbar" v-on:click="SaveChanges()">
        <a class="btn-floating btn-large green">
          <i class="large material-icons">save</i>
        </a>
        <ul>
          <li class="waves-effect waves-light tooltipped" data-position="top" data-delay="10" data-tooltip="Guardar Estadisticas"><a><i class="material-icons">insert_chart</i></a></li>
          <li class="waves-effect waves-light tooltipped" data-position="top" data-delay="10" data-tooltip="Guardar Cambios"><a  v-on:click="SaveChanges(agency)"><i class="material-icons">save</i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import * as firebase from "firebase/app"
import M from 'materialize-css'
import Chart from 'chart.js'
import SideBar from '../components/SideBar'
export default {
  data: ()=> {
    return {
      "bearer":"",
      "letter": "",
      "imgs":["cover1g","cover1h","cover1","cover1i","valle","cover3","cover1d","cover1a","cover1b","cover1f","acordeon-fondo","ffh","ffh2","ffh3","ffh-fondo"],
      "colorOff": "rgba(253, 15, 21, 0.31)",
      "colorOn": "rgba(62, 160, 81, 0.89)",
      "colors":{
        "red":"#f44336",
        "blue":"#2196f3",
        "green":"#4caf50",
        "indigo":"#3f51b5",
        "brown":"#795548",
        "black":"#000000",
        "teal":"#009688",
        "deep-orange":"#ff5722",
        "light-blue":"#03a9f4",
        "light-green":"#8bc34a",
        "deep-purple":"#673ab7",
        "amber":"#ffc107",
        "blue-grey":"#607d8b",
        "pink":"#e91e63",
        "orange":"#ff9800",
        "cyan":"#00bcd4",
        "lime":"#cddc39",
        "purple":"#9c27b0",
        "yellow":"#ffeb3b",
        "grey":"#9e9e9e",
        "white":"#ffffff"
      },
      "search": "",
      "checkbox":true,
      "loader":true,
      "loaderservice":false,
      "activatebutton":false,
      "agencies" : {
        "ref": firebase.database().ref('agencies'),
        "list": []
      },
      "liquidations":{},
      "note":{
        "value":"",
        "date":new Date().toString()
      },
      "agency":{},
      "img": {
        "initial": "",
        "color": "indigo",
        "src": ""
      },
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
        },
        "2019":{
          "sales":{
            "months":[],
            "values":[]
          },
          "commission":{
            "months":[],
            "values":[]
          }
        },
        "2020":{
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
      "formReport":{
        "type": "sales",
        "year": "2020",
        "month": "january",
        "value": 0
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
      this.getAgency(this.$route.params.id)
    }
  },
  methods:{
    getAgency:function(agency){
      this.agencies.ref.once('value', (agencies) => {
        agencies.forEach((element) => {
          if (element.val().nit==agency) {
            this.agency = element.val()
            //console.log(element.val());
            this.getFiles(this.agency.referer)
            this.getLiquidations(this.agency.referer)
            //this.getSales(this.agency)
            this.getImg(this.agency.referer)
            this.getYearsToCharts()
            this.getCharts()
            this.getLetter()
            if (this.agency.date == null) {
              this.agency.date = new Date()
            }

            if (this.agency.page == null) {this.agency.page = { "color":"#2196f3" }}
            if (this.agency.page.background == null) {this.agency.page = {"background":"b1"}}
            if (this.agency.page.button == null) {
                this.agency.page.button = {
                  "flights": true,
                  "hotels": true,
                  "flightsAndHotels": true,
                  "packages": true,
                  "cars": true,
                  "bus": true,
                  "cruisers": true,
                  "assistance": true
                }
              }
            this.loader = false
            setTimeout(()=> {
              M.updateTextFields()
              M.Tabs.init(document.querySelectorAll('.tabs'))
              M.Tooltip.init(document.querySelectorAll('.tooltipped'))
              M.Modal.init(document.querySelectorAll('.modal'))
            },900)
          }
        });
      });
    },
    getFiles:function(referer){
      console.log(referer);
      /*
      $.ajax({
          url: 'dir',
          method: 'GET',
          data:{
            "type":"contract",
            "mark":referer
          },
          success: (data)=> {
            if (data != null) {
              this.agency.files = JSON.parse(data)
            }
          },
          error: function(error) {
              console.log(error)
          }
      });*/
    },
    getLiquidations:function (referer) {
      console.log(referer);
      /*
      $.ajax({
          url: 'dir',
          method: 'GET',
          data:{
            "type":"liquidations",
            "mark":referer
          },
          success: (data)=> {
            if (data != null) {
              this.liquidations = JSON.parse(data)
            }
          },
          error: function(error) {
              console.log(error)
          }
      });*/
    },
    addNote:function(){
      if (this.agency.notes==null) {
        this.agency.notes=[]
      }
      this.agency.notes.push(this.note)
      firebase.database().ref('agencies/'+this.agency.nit).set(this.agency).then(()=> {
          this.$root.messageService('toast','Nota Agregada  🤖', 10000)
          this.note = {
            "value":"",
            "date":new Date().toString()
          }
      }).catch(function (error) {
          console.log(error)
          this.$root.messageService('toast','Algo salio mal, recarga la pagina por favor 🤖', 10000)
      })
    },
    removeNote:function(index) {
      this.agency.notes.splice([index], 1)
      firebase.database().ref('agencies/'+this.agency.nit).set(this.agency).then(function () {
        this.$root.messageService('toast','Nota Eliminada  🤖', 10000)
      }).catch(function (error) {
          console.log(error)
          this.$root.messageService('toast','Algo salio mal, recarga la pagina por fa 🤖', 10000)
      })
    },
    SaveChanges:function(agency) {
      console.log(agency);
      firebase.database().ref('agencies/'+this.agency.nit).set(this.agency).then(()=> {
        this.$root.messageService('toast','Cambios Guardados  🤖', 10000)
      }).catch(function (error) {
        console.log(error)
        this.$root.messageService("toast", "Algo salio mal, recarga la pagina por fa  🤖")
      })
    },
    openModalActivateMark:function(){
      var Modalelem = document.querySelector('.activatemark');
      var instance = M.Modal.init(Modalelem)
      instance.open()
    },
    openModalErrorActivateMark:function() {
      var Modalelem = document.querySelector('.errorActivatemark');
      var instance = M.Modal.init(Modalelem)
      instance.open()
      var modalactivate = document.querySelector('.activatemark');
      var modal = M.Modal.init(modalactivate)
      modal.close()
    },
    activateMark:function(){
      this.loaderservice=!this.loaderservice
      this.activatebutton=true
      var d={
        "agency":  "Aviatur S.A Marcas Blancas",
        "name": this.agency.referer,
        "url": this.agency.web,
        "referer": this.agency.referer,
        "embebed": "0",
        "phone":parseInt(this.agency.phone),
        "address":this.agency.location,
        "email": this.agency.mail,
        "officeId": ""
      }
      console.log(JSON.stringify(d));
      var data = JSON.stringify({});
      var url = 'https://qa.aviatur.com/api/whitemark/new';

      fetch(url, {
        method: 'POST', // or 'PUT'
        body: data, // data can be `string` or {object}!
        headers:{
          'authorization':"Bearer "+this.bearer,
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

      /*
      $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://qa.aviatur.com/api/whitemark/new",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "authorization": "Bearer "+this.agency.bearer,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data":JSON.stringify({}),
        success: (data)=> {
        try {
          console.log(data);
            if (data.error!=null) {
              console.log(data)
              this.$root.messageService("toast", data.error+" 🤖")
            }else{
              console.log(data);
              this.loaderservice=!this.loaderservice
              this.activatebutton=false
              this.agency.state = this.agency.state==0?2:this.agency.state!=0?0:2
              this.$root.messageService("toast", "La agencias esta activa 🤖")
              this.SaveChanges(this.agency)
            }
          } catch (e) {
            console.log(e);
          }
        },
        error:(e)=>{
          if (e) {
            console.log("Error al activar la agencia");
            this.openModalErrorActivateMark()
            this.loaderservice=!this.loaderservice
            this.activatebutton=false
          }
        }
      })*/
    },
    uploadLogo: function(e){
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_img_agency")
      data.append('referer', this.agency.referer)
      fetch('/dir/upload.php',
      {
        body:data,
        method: 'POST',
        headers:{
          cache: false,
          contentType:false,
          processData:false
        }
      }
      )
      .then(res => res.text().then((s) => {
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
    },
    getYearsToCharts:function() {
      /*
      $.each(this.agency.charts, (key, value)=> {
        this.getSales(key)
       })
       */
    },
    getSales:function(year,type) {
      console.log(type)
      /*
      $.each(this.agency.charts[year].sales, (key, value)=> {
        if (key=='enero') { this.charts[year].sales.months[0]=key }
        if (key=='febrero') { this.charts[year].sales.months[1]=key }
        if (key=='marzo') { this.charts[year].sales.months[2]=key }
        if (key=='abril') { this.charts[year].sales.months[3]=key }
        if (key=='mayo') { this.charts[year].sales.months[4]=key }
        if (key=='junio') { this.charts[year].sales.months[5]=key }
        if (key=='julio') { this.charts[year].sales.months[6]=key }
        if (key=='agosto') { this.charts[year].sales.months[7]=key }
        if (key=='septiembre') { this.charts[year].sales.months[8]=key }
        if (key=='octubre') { this.charts[year].sales.months[9]=key }
        if (key=='noviembre') { this.charts[year].sales.months[10]=key }
        if (key=='diciembre') { this.charts[year].sales.months[11]=key }

        if (key=='enero') { this.charts[year].sales.values[0]=value}
        if (key=='febrero') { this.charts[year].sales.values[1]=value}
        if (key=='marzo') { this.charts[year].sales.values[2]=value}
        if (key=='abril') { this.charts[year].sales.values[3]=value}
        if (key=='mayo') { this.charts[year].sales.values[4]=value}
        if (key=='junio') { this.charts[year].sales.values[5]=value}
        if (key=='julio') { this.charts[year].sales.values[6]=value}
        if (key=='agosto') { this.charts[year].sales.values[7]=value}
        if (key=='septiembre') { this.charts[year].sales.values[8]=value}
        if (key=='octubre') { this.charts[year].sales.values[9]=value}
        if (key=='noviembre') { this.charts[year].sales.values[10]=value}
        if (key=='diciembre') { this.charts[year].sales.values[11]=value}
        //this.charts[year].sales.months.push(key)
        //this.charts[year].sales.values.push(value)
       })
       $.each(this.agency.charts[year].comission, (key, value)=> {
         if (key=='enero') { this.charts[year].commission.months[0]=key }
         if (key=='febrero') { this.charts[year].commission.months[1]=key }
         if (key=='marzo') { this.charts[year].commission.months[2]=key }
         if (key=='abril') { this.charts[year].commission.months[3]=key }
         if (key=='mayo') { this.charts[year].commission.months[4]=key }
         if (key=='junio') { this.charts[year].commission.months[5]=key }
         if (key=='julio') { this.charts[year].commission.months[6]=key }
         if (key=='agosto') { this.charts[year].commission.months[7]=key }
         if (key=='septiembre') { this.charts[year].commission.months[8]=key }
         if (key=='octubre') { this.charts[year].commission.months[9]=key }
         if (key=='noviembre') { this.charts[year].commission.months[10]=key }
         if (key=='diciembre') { this.charts[year].commission.months[11]=key }

         if (key=='enero') { this.charts[year].commission.values[0]=value}
         if (key=='febrero') { this.charts[year].commission.values[1]=value}
         if (key=='marzo') { this.charts[year].commission.values[2]=value}
         if (key=='abril') { this.charts[year].commission.values[3]=value}
         if (key=='mayo') { this.charts[year].commission.values[4]=value}
         if (key=='junio') { this.charts[year].commission.values[5]=value}
         if (key=='julio') { this.charts[year].commission.values[6]=value}
         if (key=='agosto') { this.charts[year].commission.values[7]=value}
         if (key=='septiembre') { this.charts[year].commission.values[8]=value}
         if (key=='octubre') { this.charts[year].commission.values[9]=value}
         if (key=='noviembre') { this.charts[year].commission.values[10]=value}
         if (key=='diciembre') { this.charts[year].commission.values[11]=value}
         //this.charts[year].commission.months.push(key)
         //this.charts[year].commission.values.push(value)
        })
       return this.charts
       */
    },
    getCharts:function() {
      // Charst of Sales by Year
      var sales = document.getElementById("sales").getContext('2d');
      var purple_gradient = sales.createLinearGradient(0,0,0,500);
      purple_gradient.addColorStop(0, 'rgba(241, 64, 219, 0.60)');
      purple_gradient.addColorStop(1, 'rgba(241, 64, 219, 0.10)');

      var pink_gradient = sales.createLinearGradient(0,0,0,500);
      pink_gradient.addColorStop(0, 'rgba(241, 64, 121, 0.60)');
      pink_gradient.addColorStop(1, 'rgba(241, 64, 121, 0.10)');

      var orange_gradient = sales.createLinearGradient(0,0,0,500);
      orange_gradient.addColorStop(0, 'rgba(241, 154, 64, 0.6)');
      orange_gradient.addColorStop(1, 'rgba(241, 154, 64, 0.10)');
      //var salesChart =
      new Chart(sales, {
          type: 'line',
          data: {
              labels: this.charts["2017"].sales.months,
              datasets: [
                {
                  label: '2017',
                  data: this.charts["2017"].sales.values,
                  backgroundColor: pink_gradient,
                  borderColor:pink_gradient,
                  borderWidth: 1
              },
              {
                label: '2018',
                data: this.charts["2018"].sales.values,
                backgroundColor: orange_gradient,
                borderColor:orange_gradient,
                borderWidth: 1
              },
              {
                label: '2019',
                data: this.charts["2019"].sales.values,
                backgroundColor: purple_gradient,
                borderColor:purple_gradient,
                borderWidth: 1
              },
              {
                label: '2020',
                data: this.charts["2020"].sales.values,
                backgroundColor: orange_gradient,
                borderColor:orange_gradient,
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
                yAxes: [{
                    display: true,
                    scaleLabel: {
                      fontColor:"white",
                      display: true,
                      labelString: 'Rango de Ventas'
                    },
                    ticks: {
                      fontColor:"white",
                      beginAtZero: true,
                      callback: function(value) {
                        //function(value, index, values)
                        if(parseInt(value) >= 1000){
                          return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        } else {
                          return '$' + value;
                        }
                      }
                    }
                }],
                xAxes: [{
                    ticks: {
                      fontColor:"white"
                    }
                }]
            },
              tooltips: {
                  mode: 'index',
                  intersect: false,
                  fontColor:"white",
                  callbacks: {
                    label: function(tooltipItem,) {
                      //function(tooltipItem, data)
                      return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                          return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                      })
                    }
                  }
              }
          }
      });
      // Charts of Commisions by Year
      var commission = document.getElementById("commission").getContext('2d');
      var green_gradient = commission.createLinearGradient(0,0,0,500);
      green_gradient.addColorStop(0, 'rgba(15, 224, 205, 0.60)');
      green_gradient.addColorStop(1, 'rgba(15, 224, 205, 0.10)');

      var blue_gradient = commission.createLinearGradient(0,0,0,500);
      blue_gradient.addColorStop(0, 'rgba(15, 128, 224, 0.60)');
      blue_gradient.addColorStop(1, 'rgba(15, 128, 224, 0.10)');
      //var commissionChart =
      new Chart(commission, {
          type: 'line',
          data: {
              labels: this.charts["2017"].commission.months,
              datasets: [
                {
                  label: '2017',
                  data: this.charts["2017"].commission.values,
                  backgroundColor: green_gradient,
                  borderColor:green_gradient,
                  borderWidth: 1
              },
              {
                label: '2018',
                data: this.charts["2018"].commission.values,
                backgroundColor: blue_gradient,
                borderColor:blue_gradient,
                borderWidth: 1
              },
              {
                label: '2019',
                data: this.charts["2019"].commission.values,
                backgroundColor: green_gradient,
                borderColor:green_gradient,
                borderWidth: 1
              },
              {
                label: '2020',
                data: this.charts["2020"].commission.values,
                backgroundColor: green_gradient,
                borderColor:green_gradient,
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
                yAxes: [{
                    display: true,
                    scaleLabel: {
                      fontColor:"white",
                      display: true,
                      labelString: 'Rango de Ventas'
                    },
                    ticks: {
                      fontColor:"white",
                      beginAtZero: true,
                      callback: function(value) {
                        //function(value, index, values)
                        if(parseInt(value) >= 1000){
                          return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        } else {
                          return '$' + value;
                        }
                      }
                    }
                }],
                xAxes: [{
                    ticks: {
                      fontColor:"white"
                    }
                }]
            },
              tooltips: {
                  mode: 'index',
                  intersect: false,
                  fontColor:"white",
                  callbacks: {
                    label: function(tooltipItem) {
                      //function(tooltipItem, data)
                        return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                        })
                    }
                  }
              }
          }
      });
    },
    uploadFile: function (e) {
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload")
      data.append('referer', this.agency.referer)
      /*
      $.ajax({
        url: 'dir/upload.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: (data)=> {
          try {
            if (data=="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Archivo subido")
            }
            if (data=="error" || data!="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Archivo no subido")
            }
          } catch (e) {
            this.upload.loader=false
            this.$root.messageService("toast", "Archivo no subido")
          }
        },
      })*/
    },
    uploadLiquidation: function (e) {
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_liquidation")
      data.append('referer', this.agency.referer)
      /*
      $.ajax({
        url: 'dir/upload.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: (data)=> {
          try {
            if (data=="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Archivo subido")
              this.getLiquidations(this.agency.referer)
            }
            if (data=="error" || data!="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Archivo no subido")
            }
          } catch (e) {
            this.upload.loader=false
            this.$root.messageService("toast", "Archivo no subido")
          }
        },
      })*/
    },
    deleteLiquidation: function (file) {
      var data= new FormData()
      data.append('file', file)
      data.append('type', "delete_liquidation")
      data.append('referer', this.agency.referer)
      /*
      $.ajax({
        url: 'dir/upload.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: (data)=> {
          console.log("sd");
          try {
            if (data=="ok") {
              this.$root.messageService("toast", "Archivo eliminado")
              this.getLiquidations(this.agency.referer)
            }
            if (data=="error" || data!="ok") {
              this.$root.messageService("toast", "Archivo no eliminado")
            }
          } catch (e) {
            this.$root.messageService("toast", "Archivo no eliminado")
          }
        },
      })*/
    },
    getImg:function(img){
      this.img.src = 'dir/marks/'+img+'/'+img+'.png?'
    },
    ImgError:function () {
      this.img.src = "";
    },
    getLetter:function(){
      this.letter = this.agency.agency.substring(0, 1)
    },
    saveReport:function(){
      if (this.agency.charts==null) {
        this.agency.charts = {
          "2017" : {
            "comission":{"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0},
            "sales" : {"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0}
          },
          "2018" : {
            "comission":{"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0},
            "sales" : {"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0}
          },
          "2019" : {
            "comission":{"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0},
            "sales" : {"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0}
          },
          "2020" : {
            "comission":{"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0},
            "sales" : {"abril":0,"agosto":0,"diciembre":0,"enero":0,"febrero":0,"julio":0,"junio":0,"marzo":0,"mayo":0,"noviembre":0,"octubre":0,"septiembre":0}
          }
        }
      }
      this.agency.charts[this.formReport.year][this.formReport.type][this.formReport.month] = this.formReport.value
      this.getCharts()
      this.SaveChanges()
    },
    changeBackground:function (img){
      this.agency.page.background = img
    },
    changeColor:function(color){
      this.agency.page.color = color
    },
  },
  beforeCreate:function(){ }
}
</script>
