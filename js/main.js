var alert = document.querySelector('.alert');
var alertBtn = document.querySelector('.close_button');


alertBtn.addEventListener('click', () => {
   alert.style.display = 'none'
});



var ctx = document.getElementById('traffic_chart_hourly').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["5min", "10min", "20min", "30min", "40min", "45min", "55min"],
        datasets: [{
            backgroundColor: '#B4527F',
            borderColor: '#B42867',
            data: [0.5, 10.45, 1.10, 2.5, 8.2, 6.20, 8.30],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('traffic_chart_daily').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["8am", "10am", "12pm", "1pm", "3pm", "5pm", "8pm", "10pm", "11pm"],
        datasets: [{
            backgroundColor: '#2E7581',
            borderColor: '#2A5F67',
            data: [0.5, 0.9, 5.10, 2.5, 7.2, 10.20, 8.30, 10.5, 2.5],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('traffic_chart_weekly').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            backgroundColor: '#B4527F',
            borderColor: '#B42867',
            data: [0.5, 10.45, 1.10, 2.5, 8.2, 6.20, 8.30],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('traffic_chart_monthly').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"],
        datasets: [{
            backgroundColor: '#B4527F',
            borderColor: '#B42867',
            data: [8.5, 1.45, 11.10, 8.5, 4.2, 9.20, 8.30, 5.40, 4.30, 0.5, 2.5, 3.0],
        }]
    },

    // Configuration options go here
    options: {

    }
});

var ctx = document.getElementById('daily_traffic_chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["8am", "10am", "12pm", "1pm", "3pm", "5pm", "8pm"],
        datasets: [{
            backgroundColor: '#2A5F67',
            borderColor: '#B42867',
            data: [200, 50, 250, 300, 156, 232, 80],
        }]
    },

    // Configuration options go here
    options: {

    }
});


var ctx = document.getElementById('mobile_users_chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            backgroundColor: ['#2A5F67','#B42867', '#C0B76B'],
            data: [200, 50, 250],
        }]
    },

    // Configuration options go here
    options: {

    }
});

    // Chart Font
Chart.defaults.global.defaultFontFamily = 'Titillium Web';


    // Default Focus Chart

var focusBtn = document.getElementById('focus_default').focus();
//var defaultChart = document.getElementById('default_chart');
//var mainTrafficCharts = document.getElementsByClassName('.main_traffic_charts');
//mainTrafficCharts.style.display = 'none';



//if (focusBtn) {
  //defaultChart.style.display = 'flex';
//} ;

const chartHourly = document.getElementById('traffic_chart_hourly');
const chartDaily = document.getElementById('traffic_chart_daily');
const chartWeekly = document.getElementById('traffic_chart_weekly');
const chartMonthly = document.getElementById('traffic_chart_monthly');

chartHourly.style.display='none';
chartDaily.style.display='none';
chartMonthly.style.display='none';
