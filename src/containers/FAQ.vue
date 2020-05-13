<template>
  <div class="row blue-grey darken-4">
    <SideBar/>
    <div class="col s12 m12 l10 right full-screen">
      <ul class="collapsible" data-collapsible="accordion">
         <li :key="index" v-for="(question,index) in questions.list ">
           <div class="collapsible-header blue-grey darken-4  blue-grey-text text-lighten-3" >
             <i v-if="question.type == 1" class="material-icons tooltipped" data-position="right" data-tooltip="Pagina Web">format_shapes</i>
             <i v-if="question.type == 2" class="material-icons tooltipped" data-position="right" data-tooltip="Comercial (Negociación)">business_center</i>
             <i v-if="question.type == 3" class="material-icons tooltipped" data-position="right" data-tooltip="Liquidaciones y ventas">monetization_on</i>
             {{question.title}}
           </div>
           <div class="collapsible-body white-text">
             <h6><b>Pregunta:</b></h6>
             <span class="light">{{question.title}} </span>
             <h6><b>Descripción:</b></h6>
             <span class="light">{{question.description}} </span>
             <div v-if="question.answer != ''">
               <h5 class="light"><b>Respuesta:</b></h5>
               <span>{{question.answer}}</span>
             </div>
             <br><br>
             <form v-if="$root.session.user.fRol == 1" v-on:submit.prevent="AddAnswer(question,index)">
               <div class="input-field col s12">
                 <i class="material-icons prefix">question_answer</i>
                 <textarea id="answer" class="materialize-textarea" data-length="120" v-model="question.answer"></textarea>
                 <label for="answer">Responder Pregunta</label>
               </div>
               <div class="col s12 m3">
               <button class="btn indigo waves-effect" type="submit" name="button">Responder <i class="material-icons left">add</i></button>
             </div>
             </form>
             <div v-if="$root.session.user.fRol == 1">
               <button class="btn red waves-effect" type="button" name="button" v-on:click="deleteFaq(question,index)"><i class="material-icons left">delete</i>eliminar</button>
             </div>
           </div>
          </li>
        </ul>
        <div class="col s12">
          <div class="col s12 white-text" v-if="$root.session.user.fRol != 1">
            <br>
            <h4>¿Tienes una pregunta?</h4>
            <form class="" v-on:submit.prevent="AddQuestions()">
              <h6>Tipo de Pregunta</h6>
              <div>
                <select name="type" id="type" class="browser-default black-text" v-model="create.question.type">
                  <option value="1">Sobre Mi Pagina Web</option>
                  <option value="2">Pregunta Comercial o de Negociación</option>
                  <option value="3">Pregunta de Liquidaciones y Ventas</option>
                </select>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">playlist_add</i>
                <textarea id="title" class="materialize-textarea" data-length="120" v-model="create.question.title"></textarea>
                <label for="title">Agregar pregunta</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">description</i>
                <textarea id="description" class="materialize-textarea" data-length="120" v-model="create.question.description"></textarea>
                <label for="description">Agregar description</label>
              </div><br>
              <button class="btn indigo waves-effect" type="submit" name="button">Agregar <i class="material-icons left">add</i></button>
            </form>
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
       "questions":{
         "ref":firebase.database().ref('faq'),
         "list":[]
       },

       "create":{
         "question":{}
       }
     }
 },
 created: function () {
   this.$root.validateSesion()
   this.getQuestions()
 },
 beforeCreate: function () {
   /*
   $(document).ready(()=>{
     $('.tooltipped').tooltip({delay: 50})
     $('.collapsible').collapsible()
     $('textarea#title, textarea#description').characterCounter()
   })*/
 },
 methods:{
   AddQuestions: function() {
     this.create.question.answer=""
     this.create.question.user= this.$root.session.user.document
     firebase.database().ref('faq/'+this.questions.list.length).set(this.create.question).then(()=> {
         this.$root.messageService('toast','Pregunta Agregada  🤖', 10000)
         this.create.question = {}
     }).catch(function (error) {
         console.log(error)
         this.$root.messageService('toast','Algo salio mal, recarga la pagina por fa 🤖', 10000)
     })
   },
   AddAnswer: function(question,index) {
     firebase.database().ref('faq/'+index).set(question).then(()=> {
         this.$root.messageService('toast','Cambio guardado  🤖', 10000)
     }).catch(function (error) {
         console.log(error)
         this.$root.messageService('toast','Algo salio mal, recarga la pagina por fa 🤖', 10000)
     })
   },
   getQuestions: function() {
     this.questions.ref.once('value', (questions) => {
       questions.forEach((question) => {
         this.questions.list.push(question.val())
       })

       M.Collapsible.init(document.querySelectorAll('.collapsible'))
     })
   },
   deleteFaq:function (question,index) {
     firebase.database().ref('faq/'+index).set(null).then(()=> {
         this.$root.messageService('toast','Pregunta eliminada  🤖', 10000)
     }).catch(function (error) {
         console.log(error)
         this.$root.messageService('toast','Algo salio mal, recarga la pagina por fa 🤖', 10000)
     })
   }
 },
 components:{
   SideBar
 }
}
</script>
