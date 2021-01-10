import { DataparserService } from './../dataparser.service';
import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart} from 'chart.js';
@Component({
  selector: 'app-chartdefault',
  templateUrl: './chartdefault.component.html',
  styleUrls: ['./chartdefault.component.css']
})
export class ChartdefaultComponent implements OnInit {
  @ViewChild('title', {static : true}) title: ElementRef;
  chart : [] = [];
  constructor(private data : DataparserService) { }
  
  async ngOnInit() {
  this.chart = new Chart(this.title.nativeElement.getContext('2d') , {
      type  : 'line',
      data :{
        labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets : [
          {
            data : [12, 19, 3, 5, 2, 3],
            borderColor: '0#3ba9f',
            fill :true,
          },

          {
            data : [12, 19, 3, 5, 2, 3],
            borderColor: '0#3ba9f',
            fill :false,
          }
        ]
      },
      options: {
        legend :{
          display :false
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true,
          }]
        }
      }
    })

  }
}
  // this.chart = new Chart(this.title.nativeElement.getContext('2d') , {
  //   type  : 'line',
  //   data :{
  //     labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets : [
  //       {
  //         data : [12, 19, 3, 5, 2, 3],
  //         borderColor: '0#3ba9f',
  //         fill :false,
  //       },

  //       {
  //         data : [12, 19, 3, 5, 2, 3],
  //         borderColor: '0#3ba9f',
  //         fill :false,
  //       }
  //     ]
  //   },
  //   options: {
  //     legend :{
  //       display :false,
  //     responsive: true,
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart'
  //     },
  //     tooltips: {
  //       mode: 'index',
  //       intersect: false,
  //     },
  //     hover: {
  //       mode: 'nearest',
  //       intersect: true
  //     },
  //     scales: {
  //       xAxes: [{
  //         display: true,
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'Month'
  //         }
  //       }],
  //       yAxes: [{
  //         display: true,
  //         scaleLabel: {
  //           display: true,
  //           labelString: 'Value'
  //         }
  //       }]
  //     }
  //   }}
  // });
