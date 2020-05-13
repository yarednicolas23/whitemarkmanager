<template>
  <div class="row blue-grey darken-4 full-screen">
    <SideBar/>
    <div class="col s12 m12 l10 no-padding right">
      <div class="container">
        <table class="white-text">
          <thead>
            <tr>
              <th class="hide">Usuario</th>
              <th>Icono</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="index" v-for="(n,index) in list">
              <td class="hide">{{index}}</td>
              <td><i class="material-icons">{{n.icon}}</i> </td>
              <td>{{n.name}}</td>
              <td>{{n.description}}</td>
              <td>{{new Intl.DateTimeFormat('en',{day:'numeric',year:'numeric',month:'long'}).format(new Date(n.date))}}</td>
              <td><router-link :to="n.url">{{n.url}}</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar'
import * as firebase from "firebase/app"
import M from 'materialize-css'
export default {
  data: ()=> {
    return {
      "list":[],
      "ref":firebase.database().ref('notifications')
    }
  },
  beforeCreate:function(){},
  created: function(){
    this.$root.validateSesion()
  },
  mounted:function(){
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'))
    this.getNotificationsList()
  },
  methods:{
    getNotificationsList(){
      this.ref.once('value', (snapshot)=> {
        snapshot.forEach((n)=> {
          if (n.key==this.$root.session.user.document) {
            this.list=n.val()
          }
        })
        if (this.$root.session.user.fRol=='1') {
          snapshot.forEach((n)=> {
            if (n.key=='admin') {
              this.list=n.val()
            }
          })
        }
      })
    }
  },
  components:{
    SideBar
  }
}
</script>
