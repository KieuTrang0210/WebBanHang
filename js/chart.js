var xValues = [700,560,1200,1500];
var yValues = ['30 th 5', '06 th 6', '14 th 6', '21 th 6'];

new Chart("traffic", {
  type: "line",
  data: {
    labels: yValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: xValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 100, max:2000}}],
    }
  }
});

var xValuesRevenue = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"];
var yValuesRevenue = [55,  44,49, 24, 15];

new Chart("revenue", {
  type: "bar",
  data: {
    labels: xValuesRevenue,
    datasets: [{
      backgroundColor: "orange",
      data: yValuesRevenue
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 5, max:100}}],
    }
  }
});

var xValuesBestSellers =  ["CLOWNZ BASIC HOODIES", "CLOWNZ LEOPARD SHIRT", "CLOWNZ POLO COLORS BLOCK", "Others"];
var yValuesBestSellers = [44, 39, 15, 2];

barColors = ["red", "violet", "green", "yellow"];
new Chart("bestsellers", {
    type: "pie",
    data: {
      labels: xValuesBestSellers,
      datasets: [{
        backgroundColor: barColors,
        data: yValuesBestSellers
      }]
    },
    options: {
      title: {
        display: true,
        text: "Mặt hàng bán chạy nhất"
      }
    }
  });