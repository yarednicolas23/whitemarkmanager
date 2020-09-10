import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'

import App from './App.vue'

import Home from './components/Home'
import SideBar from './components/SideBar'
import Notifications from './containers/Notifications'
import Login from './containers/Login'
import Admin from './containers/Admin'
import Users from './containers/Users'
import User from './containers/User'
import Profile from './containers/Profile'
import Agencies from './containers/Agencies'
import Confirmation from './containers/Confirmation'
import Agency from './containers/Agency'
import MyAgency from './containers/MyAgency'
import MyAgencyDesign from './containers/MyAgencyDesign'
import Info from './containers/Info'
import FAQ from './containers/FAQ'

import * as firebase from "firebase/app"
import "firebase/database"
import M from 'materialize-css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueCookie)

const routes = [
  { path: '/',name:'Home', component:Home },
  { path: '/how',name:'Home', component:Home },
  { path: '/moreinfo',name:'Home', component:Home },
  { path: '/register',name:'Home', component:Home },

  { path: '/login', component:Login },
  { path: '/users', component:Users },
  { path: '/user/:id', component:User },
  { path: '/profile/', component:Profile },
  { path: '/admin', name:'Admin',component:Admin },
  { path: '/agencies', component:Agencies },
  { path: '/agency/:id', component:Agency },
  { path: '/myagency', component:MyAgency },
  { path: '/myagencydesign', component:MyAgencyDesign },
  { path: '/confirmation/:id', component:Confirmation },
  { path: '/info',component:Info },
  { path: '/notifications',component:Notifications},
  { path: '/faq',component:FAQ},
  { path: '/reports',component:Vue.component('reports')},
  { path: '/email',component:Vue.component('email')},
  { path: '/transactions',component:Vue.component('transactions')},
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

const config = {
  apiKey: "AIzaSyDkr599TXCCUDlltNjAKocXcXvZ_9sAtdw",
  authDomain: "whitemark-54535.firebaseapp.com",
  databaseURL: "https://whitemark-54535.firebaseio.com",
  projectId: "whitemark-54535",
  storageBucket: "whitemark-54535.appspot.com",
  messagingSenderId: "611091130785"
};

new Vue({
  render: h => h(App),
  router,
  data:{
    "users":[],
    "theme":{
      "background":"",
      "text":""
    },
    "session":{
      "user":{}
    }
  },
  components: {
    Home,
    SideBar
  },
  created: function () {
    firebase.initializeApp(config)
    //this.session.user = this.$cookie.get('user')
  },
  methods:{
    validateSesion: function () {
      this.session.user = JSON.parse(this.$cookie.get('user'))
      if (this.session.user!=null) {
        if (this.$route.path=="/") {
          if (this.session.user.fRol == 5) {
            router.push('myagencydesign')
            return
          }
          if (this.session.user.fRol == 1) {
            router.push('admin')
          }
          if (this.session.user.fRol == 4) {
            router.push('agencies')
          }else {
            router.push('admin')
          }
        }
        else {
          router.push('')
        }
      }
      if (this.session.user == null) {
        this.session.user = this.$cookie.get('user')
        if (this.$route.path=="/confirmation") {
          router.push('Admin')
          return
        }
        if (this.$route.path=="/") {
          router.push('')
        }
        else {
          router.push('/')
        }
      }
    },
    closeSession:function() {
      this.$cookie.delete('user')
      this.validateSesion()
      router.push('/')
    },
    messageService: function (type,message) {
      if (type=="toast") {
          M.toast({html:message,displayLength:4000})
      }
    }
  }
}).$mount('#app')
