<template>
  <div>
    <ul class="right">
      <li><span class="badge red white-text" style="border-radius:15px;min-width:1rem;margin-top:5px">{{list.length}}</span><a class='dropdown-trigger' data-target='notifications'><i class="material-icons">notifications</i></a></li>
    </ul>
    <!-- Dropdown Structure -->
    <ul id='notifications' class='dropdown-content' style="min-width:400px;width:400px">
      <li v-bind:key="index" v-for="(n,index) in list">
        <router-link :to="n.url" class="blue-grey-text">
          <i class="material-icons">{{n.icon}}</i>
          <h6>{{n.name}}</h6>
          <p class="thin" style="padding-left:50px">{{n.description}}</p>
          <p class="thin" style="padding-left:50px;font-size:0.8rem">{{n.date}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import * as firebase from "firebase/app"
import M from 'materialize-css'
export default {
  data: ()=> {
    return {
      "list":[],
      "ref":firebase.database().ref('notifications')
    }
  },
  beforeCreate:function() {},
  created: function () {
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
      })
    }
  }
}
</script>
