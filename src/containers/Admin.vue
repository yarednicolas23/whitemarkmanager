<template>
  <div class="row blue-grey darken-4">
      <SideBar></SideBar>
      <div class="col s12 m12 l10 right">
        <!-- Tasa de crecimiento de ventas funtion incrementIndicator() -->
        <div id="increment" class="col s12 m12 l6 hide">
          <div class="card gradient-blue white-text">
            <div class="card-content">
              <div class="row">
                <div class="col s12 m6 l6 no-padding">
                  <h2 class="thin no-margin">{{indicators.increment.totals}}</h2>
                  <p class="thin no-margin">Total hasta <span class="month-dashboard"></span></p>
                </div>
                <div class="col s12 m6 l6">
                  <div class="col s12">
                    <h4 class="thin right no-margin tooltipped" data-position="right" data-tooltip="Anterior mes" style="cursor:pointer">{{indicators.increment.totalsBeforeMoth}}</h4>
                  </div>
                  <h4 class="thin right">
                    <i id="indicator" class="material-icons"></i>
                    <span id="increase" class="tooltipped" data-position="right" data-tooltip="Porcentaje de Crecimiento" style="cursor:pointer">{{indicators.increment.increase}}</span>
                   </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Sales of Now Month function nowMonth()-->
        <div id="now" class="col s12 l6 hide">
          <div class="card gradient-orange white-text">
            <div class="card-content">
              <div class="row">
                <div class="col s12 m6 l6">
                  <h2 id="salesMonth" class="thin no-margin"></h2>
                  <p class="thin">Ventas del Mes: <span id="lastMonth"></span></p>
                </div>
                <div class="col s12 m6 l6">
                  <div class="col s12">
                    <h4  id="salesMonthBefore" class="right thin no-margin tooltipped" data-position="left" data-tooltip="Mes Anterior" style="cursor:pointer"></h4>
                  </div>

                  <h4 class="thin">
                    <span id="lastMonthIncrease" class="right tooltipped" data-position="left" data-tooltip="Porcentaje de Crecimiento" style="cursor:pointer"></span>
                      <i id="lastMonthIndicator" class="right material-icons"></i>
                   </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="totals" class="col s12">
          <div class="card gradient-dashboard white-text">
            <div class="card-content">
              <span class="card-title">Total ventas por año</span>
              <div class="row">
                <div class="col s12 l6">
                </div>
              </div>
              <canvas id="chart-commission-all"></canvas>
            </div>
          </div>
        </div>

        <div class="col s12 ">
          <div class="card gradient-dashboard white-text">
            <div class="card-content">
              <span class="card-title">Total ventas por marca</span>
              <div class="chart-commission-month">
                <canvas id="chart-commission-month"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>
<script>
import M from 'materialize-css'
import Chart from 'chart.js'
import * as firebase from "firebase/app"

import SideBar from '../components/SideBar'
//Vue.component("Admin",
export default {
  data: ()=> {
    return {
      "search": "",
      "charts":[
        {
          "2017":{
            "months":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
            "sales":[0,0,0,0,0,0,0,0,0,0,0,0]
          },
          "2018":{
            "months":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
            "sales":[0,0,0,0,0,0,0,0,0,0,0,0]
          },
          "2019":{
            "months":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
            "sales":[0,0,0,0,0,0,0,0,0,0,0,0]
          },
          "2020":{
            "months":["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
            "sales":[0,0,0,0,0,0,0,0,0,0,0,0]
          }
        },
        { "names":[], "values":[] },
        { "names":[], "values":[] },
        { "names":[], "values":[] },
        { "names":[], "values":[] }
      ],
      "indicators":{
        "increment":{
          "increase":"",
          "totals":"",
          "totalsBeforeMoth":""
        }
      },
      "agencies":[]
    }
  },
  components:{
    SideBar
  },
  beforeCreate: function () {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'))
  },
  created: function () {
    this.$root.validateSesion()
    this.getAgenciesList()
  },
  mounted:function() {
    this.getSalesAllByMonth()
  },
  methods:{
    // Charts JS Card Sales Total of Agency
    getAgenciesList: function() {
      this.agencies = {
        ref: firebase.database().ref('agencies'),
        list: []
      }
      this.agencies.ref.once('value', (snapshot)=> {
        snapshot.forEach((childSnapshot)=> {
          if (childSnapshot.val().charts!=null) {
            if (!("2017" in childSnapshot.val().charts)==false) {
              this.charts[1].names.push(childSnapshot.val().agency)
              this.charts[1].values.push(this.getTotal(childSnapshot.val().charts[2017].sales))
            }
            if (!("2018" in childSnapshot.val().charts)==false) {
              this.charts[2].names.push(childSnapshot.val().agency)
              this.charts[2].values.push(this.getTotal(childSnapshot.val().charts[2018].sales))
            }
            if (!("2019" in childSnapshot.val().charts)==false) {
              this.charts[3].names.push(childSnapshot.val().agency)
              this.charts[3].values.push(this.getTotal(childSnapshot.val().charts[2019].sales))
            }
            if (!("2020" in childSnapshot.val().charts)==false) {
              this.charts[4].names.push(childSnapshot.val().agency)
              this.charts[4].values.push(this.getTotal(childSnapshot.val().charts[2020].sales))
            }
          }
        });
        var ctx = document.getElementById('chart-commission-month').getContext('2d');
        /*var chart = */new Chart(ctx,
          {
            "type":"bar",
            "data":{
              "labels":this.charts[1].names,
              "datasets":[
                {
                  "label": "2017",
                  "data":this.charts[1].values,
                  "fill":false,
                  "backgroundColor":
                  [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(99, 255, 174, 0.2)",
                    "rgba(252, 255, 32, 0.2)",
                    "rgba(255, 51, 51, 0.2)",
                    "rgba(0, 255, 252, 0.2)",
                    "rgba(228, 8, 255, 0.2)",
                    "rgba(47, 204, 74, 0.2)",
                    "rgba(226, 129, 28, 0.2)"
                  ],
                  "borderColor":
                  [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(55, 175, 113)",
                    "rgb(252, 255, 32)",
                    "rgb(255, 51, 51)",
                    "rgb(0, 255, 252)",
                    "rgb(228, 8, 255)",
                    "rgb(47, 204, 74)",
                    "rgb(226, 129, 28)"
                  ],
                  "borderWidth":1
                },
                {
                  "label": "2018",
                  "data":this.charts[2].values,
                  "fill":false,
                  "backgroundColor":
                  [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(99, 255, 174, 0.2)",
                    "rgba(252, 255, 32, 0.2)",
                    "rgba(255, 51, 51, 0.2)",
                    "rgba(0, 255, 252, 0.2)",
                    "rgba(228, 8, 255, 0.2)",
                    "rgba(47, 204, 74, 0.2)",
                    "rgba(226, 129, 28, 0.2)"
                  ],
                  "borderColor":
                  [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(55, 175, 113)",
                    "rgb(252, 255, 32)",
                    "rgb(255, 51, 51)",
                    "rgb(0, 255, 252)",
                    "rgb(228, 8, 255)",
                    "rgb(47, 204, 74)",
                    "rgb(226, 129, 28)"
                  ],
                  "borderWidth":1
                },
                {
                  "label": "2019",
                  "data":this.charts[3].values,
                  "fill":false,
                  "backgroundColor":
                  [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(99, 255, 174, 0.2)",
                    "rgba(252, 255, 32, 0.2)",
                    "rgba(255, 51, 51, 0.2)",
                    "rgba(0, 255, 252, 0.2)",
                    "rgba(228, 8, 255, 0.2)",
                    "rgba(47, 204, 74, 0.2)",
                    "rgba(226, 129, 28, 0.2)"
                  ],
                  "borderColor":
                  [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                    "rgb(153, 102, 255)",
                    "rgb(55, 175, 113)",
                    "rgb(252, 255, 32)",
                    "rgb(255, 51, 51)",
                    "rgb(0, 255, 252)",
                    "rgb(228, 8, 255)",
                    "rgb(47, 204, 74)",
                    "rgb(226, 129, 28)"
                  ],
                  "borderWidth":1
                }
              ]
            },

            "options":
            {
              "showAllTooltips": false,
              "scales": {
                "yAxes": [{
                  "scaleLabel": {
                    "fontColor":"white",
                  },
                  "ticks": {
                    "fontColor":"white",
                    "callback": function(value) {
                      //function(value, index, values)
                      if(parseInt(value) >= 1000){
                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      } else {
                        return '$' + value;
                      }
                    }
                  }
                }],
                "xAxes": [{
                  "ticks": {
                    "fontColor":"white"
                  }
                }]
              },
              "tooltips": {
                "callbacks": {
                  "label": function(tooltipItem) {
                    //function(tooltipItem, data)
                    return "$" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                    })
                  }
                }
              },
              "legend": {
                  "labels": {
                      "fontColor": 'white'
                  }
              }
            }
          }
        );

      });
      return this.agencies
    },
    // Get Total Sales of Agency object
    getTotal: function(data) {
      var total = 0
      var key =0
      for (key in data) {
        total = total + data[key]
      }
      return total
    },
    // Chart JS Card All sales
    chartAllAgencies: function() {
      //function(data)
      var ctx = document.getElementById("chart-commission-all").getContext("2d");

      var green_gradient = ctx.createLinearGradient(600, 0, 0, 200);
      green_gradient.addColorStop(0, 'rgba(44, 222, 162, 0.36)');
      green_gradient.addColorStop(1, 'rgba(86, 44, 222, 0.36)');

      var purple_orange_gradient = ctx.createLinearGradient(600, 0, 0, 200);
      purple_orange_gradient.addColorStop(0, 'rgba(250,94,47,0.36)');
      purple_orange_gradient.addColorStop(1, 'rgba(183,105,255,0.36)');

      var yellow_gradient = ctx.createLinearGradient(600, 0, 0, 200);
      yellow_gradient.addColorStop(0, 'rgba(250, 159, 47,0.36)');
      yellow_gradient.addColorStop(1, 'rgba(255, 239, 105,0.36)');

      var config = {
          type: 'line',
          data: {
              labels: this.charts[0][2017].months,
              datasets: [{
                  label: "2017: ",
                  backgroundColor: green_gradient,
                  borderColor: green_gradient,
                  data: this.charts[0][2017].sales,
                  fill: true,
              },
              {
                  label: "2018: ",
                  backgroundColor: purple_orange_gradient,
                  borderColor: purple_orange_gradient,
                  data: this.charts[0][2018].sales,
                  fill: true,
              },
              {
                  label: "2019: ",
                  backgroundColor: yellow_gradient,
                  borderColor: yellow_gradient,
                  data: this.charts[0][2019].sales,
                  fill: true,
              },
              {
                  label: "2020: ",
                  backgroundColor: green_gradient,
                  borderColor: green_gradient,
                  data: this.charts[0][2020].sales,
                  fill: true,
              }
            ]
          },
          options: {
              showAllTooltips: false,
              responsive: true,
              title:{
                  display:false,
                  text:'Ventas Totales Mes'
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
              },
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
              legend: {
                labels: {
                  fontColor: 'white'
                }
            }
          }
      };
      //var char =
      new Chart(ctx, config);
      //Chart.defaults.global.defaultFontColor = 'white';
      Chart.pluginService.register({
        beforeRender: function (chart) {
          if (chart.config.options.showAllTooltips) {
            // create an array of tooltips
            // we can't use the chart tooltip because there is only one tooltip per chart
            chart.pluginTooltips = [];
            chart.config.data.datasets.forEach(function (dataset, i) {
              chart.getDatasetMeta(i).data.forEach(function (sector) {
                //function (sector, j)
                chart.pluginTooltips.push(new Chart.Tooltip({
                  _chart: chart.chart,
                  _chartInstance: chart,
                  _data: chart.data,
                  _options: chart.options.tooltips,
                  _active: [sector]
                }, chart));
              });
            });

            // turn off normal tooltips
            chart.options.tooltips.enabled = false;
          }
        },
        afterDraw: function (chart, easing) {
          if (chart.config.options.showAllTooltips) {
            // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
            if (!chart.allTooltipsOnce) {
              if (easing !== 1)
                return;
              chart.allTooltipsOnce = true;
            }

            // turn on tooltips
            chart.options.tooltips.enabled = true;
            Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
              tooltip.initialize();
              tooltip.update();
              // we don't actually need this since we are not animating tooltips
              tooltip.pivot();
              tooltip.transition(easing).draw();
            });
            chart.options.tooltips.enabled = false;
          }
        }
      });
    },
    //Firebase info of data for Charts
    getSalesAllByMonth:function () {
      this.charts.sales_all = 0;
      this.agencies.ref.once('value', (snapshot)=> {
        this.charts[0][2017].months.forEach((e,i)=>{
          snapshot.forEach((element)=> {
            if (element.val().charts!=null) {
              if (("2017" in element.val().charts)!=false) {
                this.charts[0][2017].sales[i] = this.charts[0][2017].sales[i] + element.val().charts[2017].sales[e]
              }
              if (("2018" in element.val().charts)!=false) {
                this.charts[0][2018].sales[i] = this.charts[0][2018].sales[i] + element.val().charts[2018].sales[e]
              }
              if (("2019" in element.val().charts)!=false) {
                this.charts[0][2019].sales[i] = this.charts[0][2019].sales[i] + element.val().charts[2019].sales[e]
              }
              if (("2020" in element.val().charts)!=false) {
                this.charts[0][2020].sales[i] = this.charts[0][2020].sales[i] + element.val().charts[2020].sales[e]
              }
            }
          });
        })
        this.chartAllAgencies()
        this.incrementIndicator(this.charts[0][2020].sales)
        this.lastMonth(this.charts[0][2020].sales)
      });
      return this.charts.sales_all;
    },
    // Tasa de crecimiento de ventas
    incrementIndicator: function (sales_all) {
      var date = new Date();
      //var n =
      this.charts[0][2020].months[date.getMonth()];

      //var start = sales_all.length - sales_all.length + 1;
      //var beforeMonth = sales_all.length - 4;
      //var nowMonth = sales_all.length - 3;
      var before =sales_all.length - 2;
      var now =  sales_all.length - 1;

      var increaseBefore = (sales_all[now] - sales_all[before]) / sales_all[before] *100;
      var increase = (sales_all[now] - sales_all[2]) / sales_all[2] * 100;

      //$("#increase").text(increase.toFixed(1)+" %");
      this.indicators.increment.increase = increase.toFixed(1)+" %"

      if (increaseBefore<increase) {
        //$("#indicator").text("arrow_drop_up");
        //$("#indicator").addClass("green-text text-accent-4");
      }
      if (increaseBefore>increase) {
        //$("#indicator").text("arrow_drop_down");
        //$("#indicator").addClass("red-text");
      }

      // Totals abbreviations

      var totals = 0;
      var totalsBeforeMoth = 0;
      for (var i = 0; i < sales_all.length; i++) {
        totals = totals + sales_all[i];
      }
      totalsBeforeMoth = totals - sales_all[sales_all.length-1];

      this.indicators.increment.totals = this.intToString(totals)
      this.indicators.increment.totalsBeforeMoth = this.intToString(totalsBeforeMoth)
      //$("#totalDepartment").text(this.intToString(totals));
      //$("#totalBefore").text(this.intToString(totalsBeforeMoth));
      //$(".month-dashboard").text(n);
    },
    // Sales of Now Month
    lastMonth: function (sales_all) {
      var date = new Date();
      //var lastMonth = this.charts[0][2017].months[date.getMonth()];
      var lastMonth = this.charts[0][2020].months[date.getMonth()];
      console.log(lastMonth);
      //var lastMonth = this.charts[0][2017].months[this.charts[0][2017].months.length-1];
      var salesBeforeMonth = sales_all[date.getMonth()-1];
      var salesLastMonth = sales_all[date.getMonth()];

      //$("#salesMonth").text(this.intToString(salesLastMonth));
      //$("#lastMonth").text(lastMonth);
      //$("#salesMonthBefore").text(this.intToString(salesBeforeMonth));

      //var increase2 = (salesLastMonth - salesBeforeMonth) / salesBeforeMonth * 100;

      //$("#lastMonthIncrease").text(increase2.toFixed(1)+" %");

      if (salesBeforeMonth<salesLastMonth) {
        //$("#lastMonthIndicator").text("arrow_drop_up");
        //$("#lastMonthIndicator").addClass("green-text text-accent-4");
      }
      if (salesBeforeMonth>salesLastMonth) {
        //$("#lastMonthIndicator").text("arrow_drop_down");
        //$("#lastMonthIndicator").addClass("red-text");
      }

    },
    intToString:function (value) {
        var suffixes = ["", "k", "m", "b","t"];
        var divisor = 4;
        if (value <9000000) {
          divisor = 3;
        }
        var suffixNum = Math.floor((""+value).length/divisor);
        var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 != 0) {
            //var shortNum = shortValue.toFixed(1);
        }
        return shortValue+suffixes[suffixNum];
    }
  }
}
</script>
