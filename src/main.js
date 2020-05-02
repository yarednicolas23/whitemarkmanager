import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookie'

import App from './App.vue'

import * as firebase from "firebase/app"
import "firebase/database";
import M from 'materialize-css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueCookie)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/login', component: Foo },
  { path: '/bar', component: Bar }
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
    "session":{
      "user":{}
    }
  },
  created: function () {
    firebase.initializeApp(config)

    //this.session.user = this.$cookies.get('user')
  },
  methods:{
    validateSesion: function () {
      this.session.user = this.$cookies.get('user')
      if (this.session.user!=null) {
        if (this.$route.path=="/login") {
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
        this.session.user = this.$cookies.get('user')
        if (this.$route.path=="/confirmation") {
          //router.push('admin')
          return
        }
        if (this.$route.path=="/") {
          router.push('')
        }
        else {
          router.push('/login')
        }
      }
    },
    closeSession:function() {
      this.$cookies.remove('user')
      //this.validateSesion()
      router.push('/')
    },
    messageService: function (type,message) {
      if (type=="toast") {
          M.toast({html:message,displayLength:4000})
      }
    }
  }
}).$mount('#app')
