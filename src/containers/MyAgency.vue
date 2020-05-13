<template>
  <div class="row blue-grey darken-4">
    <SideBar/>
    <div class="col s12 m12 l10 right">
      <!-- Tasa de crecimiento de ventas funtion incrementIndicator() -->
      <div id="increment" class="col s12 m12 l6">
        <div class="card gradient-blue white-text">
          <div class="card-content">
            <div class="row">
              <div class="col s12 m6 l6 no-padding">
                <h2 class="thin no-margin">{{intToString(indicators.increment.totals)}}</h2>
                <p class="thin no-margin">Total de ventas hasta el mes <b>{{indicators.lastMonth}}</b> del {{new Date().getFullYear()}}</p>
              </div>
              <div class="col s12 m6 l6">
                <div class="col s12">
                  <h4
                  class="thin right no-margin tooltipped"
                  data-position="right"
                  data-tooltip="Anterior mes"
                  style="cursor:pointer">{{intToString(indicators.increment.totalsBeforeMoth)}}</h4>
                </div>
                <h4 class="thin right hide">
                  <i id="lastMonthIndicator" v-bind:class="'right material-icons '+indicators.increment.increase.color+'-text'">{{indicators.increment.increase.icon}}</i>
                  <span class="tooltipped"
                  data-position="right"
                  data-tooltip="Porcentaje de Crecimiento"
                  style="cursor:pointer"></span>
                 </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sales of Now Month function nowMonth()-->
      <div id="now" class="col s12 l6">
        <div class="card gradient-orange white-text">
          <div class="card-content">
            <div class="row">
              <div class="col s12 m6 l6">
                <h2 class="thin no-margin">{{intToString(indicators.now.totals)}}</h2>
                <p class="thin">Ventas del Mes de <b>{{indicators.lastMonth}}</b> del {{new Date().getFullYear()}}</p>
              </div>
              <div class="col s12 m6 l6">
                <div class="col s12">
                  <h4
                  class="right thin no-margin tooltipped"
                  data-position="left"
                  data-tooltip="Mes Anterior"
                  style="cursor:pointer" >{{intToString(indicators.now.totalsBeforeMoth)}}</h4>
                </div>
                <h4 class="thin">
                  <span
                  class="right tooltipped"
                  data-position="left"
                  data-tooltip="Porcentaje de Crecimiento"
                  style="cursor:pointer"></span>
                  <i id="lastMonthIndicator" v-bind:class="'right material-icons '+indicators.increment.increase.color+'-text'">{{indicators.increment.increase.icon}}</i>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Charts  -->
      <div class="col s12">
        <h5 class="white-text thin">Reportes y Estadisticas</h5>
      </div>
      <div class="col s12 m6 l6">
        <div class="card blue-grey darken-3">
          <div class="card-content white-text">
            <span class="card-title">Ventas</span>
            <canvas id="sales" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
      <div class="col s12 m6 l6">
        <div class="card blue-grey darken-3">
          <div class="card-content white-text">
            <span class="card-title">Comisiones</span>
            <canvas id="commission" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app"
//import M from 'materialize-css'
import Chart from 'chart.js'
import SideBar from '../components/SideBar'
export default{
  data: ()=> {
    return {
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
      "indicators":{
        "lastMonth":"",
        "increment":{
          "increase":{
            "icon":"",
            "color":""
          },
          "totals":0,
          "totalsBeforeMoth":0
        },
        "now":{
          "increase":{
            "icon":"",
            "color":""
          },
          "totals":0,
          "totalsBeforeMoth":0
        },
        "charts":[
          {
            "2020":{
              "months":[
                "enero",
                "febrero",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre"
              ],
              "sales":[0,0,0,0,0,0,0,0,0,0,0,0]
            }
          },
          {
            "names":[],
            "values":[]
          }
        ],
      },
      "agencies":{
        "ref": firebase.database().ref('agencies'),
        "list": []
      }
    }
  },
  created: function () {
    this.$root.validateSesion()
    this.getAgencyByUser(this.$root.session.user.agency)
  },
  beforeCreate: function () {

  },
  methods:{
    getAgencyByUser:function(e) {
      this.agencies.ref.once('value', (agencies) => {
        agencies.forEach((agency) => {
          if (agency.val().nit == e) {
            this.agency = agency.val()
            if (this.agency.charts !=null) {
              this.getYearsToCharts()
              this.getCharts()
              this.getTotal(this.agency)
            }
            if (this.agency.page == null) {
              this.agency.page = {
                "color":"#2196f3"
              }
            }
          }
        })
      })
    },
    getTotal:function (agency) {
      //var date = new Date()
      console.log(agency);
      /*$.each(agency.charts[date.getFullYear()].sales, ( key, value )=> {
        if (key != this.indicators.charts[0][date.getFullYear()].months[date.getMonth() - 1]) {
          this.indicators.increment.totalsBeforeMoth = this.indicators.increment.totalsBeforeMoth + value;
        }
        this.indicators.increment.totals = this.indicators.increment.totals + value;
      })
      this.indicators.lastMonth = this.indicators.charts[0][date.getFullYear()].months[date.getMonth()];

      $.each(agency.charts[date.getFullYear()].sales, ( key, value )=> {
        if (key == this.indicators.charts[0][date.getFullYear()].months[date.getMonth() - 1]) {
          this.indicators.now.totalsBeforeMoth = this.indicators.now.totalsBeforeMoth + value;
        }
        if (key == this.indicators.lastMonth) {this.indicators.now.totals = this.indicators.now.totals + value;}
      })
      if (this.indicators.now.totalsBeforeMoth<this.indicators.now.totals ) {
        this.indicators.increment.increase.icon ="arrow_drop_up"
        this.indicators.increment.increase.color ="green"
      }
      if (this.indicators.now.totalsBeforeMoth>this.indicators.now.totals ) {
        this.indicators.increment.increase.icon ="arrow_drop_down"
        this.indicators.increment.increase.color ="red"
      }*/
    },
    intToString:function (value) {
        var suffixes = ["", "k", "m", "b","t"];
        var divisor = 4;
        if (value < 20000000) {
          divisor = 3;
        }
        var suffixNum = Math.floor((""+value).length/divisor);
        var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(3));
        //if (shortValue % 1 != 0) {
          //var shortNum = shortValue.toFixed(1);
        //}
        return shortValue+suffixes[suffixNum];
    },
    getYearsToCharts:function() {
      /*$.each(this.agency.charts, (key, value)=> {
        this.getSales(key)
      })*/
    },
    getSales:function() {
      //function(year,type)
      /*
      $.each(this.agency.charts[year].sales, (key, value)=> {
        switch (key) {
          case 'enero':
            this.charts[year].sales.months[0] = key;
            this.charts[year].sales.values[0] = value;
            break;
          case 'febrero':
            this.charts[year].sales.months[1] = key;
            this.charts[year].sales.values[1] = value;
            break;
          case 'marzo':
            this.charts[year].sales.months[2] = key;
            this.charts[year].sales.values[2] = value;
            break;
          case 'abril':
            this.charts[year].sales.months[3] = key;
            this.charts[year].sales.values[3] = value;
            break;
          case 'mayo':
            this.charts[year].sales.months[4] = key;
            this.charts[year].sales.values[4] = value;
            break;
          case 'junio':
            this.charts[year].sales.months[5] = key;
            this.charts[year].sales.values[5] = value;
            break;
          case 'julio':
            this.charts[year].sales.months[6] = key;
            this.charts[year].sales.values[6] = value;
            break;
          case 'agosto':
            this.charts[year].sales.months[7] = key;
            this.charts[year].sales.values[7] = value;
            break;
          case 'septiembre':
            this.charts[year].sales.months[8] = key;
            this.charts[year].sales.values[8] = value;
            break;
          case 'octubre':
            this.charts[year].sales.months[9] = key;
            this.charts[year].sales.values[9] = value;
            break;
          case 'noviembre':
            this.charts[year].sales.months[10] = key;
            this.charts[year].sales.values[10] = value;
            break;
          case 'diciembre':
            this.charts[year].sales.months[11] = key;
            this.charts[year].sales.values[11] = value;
            break;
          default:

        }
       })
       $.each(this.agency.charts[year].comission, (key, value)=> {
         switch (key) {
           case 'enero':
             this.charts[year].commission.months[0] = key;
             this.charts[year].commission.values[0] = value;
             break;
           case 'febrero':
             this.charts[year].commission.months[1] = key;
             this.charts[year].commission.values[1] = value;
             break;
           case 'marzo':
             this.charts[year].commission.months[2] = key;
             this.charts[year].commission.values[2] = value;
             break;
           case 'abril':
             this.charts[year].commission.months[3] = key;
             this.charts[year].commission.values[3] = value;
             break;
           case 'mayo':
             this.charts[year].commission.months[4] = key;
             this.charts[year].commission.values[4] = value;
             break;
           case 'junio':
             this.charts[year].commission.months[5] = key;
             this.charts[year].commission.values[5] = value;
             break;
           case 'julio':
             this.charts[year].commission.months[6] = key;
             this.charts[year].commission.values[6] = value;
             break;
           case 'agosto':
             this.charts[year].commission.months[7] = key;
             this.charts[year].commission.values[7] = value;
             break;
           case 'septiembre':
             this.charts[year].commission.months[8] = key;
             this.charts[year].commission.values[8] = value;
             break;
           case 'octubre':
             this.charts[year].commission.months[9] = key;
             this.charts[year].commission.values[9] = value;
             break;
           case 'noviembre':
             this.charts[year].commission.months[10] = key;
             this.charts[year].commission.values[10] = value;
             break;
           case 'diciembre':
             this.charts[year].commission.months[11] = key;
             this.charts[year].commission.values[11] = value;
             break;
           default:

         }
        })
       return this.charts*/
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

      new Chart(sales, {
          type: 'line',
          data: {
              labels: this.charts["2017"].sales.months,
              datasets: [
              {
                label: '2020',
                data: this.charts["2020"].sales.values,
                backgroundColor: orange_gradient,
                borderColor:orange_gradient,
                borderWidth: 1
              },
              {
                label: '2019',
                data: this.charts["2019"].sales.values,
                backgroundColor: orange_gradient,
                borderColor:orange_gradient,
                borderWidth: 1
              },
              {
                label: '2018',
                data: this.charts["2018"].sales.values,
                backgroundColor: purple_gradient,
                borderColor:purple_gradient,
                borderWidth: 1
            },
            {
              label: '2017',
              data: this.charts["2017"].sales.values,
              backgroundColor: pink_gradient,
              borderColor:pink_gradient,
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
                    label:function(tooltipItem) {
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
      var bluegreen_gradient = commission.createLinearGradient(0,0,0,500);
      bluegreen_gradient.addColorStop(0, 'rgba(15, 224, 205, 0.60)');
      bluegreen_gradient.addColorStop(1, 'rgba(15, 224, 205, 0.10)');

      var blue_gradient = commission.createLinearGradient(0,0,0,500);
      blue_gradient.addColorStop(0, 'rgba(15, 128, 224, 0.60)');
      blue_gradient.addColorStop(1, 'rgba(15, 128, 224, 0.10)');

      var green_gradient = commission.createLinearGradient(0,0,0,500);
      green_gradient.addColorStop(0, 'rgba(15, 224, 50, 0.6)');
      green_gradient.addColorStop(1, 'rgba(15, 224, 50, 0.10)');
      var lime = commission.createLinearGradient(0,0,0,500);
      lime.addColorStop(0, 'rgba(205, 220, 57, 0.6)');
      lime.addColorStop(1, 'rgba(205, 220, 57, 0.10)');
      new Chart(commission, {
          type: 'line',
          data: {
            labels: this.charts["2017"].commission.months,
            datasets: [
              {
                label: '2020',
                data: this.charts["2020"].commission.values,
                backgroundColor: lime,
                borderColor:lime,
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
              label: '2018',
              data: this.charts["2018"].commission.values,
              backgroundColor: blue_gradient,
              borderColor:blue_gradient,
              borderWidth: 1
            },
            {
              label: '2017',
              data: this.charts["2017"].commission.values,
              backgroundColor: bluegreen_gradient,
              borderColor:bluegreen_gradient,
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
                      callback:function(value) {
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
                    label:function(tooltipItem) {
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
  },
  components:{
    SideBar
  }
}
</script>
