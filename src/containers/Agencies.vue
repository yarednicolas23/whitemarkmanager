<template>
  <div class="row blue-grey darken-4">
      <SideBar/>
      <nav class="col s12 m12 l10 right blue-grey darken-3">
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input id="search" type="search" v-model="search" required>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <div class="col s12 m12 l10 right">
        <div class="col s12 center" v-if="agencies.list.length<1">
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
        <div class="collection no-border" v-if="agencies.list.length>1">
          <div class="col s12 m6 l4">
            <div class="col s12 " v-bind:key="index" v-for="(agency,index) in onlineList">
                <a v-bind:href="'#/agency/'+agency.nit" class="collection-item avatar transparent no-border waves-effect">
                    <i class="circle blue-dark-gradient white-text">{{agency.agency.substring(0, 1)}}</i>
                    <span class="title white-text text-trasnform">{{limitText(agency.agency)}} -</span><span class="grey-text"> {{getCountry(agency.country)}}</span>
                    <p class="grey-text">
                        <span v-bind:class="'chip white-text '+colorState(agency.state)">{{getState(agency.state)}}</span>
                    </p>
                    <div class="secondary-content btn-flat waves-effect" v-on:click="clickAgency(index)"><i class="material-icons grey-text tooltipped" data-position="top" data-delay="5" data-tooltip="Ver Detalles de la Reserva">more_vert</i></div>
                </a>
            </div>
          </div>
          <div class="col s12 m6 l4">
            <div class="col s12 " v-bind:key="index" v-for="(agency,index) in initialList">
                <a v-bind:href="'#/agency/'+agency.nit" class="collection-item avatar transparent no-border waves-effect">
                    <i class="circle blue-dark-gradient white-text">{{agency.agency.substring(0, 1)}}</i>
                    <span class="title white-text text-trasnform">{{limitText(agency.agency)}} -</span><span class="grey-text"> {{getCountry(agency.country)}}</span>
                    <p class="grey-text">
                        <span v-bind:class="'chip white-text '+colorState(agency.state)">{{getState(agency.state)}}</span>
                    </p>
                    <div class="secondary-content btn-flat waves-effect" v-on:click="clickAgency(index)"><i class="material-icons grey-text tooltipped" data-position="top" data-delay="5" data-tooltip="Ver Detalles de la Reserva">more_vert</i></div>
                </a>
            </div>
          </div>
          <div class="col s12 m6 l4">
            <div class="col s12" v-bind:key="index" v-for="(agency,index) in offlineList">
                <a v-bind:href="'#/agency/'+agency.nit" class="collection-item avatar transparent no-border waves-effect">
                    <i class="circle blue-dark-gradient white-text">{{agency.agency.substring(0, 1)}}</i>
                    <span class="title white-text text-trasnform">{{limitText(agency.agency)}} -</span><span class="grey-text"> {{getCountry(agency.country)}}</span>
                    <p class="grey-text">
                        <span v-bind:class="'chip white-text '+colorState(agency.state)">{{getState(agency.state)}}</span>
                    </p>
                    <div class="secondary-content btn-flat waves-effect" v-on:click="clickAgency(index)"><i class="material-icons grey-text tooltipped" data-position="top" data-delay="5" data-tooltip="Ver Detalles de la Reserva">more_vert</i></div>
                </a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
//Vue.component("agencies",
import * as firebase from "firebase/app"
import SideBar from '../components/SideBar'
export default{
  data: function() {
      return {
        "search": "",
        "agencies":[],
        "states":{},
        "cities":{
          "ref":firebase.database().ref('cities'),
          "list":[]
        }
      }
  },
  components:{
    SideBar
  },
  created: function () {
    this.$root.validateSesion()
    this.agencies = this.getAgenciesList()
  },
  beforeCreate: ()=>{
    //$('.tooltipped').tooltip({delay: 10});
  },
  methods:{
    limitText (text) {
      let body = this.stripTags(text);
      return body.length > 20 ? body.substring(0, 20) + '...' : body
    },
    stripTags (text) {
        return text.replace(/(<([^>]+)>)/ig, '')
    },
    colorState(state) {
      switch (state) {
        case 0:
          return "green"
        case 1:
          return "indigo"
        case 2:
          return "red"
        case 3:
          return "orange"
        case 4:
          return "black"
        default:

      }
    },
    getState(state) {
      switch (state) {
        case 0:
          return "Online"
        case 1:
          return "Inicial"
        case 2:
          return "Offline"
        case 3:
          return "En Proceso"
        case 4:
          return "No Continuo"
        default:

      }
    },
    getAgenciesList: function() {
      this.agencies = {
        ref: firebase.database().ref('agencies'),
        list: []
      }
      this.agencies.ref.once('value', (snapshot)=> {
        snapshot.forEach((childSnapshot)=> {
          this.agencies.list.push(childSnapshot.val())
        });
      });
      this.cities.ref.once('value', (snapshot)=> {
        snapshot.forEach((childSnapshot)=> {
          this.cities.list.push(childSnapshot.val())
        });
      });
      return this.agencies
    },
    clickAgency:function () {
      //console.log(agency);
    },
    getCountry:function(country) {
      var i = 0
      for (i = 0; i < this.cities.list.length; i++) {
          if (i == parseInt(country)) {
            return this.cities.list[i]
          }
      }
    }
  },
  computed: {
    onlineList() {
      return this.agencies.list.filter((agency) => {
        if (agency.agency != null&&agency.state==0) {
          return agency.agency.toLowerCase().includes(this.search.toLowerCase());
        }
      });
    },
    initialList() {
      return this.agencies.list.filter((agency) => {
        if (agency.agency != null) {
          if (agency.state==1||agency.state==3) {
            return agency.agency.toLowerCase().includes(this.search.toLowerCase());
          }
        }
      });
    },
    offlineList() {
      return this.agencies.list.filter((agency) => {
        if (agency.agency != null) {
          if (agency.state==2 || agency.state==4 || typeof agency.state =='string'||agency.state==undefined) {
            return agency.agency.toLowerCase().includes(this.search.toLowerCase());
          }
        }
      });
    },
  }
}
</script>
