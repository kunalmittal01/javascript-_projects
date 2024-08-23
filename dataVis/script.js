const chart = document.getElementById('chart').getContext('2d');

const months = ['Jan','feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const data = [20,30,31,40,50,49,51,60,65,70,80,90];
const color = ['red', 'blue', 'yellow','violet']
const myChart = new Chart(chart, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data,
                borderWidth: 1,
                backgroundColor: color,
                borderColor: 'rgba(75, 192, 192, 1)',
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
            }
        ]
    },
    options: {
       plugins: {
            legend: {
                labels: {
                    font: {
                          size: 28,  
                    },
                    color: 'blue',
                }
            },
       },
       scales: {
        x: {
            ticks: {
                font: {
                    size: 20,
                },
                color: color,
            },
            barPercentage: 0.5,
            categoryPercentage: 0.8
        },

        y: {
            ticks: {
                font: {
                    size: 18,
                },
                color: 'blue',
            }
        }
    }          
  }
})