var alert = document.querySelector('.alert');
var alertBtn = document.querySelector('.close_button');


alertBtn.addEventListener('click', () => {
   alert.style.display = 'none'
});

Chart.defaults.global.legend.display = false;

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
            data: [0.5, 1.45, 5.10, 2, 7.2, 0.20, 6.30],
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
var chartBtn = document.getElementsByClassName('menu_btn');

let chartsMain = [chartHourly, chartDaily, chartWeekly, chartMonthly];

chartHourly.style.display='none';
chartDaily.style.display='none';
chartMonthly.style.display='none';

chartBtn[0].addEventListener('click', () => {
  chartHourly.style.display='flex';
  chartDaily.style.display='none';
  chartMonthly.style.display='none';
  chartWeekly.style.display='none';
});

chartBtn[1].addEventListener('click', () => {
  chartHourly.style.display='none';
  chartDaily.style.display='flex';
  chartMonthly.style.display='none';
  chartWeekly.style.display='none';
});

chartBtn[2].addEventListener('click', () => {
  chartHourly.style.display='none';
  chartDaily.style.display='none';
  chartMonthly.style.display='none';
  chartWeekly.style.display='flex';
});

chartBtn[3].addEventListener('click', () => {
  chartHourly.style.display='none';
  chartDaily.style.display='none';
  chartMonthly.style.display='flex';
  chartWeekly.style.display='none';
});

//
// ------------------------- Submit Button

var submitBtn = document.getElementById('submit_btn');
var userMessage = document.getElementById('message_for_user');
var userSearch = document.getElementById('search_user');

// submitBtn.addEventListener('click', () =>{
//   // submitBtn.submit();
//   if (document.getElementById('search_user').value.trim() == '') {
//   alert("please enter a User");
// } if else (document.getElementById('message_for_user').value.trim() == ''){
//   alert("please enter a Message");
// } else {
//     alert("Message has been sent");
// }
// });

// function message() {
//   if (document.getElementById('search_user').value.trim() == '') {
//     alert('Please add a user name.');
//   } else if (document.getElementById('message_for_user').value.trim() == '') {
//     alert('Please add a message.');
//
//     } else {
//       alert('Message was sent.');
//     }
// };

//
// submitBtn.addEventListener('click', () =>{console.log(submitBtn);
//   //submitBtn.submit();
//   if (userMessage.value == "") {
//   window.alert("sometext");
// } else if (userSearch.value == ""){
// window.alert("sometext");
// } else {
// window.alert("sometext");
// }
// });

// $('#message_user_form').on('click', 'button', (e) => {
//   e.preventDefault();
//
//   let userName = userSearch.val(); //searchForUser global variable
//   let userMessageVal = userMessage.val();
//
//   if (userName.length > 0 && userMessageVal.length > 0) {
//     // Sent notice
//     sentDialogHtml =
//       alert(`Your message to ${userName} has been sent`);
//     // Clear Input and Textarea values
//     messageForm.find("input[type=text], textarea").val("");
//   } else {
//     // Error notice
//     sentDialogHtml =
//    alert('Please add a user name.');
//   }
//
// });


// ------------------------- Settings checkbox

// var checkBox = document.getElementById('profile-public');
// var switchText = document.getElementById('mail_switch_inner');
//
//
//
// checkBox.addEventListener('click', () => {
//   if (switchText.className === 'onoffswitch-inner') {
//   switchText.className = 'onoffswitch-inner-after';
// }
// });
//
// checkBox.addEventListener('click', () => {
//   document.getElementById('mail_switch_inner').className = 'onoffswitch-inner';
// });


// ------------------------- Lokal Storrage

// -------------- Versuch 1

let settingNotifications = $('#e-mail-notification-switch');
let settingProfilePublic = $('#public-switch');
let settingTimezone = $('#select-timezone');


// Click event to save user settings to localStorage
$('#save-btn').on('click', (e) => {
  e.preventDefault();

  // Variables to store setting values
  let notificationsStatus = settingNotifications.prop('checked');
  let profileStatus = settingProfilePublic.prop('checked');
  let timezoneValue = settingTimezone.val();
  //Set LocalStorage keys and values
  localStorage.setItem('notifications', JSON.stringify(notificationsStatus));
  localStorage.setItem('profile', JSON.stringify(profileStatus));
  localStorage.setItem('timezone', JSON.stringify(timezoneValue));
});

// Click event to reset settings and remove localStorage
$('#cancel-btn').on('click', () => {
  localStorage.clear();
});

$(window).on("load", () => {
  // Call function to check if localStorage exists
  if (supportsLocalStorage) {
    // If localStorage exists, retrieve settings values and set to variables below
    let notificationsStatus = JSON.parse(localStorage.getItem('notifications'));
    let profileStatus = JSON.parse(localStorage.getItem('profile'));
    let timezoneValue = JSON.parse(localStorage.getItem('timezone'));
    // Set toggle switches and select field to retrieved values
    settingNotifications.prop('checked', notificationsStatus);
    settingProfilePublic.prop('checked', profileStatus);
    settingTimezone.val(timezoneValue);
  }
});

// Function to check if localStorage exists by returning true or false if an error is thrown
let supportsLocalStorage = () => {
  try {
    return 'localStorage' in window && window.localStorage !== null;
  } catch (e) {
    return false;
  }
};






// -------------- Versuch 2

//
// function supportsLocalStorage() {
//   try {
//   return 'localStorage' in window && window['localStorage'] !== null;
//   } catch(e){
//   return false;
//   }
// }


// -------------- Versuch 3


//
// function mailNote(){
//   var searches = localStorage.getItem('recentSearches');
// if(searches){
//  return JSON.parse(searches);
// } else {
//   return[];
// }
// }

 //
 // window.onload = function() {
 //   if (supportsLocalStorage){
 //
 //
 //
 //   }
 // }
