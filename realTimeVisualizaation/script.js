const chr = document.getElementById('chart').getContext('2d');

const time = [];
let cnt = 0;
let dataPoints = [];
const myChart = new Chart(chr, {
    type: 'line',
    data: {
        labels: time,
        datasets: [{
            label: 'Temperature',
            data: dataPoints,
            borderwidth: 1,
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display:true,
                    text: 'Time(s)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)'
                },
                beginAtZero: true,
            }
        },
        
    }
})

function updateChart() {
    time.push(cnt);
    cnt += 1;
    dataPoints.push(Math.floor(Math.random() * 100) + 1);

    if(time.length > 10) {
        time.shift();
        dataPoints.shift();
    }
    myChart.update();
}

setInterval(updateChart, 1100); 
