var alert = document.querySelector('.alert');
var alertBtn = document.querySelector('.close_button');



alertBtn.addEventListener('click', () => {
   alert.style.display = 'none'
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

var ctx = document.getElementById('daily_traffic_chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"],
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

Chart.defaults.global.defaultFontFamily = 'Titillium Web';
