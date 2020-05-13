<template>
  <div class="row blue-grey darken-4 full-screen">
      <SideBar/>
      <div class="col s12 m12 l10 right">
          <div class="col s12 m7 l7">
            <div class="card blue-grey darken-3">
              <div class="card-content row">
                <span class="card-title white-text">Tabla de comisiones</span>
                <div class="col s12">
                    <table class="white-text">
                      <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Porcentaje de Comision</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Vuelos</td>
                          <td>1% (Sin contar hover)</td>
                        </tr>
                        <tr>
                          <td>Hoteles</td>
                          <td>14%</td>
                        </tr>
                        <tr>
                          <td>Vuelo + Hotel</td>
                          <td>1% (vuelo) + 14% (hotel)</td>
                        </tr>
                        <tr>
                          <td>Cruceros con cadenas Royal Caribbean, Celebrity y Azamara</td>
                          <td>15%</td>
                        </tr>
                        <tr>
                          <td>Asistencia Medica</td>
                          <td>30% o 35%</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col s12 m5 l5">
            <div class="card blue-grey darken-3 white-text">
              <div class="card-content">
                <span class="card-title">Calcular comisión por vuelos:</span>
                <div class="row">
                  <div class="input-field col s12">
                    <input placeholder="Eje: $ 1.000.000" id="value" type="number" class="white-text validate" v-model="calculate.value">
                    <label for="value">Valor de la venta</label>
                  </div>
                  <div class="col s6">
                    <p>Valor aproximado de comisión</p>
                    <h4 :class="calculate.value * 0.01< 50000?'orange-text':'green-text'">{{intToString(calculate.value * 0.01)}}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>

</template>

<script>
import SideBar from '../components/SideBar'
import M from 'materialize-css'
export default {
  data: ()=> {
      return {
        "calculate":{
          "value":null,
          "porcentage":0,
          "comission":0,
        }
      }
  },
  components:{
    SideBar
  },
  created: function () {
    this.$root.validateSesion()
  },
  mounted(){
    M.updateTextFields();
  },
  methods:{
    intToString:function (value) {
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'COP',
      })
      return formatter.format(value)
    }
  },
  beforeCreate: function () { }
}
</script>
