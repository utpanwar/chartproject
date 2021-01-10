import { DataparserService } from './../dataparser.service';
import {  Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart} from 'chart.js';
@Component({
  selector: 'app-chartdefault',
  templateUrl: './chartdefault.component.html',
  styleUrls: ['./chartdefault.component.css']
})
export class ChartdefaultComponent implements OnInit {
   send : any[];
  @ViewChild('title', {static : true}) title: ElementRef;
  chart : [] = [];
  constructor(private data : DataparserService) 
  {
    console.log("const of chart");
 }
  
  async ngOnInit() {
    // let a = this.data.uploadDocument();
    // console.log("a",this.send);
    // document.getElementById("canvas").style.width = '300px';
    // document.getElementById("canvas").style.height = '150px';
  //  this.chart.canvas.parentNode.style.width = '128px';
  (await this.data.uploadDocument()).subscribe((x :any[])=> this.send = x);
  console.log(this.send);
  let label : any[] = [] ;
  let color1 :any[] =[];
  let color2 : any[] = [];
  this.send.forEach( a => {
    label.push(a.color);
    color1.push(a.number);
    color2.push(a.nums);
  })
  if(label.pop() == null) alert("please upload suitable data");
  console.log(label);
  console.log(color1);
  console.log(color2);

  this.chart = new Chart('canvas' , {
      type  : 'line',
      data :{
        labels : label,
        datasets : [
          {
            data : color1,
            borderColor: '#3cba9f',
            fill :true,
          },

          {
            data :color2,
            borderColor: '#ffcc00',
            fill :false,
          }
        ]
      },
      options: {
        legend :{
          display :true,
          name : "mdm",
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
