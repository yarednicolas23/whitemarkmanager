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
</style>
<template>
  <div class="row blue-grey darken-4">
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
          <div class="row">
             <div class="no-padding">
               <ul class="tabs transparent white-text">
                 <li class="tab col s3"><a  class="active" href="#general">Información General</a></li>
                 <li class="tab col s3"><a href="#info">Detalles de la agencia</a></li>
                 <li class="tab col s3"><a href="#details">Detalles Tecnicos</a></li>
                 <li class="tab col s3 hide"><a href="#atached">Adjuntos</a></li>
                 <li class="tab col s3"><a href="#reports">Reportes</a></li>
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
                                    <span class="add"><a class="btn-floating btn-small blue waves-effect waves-light"><i class="large material-icons">edit</i><input type="file" v-on:change="uploadLogo($event)"></a></span><br><br>
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
                                    <input readonly="readonly" name="nit" type="text" v-model="agency.nit">
                                    <label for="icon_prefix">NIT</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="RNT">beenhere</i>
                                    <input readonly="readonly" name="rnt" type="text"  v-model="agency.rnt">
                                    <label for="icon_prefix">RNT</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Representante legal">gavel</i>
                                    <input name="legal" type="text" v-model="agency.legal"/>
                                    <label for="icon_prefix">Representante legal</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Fecha de Registro">date_range</i>
                                    <input name="date" type="text" v-model="agency.date">
                                    <label for="icon_prefix">Fecha de Registro</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Cuidad de la Agencia">location_on</i>
                                    <input name="" readonly="readonly" type="text" v-model="agency.country">
                                    <label for="icon_prefix">Cuidad de la Agencia</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Dirreción de la Agencia">my_location</i>
                                    <input name="location" type="text" v-model="agency.location">
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
                                    <input name="referer" type="text" v-model="agency.referer">
                                    <label for="referer">Referer</label>
                                  </div>
                                </td>
                              </tr>
                              <tr clas="">
                                <td class="">
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Centro de Costos">attach_money</i>
                                    <input name="costcenter" type="text" v-model="agency.costcenter">
                                    <label for="costcenter">Centro de Costos</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Fecha de Registro">date_range</i>
                                    <input name="date" type="text" v-model="agency.dateend">
                                    <label for="icon_prefix">Fecha de Entrega</label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="input-field col s12">
                                    <i class="material-icons prefix tooltipped" data-position="left" data-delay="50" data-tooltip="Comercial de la Negociación">person_pin</i>
                                    <input name="comercial" type="text" v-model="agency.comercial"/>
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
             <div id="atached" class="col s12">
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
                          <!-- v-if="file != 'liquidations'"-->
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
             </div>
             <div id="reports" class="">
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
           </div>
        </div>
        <!-- Modal activate create mark -->
        <div id="activatemark" class="modal">
          <div class="modal-content">
            <h4>¿Está seguro que desea activar esta marca?</h4>
            <p>Recuerde que al dar click en "Activar" la pagina web estará activa en la URL que este registrada actualmente.</p>
            <p>Recuerde también verificar los datos URL, referer, telefóno, dirección y email.</p>
            <div class="">
              <div class="input-field col s8">
                <input placeholder="Bearer" id="key" type="text" v-model="this.bearer" class="validate">
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
        <div id="errorActivatemark" class="modal" style="background-color:#fff">
          <div class="modal-content" style="color:#ff887c;">
          <h3><i class="material-icons" style="font-size: 30px; font-weight:bold;">error_outline</i> Error al activar</h3>
            <h5>Recuerde que necesita una Key Bearer para realizar la activación.</h5>
          </div>
        </div>
        <div class="fixed-action-btn toolbar">
          <a class="btn-floating btn-large indigo">
            <i class="large material-icons">mode_edit</i>
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
      "colorOff": "rgba(253, 15, 21, 0.31)",
      "colorOn": "rgba(62, 160, 81, 0.89)",
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
    getAgency:function (agency) {
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
            setTimeout(()=> {
              M.updateTextFields()
              M.Tabs.init(document.querySelectorAll('.tabs'))
              this.loader = false
            },900)
          }
        });
      });
    },
    getFiles:function (referer) {
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
    addNote:function() {
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
    openModalActivateMark:function() {
      var instance = M.Modal.getInstance(document.getElementById('#activatemark'))
      instance.open()
    },
    openModalErrorActivateMark:function() {
      var instance = M.Modal.getInstance(document.getElementById('#errorActivatemark'))
      instance.open()
      var modal = M.Modal.getInstance(document.getElementById('#activatemark'))
      modal.close()
    },
    activateMark:function() {
      this.loaderservice=!this.loaderservice
      this.activatebutton=true
      var data={
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
      console.log(JSON.stringify(data));
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
    uploadLogo: function (e) {
      var data= new FormData()
      this.upload.loader= true
      data.append('attachment_file', e.target.files[0])
      data.append('type', "upload_img_agency")
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
              this.$root.messageService("toast", "Logo subido")
              this.upload.time = new Date().getTime()
            }
            if (data=="error" || data!="ok") {
              this.upload.loader=false
              this.$root.messageService("toast", "Logo no subido")
            }
          } catch (e) {
            this.upload.loader=false
            this.$root.messageService("toast", "Logo no subido")
          }
        },
      });*/

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
    getLetter: function(){
      this.letter = this.agency.agency.substring(0, 1)
    },
    saveReport: function(){
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
    }
  },
  beforeCreate: function () {

    /*
    $(document).ready(()=>{
      $('.modal').modal();
      $('.tabs').tabs();
      $('input#input_text, textarea#note').characterCounter()
      $('.collapsible').collapsible()
      $('.tooltipped').tooltip({delay: 50})
      $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
      });
    })*/
  }
}
</script>
