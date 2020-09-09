<template>
  <div class="row">
      <SideBar/>
      <nav class="col s12 m12 l10 right white">
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input id="search" type="search" v-model="search" required>
              <label class="label-icon" for="search"><i class="material-icons grey-text">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <div class="col s12 m12 l10 right">
        <div class="col s12 center" v-if="users.list.length<1">
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
        <div class="col s12 m12 l10 ">
          <div class="collection no-border" v-if="users.list.length>1">
            <div class="col s12 m6 l6 " :key="index" v-for="(user,index) in filteredList ">
                <a v-bind:href="'#/user/'+user.document" class="collection-item avatar transparent no-border waves-effect">
                  <i class="circle blue-dark-gradient white-text material-icons tooltipped mobile-no-show" data-position="top" data-delay="5" data-tooltip="">mood</i>
                  <p class="black-text text-trasnform">{{limitText(user.name+' '+user.fName)}}</p>
                  <p class="grey-text">
                      <span v-bind:class="getRol(user.fRol).color">{{getRol(user.fRol).name}}</span> - {{getCountry(user.city)}} <br>
                  </p>
                </a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import * as firebase from "firebase/app"
import SideBar from '../components/SideBar'
export default{
  data: function() {
      return {
        "search": "",
        "users":[],
        "cities":{
          "list":["Bogotá","Medellín","Cali","Bucaramanga","Cartagena","Barranquilla","Cúcuta","Pasto","Santa Marta","Riohacha","Rep Dominicana","Pereira","Armenía","Sogamoso"]
        }
      }
  },
  components:{
    SideBar
  },
  created: function () {
    this.$root.validateSesion()
    this.users = this.getUsersList()
  },
  beforeCreate: ()=>{
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  },
  methods:{
    limitText (text) {
      let body = this.stripTags(text);
      return body.length > 20 ? body.substring(0, 20) + '...' : body
    },
    stripTags (text) {
        return text.replace(/(<([^>]+)>)/ig, '')
    },
    getRol (rol) {
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
          return {"color":"pink-text","name":"Agencia"}
        default:
        return {"color":"pink-text","name":"Agencia"}
      }
    },
    getUsersList: function() {
      this.users = {
        ref: firebase.database().ref('users'),
        list: []
      }
      this.users.ref.once('value', (snapshot)=> {
        snapshot.forEach((childSnapshot)=> {
          this.users.list.push(childSnapshot.val())
        });
      });
      return this.users
    },
    clickUser:function (user) {
      console.log(user);
    },
    getCountry:function(country) {
      if (country=="Bogotá") {
        return "Bogotá"
      }
      var i = 0
      for (i = 0; i < this.cities.list.length; i++) {
          if (i == parseInt(country)) {
            return this.cities.list[i]
          }
      }
    }
  },
  computed: {
    filteredList() {
      return this.users.list.filter((user) => {
        return user.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
}
</script>
