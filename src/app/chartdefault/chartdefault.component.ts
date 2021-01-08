import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-chartdefault',
  templateUrl: './chartdefault.component.html',
  styleUrls: ['./chartdefault.component.css']
})
export class ChartdefaultComponent implements OnInit {

  chart : any;
  constructor() { }
  
  ngOnInit() {
    this.chart = new Chart('canvas' , {
      type  : 'line',
      data :{
        labels :this.csvRecords,
        datasets : [
          {
            data : this.datafromlocal,
            borderColor: '0#3ba9f',
            fill :false,
          },

          {
            data : this.datafromlocal,
            borderColor: '0#3ba9f',
            fill :false,
          }
        ]
      },
      options: {
        legend :{
          display :false
        // responsive: true,
        // title: {
        //   display: true,
        //   text: 'Chart.js Line Chart'
        // },
        // tooltips: {
        //   mode: 'index',
        //   intersect: false,
        // },
        // hover: {
        //   mode: 'nearest',
        //   intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            // scaleLabel: {
            //   display: true,
            //   labelString: 'Month'
            // }
          }],
          yAxes: [{
            display: true,
            // scaleLabel: {
            //   display: true,
            //   // labelString: 'Value'
            // }
          }]
        }
      }
  })
          
  }
  }


}
