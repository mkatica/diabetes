// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Line Chart for run totals
var weeklyGlucoseTotals = {
      labels : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      datasets : [
        {
          fillColor : "rgba(92,219,213,.30)",
          // pointDot : false,
          data : [120,120,120,120,120,120,120]
        },
        {
          fillColor : "rgba(24,161,154,0.64)",
          strokeColor : "rgba(24,161,154,1)",
          pointColor : "rgba(24,161,154,1)",
          pointStrokeColor : "#fff",
          data : [88,103,129,112,120,91,97]
        }
      ]
    }
    var chartOptions = {
      scaleGridLineColor : "rgba(113,101,93,.1)",
      scaleShowVerticalLines: false,
      pointDo : true,
      scaleFontFamily: "'Lato', Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      scaleFontStyle: "300",
      scaleFontColor: "#71655D",
    }

window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(weeklyGlucoseTotals, {
        responsive: true
    });
}

// window.onload = function() {
//     Chart.defaults.global.tooltipFillColor = "rgba(0,0,0,0.8)";
//     Chart.defaults.global.tooltipCornerRadius = 15;
//     Chart.defaults.global.tooltipYPadding = 20;
//     Chart.defaults.global.tooltipFontFamily = "'Dosis'";
//     Chart.defaults.global.scaleFontFamily = "'Dosis'";
//     var ctx = document.getElementById("canvas").getContext("2d");
//     window.myBar = new Chart(ctx).Bar(barChartData, {
//         responsive: true
//     });
// }

//Get context with jQuery - using jQuery's .get() method.
var glucoseTotal = $("#glucoseTotal").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myLineChart = new Chart(glucoseTotal).Line(weeklyGlucoseTotals, chartOptions);

var dailyExerciseGoal = [
  {
    value: 10,
    color:"#18A19A"
  },
  {
    value : 20,
    color : "#5CDBD5"
  }
]
var options = {
  percentageInnerCutout : 75
};
var thisWeek = $("#dailyExerciseGoal").get(0).getContext("2d");
var myWeeklyGoal = new Chart(thisWeek).Doughnut(dailyExerciseGoal, options);


