// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Line Chart for run totals
var weeklyGlucoseTotals = {
      labels : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          data : [120,120,120,120,120,120,120]
        },
        {
          fillColor : "rgba(52,152,219,0.5)",
          strokeColor : "rgba(52,152,219,1)",
          pointColor : "rgba(52,152,219,1)",
          pointStrokeColor : "#fff",
          data : [88,103,129,112,120,91,97]
        }
      ]
    }
    var chartOptions = {
      scaleGridLineColor : "rgba(0,0,0,.03)"
    }
//Get context with jQuery - using jQuery's .get() method.
var glucoseTotal = $("#glucoseTotal").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myLineChart = new Chart(glucoseTotal).Line(weeklyGlucoseTotals, chartOptions);

var dailyExerciseGoal = [
  {
    value: 10,
    color:"#4eddc1"
  },
  {
    value : 20,
    color : "#E2EAE9"
  }
]
var options = {
  percentageInnerCutout : 75
};
var thisWeek = $("#dailyExerciseGoal").get(0).getContext("2d");
var myWeeklyGoal = new Chart(thisWeek).Doughnut(dailyExerciseGoal, options);

var weeklyAverage = {
    labels: ["40", "50", "60", "70", "80", "90", "100"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
