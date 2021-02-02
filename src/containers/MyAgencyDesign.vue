<style scoped>
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
      border-radius: 5px;
      color: white;
      outline: none;
  }
  .btn-group > .btn2:not(.btn--inactive), .btn2-group > .btn--slim:not(.btn--inactive) {
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
      text-align: left;
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
      padding:0;
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
  .btn-group i{
    font-size: 1.3rem;
  }
</style>
<template>
  <div class="row full-screen">
    <SideBar nav-top/>
    <nav class="col s12 m12 l10 right no-padding white">
      <div class="nav-wrapper">
        <ul class="row">
          <li class="col s2 center">
            <a class="btn-floating btn-flat  indigo lighten-4 waves-effect waves-light modal-trigger tooltipped"
            data-target="image"
            data-position="bottom"
            data-delay="10"
            data-tooltip="Cambiar Logo"><i class="material-icons indigo-text">photo_size_select_large</i></a>
          </li>
          <li class="col s2 hide">
            <a class="btn-floating btn-flat blue lighten-4 waves-effect waves-light modal-trigger center tooltipped"
            data-position="bottom"
            data-delay="10"
            data-tooltip="Cambiar Favicon"
            data-target="favicon"><i class="material-icons">burst_mode</i></a>
          </li>
          <li class="col s2 center">
            <a class="btn-floating btn-flat blue lighten-4 waves-effect waves-light modal-trigger tooltipped"
            data-position="bottom"
            data-delay="10"
            data-tooltip="Cambiar Color Base"
            data-target="color"><i class="material-icons blue-text">format_color_fill</i></a>
          </li>
          <li class="col s2 center">
            <a id="menu" class="btn-floating btn-flat cyan lighten-4 waves-effect waves-light modal-trigger tooltipped"
            data-position="bottom"
            data-delay="10"
            data-tooltip="Botones Visibles"
            data-target="buttons"><i class="material-icons cyan-text">visibility</i></a>
          </li>
          <li class="col s2 center" v-show="false">
            <a class="btn-floating btn-flat pink lighten-4 waves-effect waves-light modal-trigger tooltipped"
            data-position="bottom"
            data-delay="10"
            data-tooltip="Información Visible"
            data-target="info"><i class="material-icons">format_shapes</i></a>
          </li>
          <li class="col s2 center">
            <a class="btn-floating btn-flat pink lighten-4 waves-effect waves-light modal-trigger tooltipped"
            data-position="bottom"
            data-delay="10"
            data-tooltip="Cambiar Fondo"
            data-target="background"><i class="material-icons pink-text">collections</i></a>
          </li>
          <li class="col s2 center">
            <a class="btn-floating btn-flat green accent-2 waves-effect waves-light modal-trigger tooltipped"
            data-position="bottom"
            data-delay="10"
            data-tooltip="Guardar Cambios"
            v-on:click="SaveChanges()"><i class="material-icons green-text">save</i></a>
          </li>
        </ul>
      </div>
      <div class="fixed-action-btn" style="margin-bottom: 40px; margin-right:25px;">
        <a class="btn-floating btn-large indigo modal-trigger waves-effect waves-light z-depth-5" data-target="instructions">
          <i class="large material-icons">help</i>
        </a>
      </div>
    </nav>
    <ul id="nav-edit" class="col s1 offset-s1 no-padding side-nav fixed blue-grey darken-3 mobile-no-show hide" style="transform: translateX(0%);">
      <li>
        <a class="modal-trigger pointer" data-target="image">
          <i
          class="white-text material-icons tooltipped"
          data-position="right"
          data-delay="10"
          data-tooltip="Cambiar Logo"
          style="margin-left: 20px;">add_photo_alternate</i>
        </a>
      </li>
      <li>
        <a class="modal-trigger pointer" data-target="color">
          <i
          class="white-text material-icons tooltipped"
          data-position="right"
          data-delay="10"
          data-tooltip="Cambiar Color Base"
          style="margin-left: 20px;">format_color_fill</i>
        </a>
      </li>
      <li>
        <a class="modal-trigger pointer" data-target="buttons">
          <i
          class="white-text material-icons tooltipped"
          data-position="right"
          data-delay="10"
          data-tooltip="Botones Visibles"
          style="margin-left: 20px;">visibility</i>
        </a>
      </li>
      <li>
        <a class="modal-trigger pointer" data-target="info">
          <i
          class="white-text material-icons tooltipped"
          data-position="right"
          data-delay="10"
          data-tooltip="Información Visible"
          style="margin-left: 20px;">format_shapes</i>
        </a>
      </li>
      <li>
        <a class="modal-trigger blue-grey darken-4 pointer" v-on:click="SaveChange(agency)">
          <i
          class="white-text material-icons tooltipped"
          data-position="right"
          data-delay="10"
          data-tooltip="Guardar Cambios"
          style="margin-left: 20px;">save</i>
        </a>
      </li>
    </ul>
    <!-- Modal Logo -->
    <div id="image" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Logo de la agencia</h4>
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
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-red btn-flat">Cerrar</a>
      </div>
    </div>
    <div id="favicon" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Favicon de la agencia</h4>
        <div class="row">
          <div class="col s12 image_wrapper">
            <div class="file-field input-field">
              <form id="uploadFavicon" enctype="multipart/form-data">
                <img class="responsive-img" style="max-width: 150px;" v-bind:src="'dir/marks/'+agency.referer+'/'+agency.referer+'-favicon.fav?'+upload.time" alt="Imagen favicon Aviatur Marcas Blancas">
                <span class="add"><a class="btn-floating btn-small blue waves-effect waves-light"><i class="large material-icons">edit</i><input type="file" v-on:change="uploadFavicon($event)"></a></span><br><br>
              </form>
            </div>
          </div>
        </div>
        <!-- Logo -->
      </div>
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-red btn-flat">Cerrar</a>
      </div>
    </div>
    <!-- Modal Background -->
    <div id="background" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Fondo de pagina</h4>
          <div class="col s12">
            <div class="col s4" :key="index" v-for="(img,index) in imgs">
              <div class="card">
                  <div class="card-image">
                    <img v-bind:src="'https://whitemark.grupoaviatur.com/assets/whitemark_assets/img/header/_covers/'+img+'.jpg'"/>
                    <a class="card-title waves-effect waves-light" v-on:click="changeBackground(img)">Seleccionar</a>
                  </div>
              </div>
            </div>
          </div>
          <div class="col s4">
            <div class="card" style="height:200px;padding-top:50px">
                <div class="card-content center">
                  <a class="card-title waves-effect waves-light black-text" v-on:click="changeBackground('no-image')">Sin Imagen</a>
                </div>
            </div>
          </div>
          <div class="col s12 modal-footer">
            <a class="modal-action modal-close waves-effect waves-red btn-flat bottom right">Cerrar</a>
            <a class="modal-action modal-close blue-grey darken-2 waves-effect waves-red btn"
              v-on:click="SaveChange(agency)">
              <i class="left material-icons">save</i>Guardar Cambios
            </a>
          </div>
      </div>
    </div>
    <!-- Modal Color -->
    <div id="color" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Editar Color de mi Agencia</h4>
        <div class="row">
          <!-- Color -->
          <div class="color" :class="index" :key="index" v-for="(color,index) in colors" v-on:click="changeColor(color)"></div>
          <div class="col s12 input-field">
            <input id="text" type="text" class="col s3" v-model="agency.page.color">
            <input id="colorinput" type="color" class="col s3" v-model="agency.page.color">
            <label>Color Seleccionado:</label>
          </div>
        </div>
        <div class="col s12">
          <div class="color-picker3"></div>
        </div>

        <!-- Logo -->
      </div>
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect waves-red btn blue-grey darken-2"
        v-on:click="SaveChange(agency)">
          <i class="left material-icons">save</i>Guardar Cambios
        </a>
        <a class="modal-action modal-close waves-effect waves-red btn-flat">Cerrar</a>
      </div>
    </div>
    <!-- Modal Buttons -->
    <div id="buttons" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Escoje los servicios que quieres en tu agencia:</h4>
        <div class="row">
            <div class="switch">
            <table>
              <thead>
                <tr>
                    <th>Icono</th>
                    <th>Nombre</th>
                    <th>Activar/Desactivar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="./../assets/img/icons/blue/flight.svg" style="width:100px" class="responsive-img"/></td>
                  <td>Vuelos</td>
                  <td>
                    <label>
                      <input type="checkbox" name=""  v-model="agency.page.button.flights">
                      <span class="lever"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><img src="./../assets/img/icons/blue/hotel.svg" style="width:100px" class="responsive-img"/></td>
                  <td>Hoteles</td>
                  <td>
                    <label>
                      <input type="checkbox"  name=""  v-model="agency.page.button.hotels">
                      <span class="lever"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><img src="./../assets/img/icons/blue/cars.svg" style="width:100px" class="responsive-img"/></td>
                  <td>Autos</td>
                  <td>
                    <label>
                      <input type="checkbox" name="" v-model="agency.page.button.cars">
                      <span class="lever"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><img src="./../assets/img/icons/blue/flight+hotel.svg" style="width:100px" class="responsive-img"/></td>
                  <td>Vuelos+Hoteles</td>
                  <td>
                    <label>
                      <input type="checkbox"  name=""  v-model="agency.page.button.flightsAndHotels">
                      <span class="lever"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><img src="./../assets/img/icons/blue/packages.svg" style="width:100px" class="responsive-img"/></td>
                  <td>Paquetes</td>
                  <td>
                    <label>
                      <input type="checkbox"  name=""  v-model="agency.page.button.packages">
                      <span class="lever"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><img src="./../assets/img/icons/blue/bus.svg" class="responsive-img" style ="max-width:100px;"/></td>
                  <td>Buses</td>
                  <td>
                    <label>
                      <input type="checkbox" name=""  v-model="agency.page.button.bus">
                      <span class="lever"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><img src="./../assets/img/icons/blue/cruise.svg" style="width:100px" class="responsive-img"/></td>
                  <td>Cruceros</td>
                  <td>
                    <label>
                      <input type="checkbox"  name=""  v-model="agency.page.button.cruisers">
                      <span class="lever"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td><img src="./../assets/img/icons/blue/insurance.svg" style="width:100px" class="responsive-img"/></td>
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
      <div class="modal-footer">
        <a class="modal-action modal-close waves-effect green btn"
        v-on:click="SaveChange(agency)">
          <i class="left material-icons">save</i>Guardar Cambios
        </a>
        <a class="modal-action modal-close waves-effect waves-red btn-flat">Cerrar</a>
      </div>
    </div>
    <!-- Modal Info -->
    <div id="info" class="modal bottom-sheet">
      <div class="modal-content">
        <h4 class="white-text">Editar Información Visible de mi Agencia</h4>
        <div class="row">
          <!-- info -->
          <div class="col s12 no-padding white-text">
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Correo de la Agencia">mail</i>
              <input name="mail" type="text" v-model="agency.mail">
              <label for="mail">Correo de la Agencia</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Dirreción de la Agencia">my_location</i>
              <input name="location" type="text" v-model="agency.location">
              <label for="icon_prefix">Dirreción de la Agencia</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Teléfono de la Agencia">phone</i>
              <input name="phone" type="text"  pattern="[0-9]{8,11}" v-model="agency.telephone">
              <label for="icon_prefix">Teléfono de la Agencia</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Movil de la Agencia">phone_iphone</i>
              <input name="movil" type="text" pattern="[0-9]{8,11}" v-model="agency.phone">
              <label for="icon_prefix">Movil de la Agencia</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Link agencia">http</i>
              <input name="location" type="text" v-model="agency.web">
              <label for="icon_prefix">Pagina Web</label>
            </div>
            <div class="input-field col s12 m6 l6">
              <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Nombre de la Agencia">account_circle</i>
              <input name="agency" type="text" v-model="agency.agency" >
              <label for="agency">Nombre de la Agencia</label>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer blue-grey darken-4">
        <a class="modal-action modal-close white-text waves-effect waves-red btn blue-grey darken-2"
        v-on:click="SaveChange(agency)">
          <i class="left material-icons">save</i>Guardar Cambios
        </a>
        <a class="modal-action modal-close white-text waves-effect waves-red btn-flat">Cerrar</a>
      </div>
    </div>
    <!-- Modal instructions -->
    <div id="instructions" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Aquí podras crear y editar tu pagina web 🔧</h4>
        <div class="row">
          <div class="col s12">
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
                  <td><i class="material-icons tooltipped center">photo_size_select_large</i></td>
                  <td>Editar icono</td>
                  <td>Te permite subir el icono de tu empresa</td>
                </tr>
                <tr class="hide">
                  <td><i class="material-icons tooltipped center">burst_mode</i></td>
                  <td>Editar Favicon</td>
                  <td>Te permite subir el Favicon (pequeña imagen utilizada para identificar el sitio web) de tu empresa</td>
                </tr>
                <tr>
                  <td><i class="material-icons tooltipped center">format_color_fill</i></td>
                  <td>Editar color</td>
                  <td>Elige la paleta de colores</td>
                </tr>
                <tr>
                  <td><i class="material-icons tooltipped center">visibility</i></td>
                  <td>Editar botones</td>
                  <td>Selecciona los botones según el servicio que prestes</td>
                </tr>
                <tr class="hide">
                  <td><i class="material-icons tooltipped center">format_shapes</i></td>
                  <td>Editar información</td>
                  <td>Edita la información de tu empresa</td>
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
            <div class="row">
              <a class="modal-action modal-close white-text waves-effect btn right blue-grey darken-2">Click para continuar</a>
              <div class="right" style="padding-top:10px; padding-right: 30px;">
                <form class="modal-action modal-close" action="#">
                  <div>
                    <input type="checkbox" id="check" data-target="instructions">
                    <label for="check">No mostrar de nuevo</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col s12 m12 l10 right no-padding">
      <div class="col s12 no-padding">
      <!--<iframe class="hide" :src="'https://'+agency.web" style="width:100%;height:100vh"></iframe>-->
      <!-- Chrome Preview -->
      <div class="col s12 m12">
        <div class="chrome">
          <div class="tabs-chrome">
            <div class="tab-1 tab selt" style="background:#757575">
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
                <div class="wrapper" v-bind:class="agency.page.background=='no-image'?'':'black-transparent'" style="padding-bottom:20px;">
                  <div class="col s12 no-padding" v-bind:class="agency.page.background=='no-image'?'':' white-text'" v-bind:style="'color:'+agency.page.color + ';' ">
                    <div class="col">
                      <p><b>Dirección: </b> {{agency.location}}</p>
                    </div>
                    <div class="col">
                      <p>| <b> Telefono: </b> {{agency.phone}} | </p>
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
                        Paquete de vacaciones
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
                        Cruceros
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
  <div class="fixed-action-btn toolbar" style="z-index:999" v-show="false">
    <div class="tap-target indigo" data-activates="menu">
      <div class="tap-target-content white-text">
        <h5>Edita tu pagina</h5>
        <p>Dando Click aquí encontraras las opciones para editar tu pagina</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as firebase from "firebase/app"
import M from 'materialize-css'
import SideBar from '../components/SideBar'
export default{
  data: ()=> {
      return {
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
        "agency":{
          "page":{
            "background":"b1",
            "color":"#2196f3",
            "button":{}
          }
        },
        "agencies":{
          "ref": firebase.database().ref('agencies'),
          "list": []
        },
        "upload":{
          "file":"",
          "title":"",
          "loader":false,
          "time":""
        },
        "imgs":["cover1g","cover1h","cover1","cover1i","valle","cover3","cover1d","cover1a","cover1b","cover1f","acordeon-fondo","ffh","ffh2","ffh3","ffh-fondo"],
      }
  },
  created: function () {
    this.$root.validateSesion()
    this.getAgencyByUser(this.$root.session.user.agency)
    //this.indicators.increment.totals = getTotal(this.agency.list)
  },
  mounted:function() {
    M.Modal.init(document.querySelectorAll('.modal'))
    M.Tooltip.init(document.querySelectorAll('.tooltipped'))
  },
  methods:{
    uploadFile: function(e){
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload")
      data.append('referer', this.agency.referer)
      /*$.ajax({
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
    getAgencyByUser:function(e){
      this.agencies.ref.once('value', (agencies) => {
        agencies.forEach((agency) => {
          if (agency.val().nit == e) {
            this.agency = agency.val()
            if (this.agency.page == null) {
              this.agency.page = {
                "color":"#2196f3"
              }
          }

          if (this.agency.page.background == null) {
            this.agency.page = {
              "background":"b1"
            }
          }
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
            firebase.database().ref('agencies/'+this.agency.nit).set(this.agency).then(()=> {
            })
            setTimeout(()=> {
              M.updateTextFields()
              this.loader = false
            }, 1000)
          }
        })
      })
    },
    SaveChange:function(){
      this.agency.page.button={
          "flights": this.agency.page.button.flights,
          "hotels": this.agency.page.button.hotels,
          "flightsAndHotels": this.agency.page.button.flightsAndHotels,
          "packages": this.agency.page.button.packages,
          "cars": this.agency.page.button.cars,
          "bus": this.agency.page.button.bus,
          "cruisers": this.agency.page.button.cruisers,
          "assistance": this.agency.page.button.assistance
      }
      firebase.database().ref('agencies/'+this.agency.nit).set(this.agency).then(()=> {
        this.$root.messageService('toast','Cambios Guardados  🤖')
      }).catch(function (error) {
        console.log(error)
        this.$root.messageService("toast", "Algo salio mal, recarga la página por favor  🤖")
      });
    },
    changeBackground:function (img){
      this.agency.page.background = img
      //var img = 'https://aviatur-my.sharepoint.com/:i:/r/personal/samuel_garrido_aviatur_com_co/Documents/Datos%20adjuntos/b1.jpg?csf=1&e=SSSawg'
      //document.querySelector(div.chan)
    },
    uploadLogo: function(e){
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_img_agency")
      data.append('referer', this.agency.referer)
      //fetch('https://cors-anywhere.herokuapp.com/https://whitemanager.grupoaviatur.com/dir/upload.php',
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
    uploadFavicon: function(e){
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_favicon_agency")
      data.append('referer', this.agency.referer)
      /*$.ajax({
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
              this.$root.messageService("toast", "Favicon subido")
              this.upload.time = new Date().getTime()
            }
            if (data=="error" || data!="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Favicon no subido")
            }
          } catch (e) {
            this.upload.loader=false
            this.$root.messageService("toast", "Favicon no subido")
          }
        },
      })*/
    },
    changeColor: function(color){
      this.agency.page.color = color
    },
    /*
    initColorPicker: function(){
      var colorPicker = (function(){
      var config = {
        baseColors: [
          [46, 204, 113],
          [52, 152, 219],
          [155, 89, 182],
          [52, 73, 94],
          [241, 196, 15],
          [230, 126, 34],
          [231, 76, 60]
        ],
        lightModifier: 20,
        darkModifier: 0,
        transitionDuration: 200,
        transitionDelay: 25,
        variationTotal: 10
      };

      var state = {
        activeColor: [0, 0, 0]
      };

      function init(){
        createColorPicker(function(){
          appendBaseColors();
        });

        addEventListeners();

        setFirstColorActive(function(){
          setFirstModifiedColorActive();
        });
      }

      function setActiveBaseColor(el){
        $('.color.active').removeClass('active');
        el.addClass('active');
      }
      function setActiveColor(el){
        $('.color-var.active').removeClass('active');
        el.addClass('active');
        state.activeColor = el.data('color').split(',');
      }

      function addEventListeners(){
        $('body').on('click', '.color', function(){
          var color = $(this).data('color').split(',');
          setActiveBaseColor($(this));

          hideVariations(function(){
            createVariations(color, function(){
              setDelays(function(){
                showVariations();
              });
            });
          });
        });

        $('body').on('click', '.color-var', function(){
          setActiveColor($(this));
          setBackgroundColor();
        });
      }

      function setFirstColorActive(callback){
        $('.color').eq(1).trigger('click');
        callback();
      }

      function setFirstModifiedColorActive(){
        setTimeout(function(){
          //$('.color-var').eq(7).trigger('click');
        }, 500);
      }

      function createColorPicker(callback){
        //$('.color-picker3').append('<div class="base-colors"></div>');
        //$('.color-picker3').append('<div class="varied-colors"></div>');
        //$('.color-picker3').append('<div class="active-color"></div>');
        //$('.color-picker3').append('<div class="color-history"></div>');

        callback();
      }

      function appendBaseColors(){
        //for(i = 0; i < config.baseColors.length; i++){
          //$('.base-colors').append('<div class="color" data-color="' + config.baseColors[i].join() + '" style="background-color: rgb(' + config.baseColors[i].join() + ');"></div>');
        //}
      }
      function setBackgroundColor(){

        var r = Number(state.activeColor[0]).toString(16);
        var g = Number(state.activeColor[1]).toString(16);
        var b = Number(state.activeColor[2]).toString(16);
        var hex = r+g+b;
        console.log(hex);

        console.log(state.activeColor);
        for (var i = 0; i < state.activeColor.length; i++) {
          var h = Number(state.activeColor[i]).toString(16);
          console.log(h);
        }
      }
      function createVariations(color, callback){
        $('.varied-colors').html('');

        for(var i = 0; i < config.variationTotal; i++){
          var newColor = [];

          for (var x = 0; x < color.length; x++){
            var modifiedColor = (Number(color[x]) - 100) + (config.lightModifier * i);

            if(modifiedColor <= 0){
              modifiedColor = 0;
            } else if (modifiedColor >= 255){
              modifiedColor = 255;
            }

            newColor.push(modifiedColor);
          }

          $('.varied-colors').append('<div data-color="' + newColor + '" class="color-var" style="background-color: rgb(' + newColor + ');"></div>');
        }

        callback();
      }

      function setDelays(callback){
        $('.color-var').each(function(x){
          $(this).css({
            'transition': 'transform ' + (config.transitionDuration / 1000) + 's ' + ((config.transitionDelay / 1000) * x) + 's'
          });
        });
        callback();
      }
      function showVariations(){
        setTimeout(function(){
          $('.color-var').addClass('visible');
        },(config.transitionDelay * config.variationTotal));
      }
      function hideVariations(callback){
        $('.color-var').removeClass('visible').removeClass('active');

        setTimeout(function(){
          callback();
        },(config.transitionDelay * config.variationTotal));
      }
      return{
        init: init
      };

    }());
    colorPicker.init();
    }
    */
  },
  beforeCreate: function () {
    //(document).ready(()=>{
      //this.initColorPicker()
      //$('.tooltipped').tooltip({delay: 50});
      //$('.modal').modal();
      //$('.tap-target').tapTarget('open');
      /*
      function localStorageAvailable() {
          if (typeof(Storage) !== "undefined") {
              return true;
          }
          else {
              return false;
          }
      }

      $('#check').click(function(){
        if($('#check').prop('checked')){
          if (localStorageAvailable()){
              localStorage.DoNotShowMessageAgain = "true";
          }
        }else{
          if (localStorageAvailable()){
              localStorage.DoNotShowMessageAgain = "false";
          }
        }

      })

      if(localStorage.getItem("DoNotShowMessageAgain") == "true"){
        $('#instructions').modal('close');
        $('#check').prop("checked",true);
      }else{
        $('#instructions').modal('open');
        $('#check').prop("checked",false);
      }

      $('#text').val($('#colorinput').val());
      $('#text').change(function() {
        $('#colorinput').val($('#text').val());
        $('2').attr('data-value', $('#text').val());
      });

      $('#colorinput').change(function() {
        $('#text').val($(this).val().toUpperCase());
        $('.color-picker3').attr('data-value', $(this).val().toUpperCase());
      });

      $('.btn-color').click(function(e) {
        let cx = e.clientX;
        let transform = cx - 125;
        $('.translate').css("transform", 'translate(' + transform + 'px)');
        $('.color-picker3').css("transform", "scale(1,1)");
      });

      $('#close').click(function() {
        $('.color-picker3, .translate').css('transform', 'scale(0,0)');
      });

      //this.getAllChartsAgencies()
    });*/
  },
  components:{
    SideBar
  }
}
</script>
