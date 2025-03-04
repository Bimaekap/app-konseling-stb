/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

var statistics_chart = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(statistics_chart, {
  type: 'line',
  data: {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
    datasets: [{
      label: 'Transaksi',
      data: [640, 530, 302, 430, 270, 488],
      borderWidth: 5,
      borderColor: '#6777ef',
      backgroundColor: 'transparent',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#6777ef',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          stepSize: 150
        }
      }],
      xAxes: [{
        gridLines: {
          color: '#fbfbfb',
          lineWidth: 2
        }
      }]
    },
  }
});

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Pamas", "Campday", "UPM", "Baju PDH", "Almet", "UKT"],
    datasets: [{
      label: 'Belum Bayar',
      data: [460, 458, 330, 502, 430, 610],
      borderWidth: 2,
      backgroundColor: 'rgba(254,86,83,.7)',
      borderColor: 'rgba(254,86,83,.7)',
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    },{
      label: 'Sudah Bayar',
      data: [550, 558, 390, 562, 490, 670],
      borderWidth: 2,
      backgroundColor: 'rgba(63,82,227,.8)',
      borderColor: 'transparent',
      borderWidth: 0,
      pointBackgroundColor: '#999',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'bottom',
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 150
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
  }
});

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        60,
        30,
        10,
      ],
      backgroundColor: [
        '#63ed7a',
        '#ffa426',
        '#fc544b',
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Lunas',
      'Belum Lunas',
      'Belum Bayar',
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
    },
  }
});
