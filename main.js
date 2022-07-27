
// read remote JSON file in javascript
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {


    const weekDays = data.map(({ day }) => day);

    const spendingRate = data.map(({ amount }) => amount);


    chartFunc(weekDays, spendingRate);

  })





function chartFunc(xValues, yValues) {

  const barColors = "hsl(10, 79%, 65%)";
  const hoverColor = "hsl(186, 34%, 60%)";
  const myChart = document.getElementById('myChart');
  new Chart(myChart, {
    type: 'bar',
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        borderRadius: 4,
        borderSkipped: 'false',
        hoverBackgroundColor: hoverColor,
        data: yValues
      }]
    },
    options: {
      Plugins: {
          legend: { 
            display: false
           }
      }, 
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false
          }
          
        },
        y: {
          beginAtZero: true,
          grid: {
            display: false,
            drawBorder: false,
            drawTicks: false
          },
          ticks: {
            display: false
          }
        }

      }
    }
  });

}








