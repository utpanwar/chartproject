import { Graphdata } from './models/graph';

import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
@Injectable({
  providedIn: 'root'
})
export class DataparserService {
   file : any;
   records: Graphdata;
   header = true;

  constructor(private ngxCsvParser : NgxCsvParser) { }

  
  handleFileInput(files)
   {
    this.file = files.target.files[0];
    // console.log(this.file);
    //  console.log(this.file.name.endsWith('.csv'));
    // console.log(this.file.type);
   }
  
   
   private checkType() : string
   {
    if(!this.file)
    {
        alert("please upload something");
        return ;
    }
     const  type = this.file.name.endsWith('.csv') ? "csv" : "json";
     return  type ;
   }
   private readCsv() : any
   {
    this.ngxCsvParser.parse(this.file, { header: this.header, delimiter: ',' })
    .pipe().subscribe((result: Array<any>) => {

      console.log('Result', result);
       return result;
    }, (error: NgxCSVParserError) => {
      console.log('Error', error);
    });
   }
   
  //  readFileContent(): Promise<void> {
  //   return new Promise<>((resolve, reject) => {

  //     const fr: FileReader = new FileReader();

  //     fr.onloadend = () => {
  //       resolve( (fr.result), =>
  //       {
  //           const = fr.result as string;
  //       });
  //     };

  //     fr.onerror = (e) => {
  //       reject(e);
  //     };

  //     myReader.readAsText(this.file);
  //   });
  // }

   private readJson() : any
   {
    const fr: FileReader = new FileReader();
    fr.onload = () =>
    {
      let res = fr.result as string;
      console.log(JSON.parse(res));
      return JSON.parse(res);
    }
      fr.readAsText(this.file);
   }

   uploadDocument() : Graphdata
   {
     const type = this.checkType();
     console.log(type);
     if(type == "csv")
     {
       const a = this.readCsv();
      console.log(a);
      return a;
     } 
     const b = this.readJson();
      console.log(b);
     return b;
   }


  //  uploadDocument1() 
  //  {
    
  //    else
  //    {
      
  //       this.chart = new Chart('canvas' , {
  //         type  : 'line',
  //         data :{
  //           labels :this.csvRecords,
  //           datasets : [
  //             {
  //               data : this.datafromlocal,
  //               borderColor: '0#3ba9f',
  //               fill :false,
  //             },

  //             {
  //               data : this.datafromlocal,
  //               borderColor: '0#3ba9f',
  //               fill :false,
  //             }
  //           ]
  //         },
  //         options: {
  //           legend :{
  //             display :false
  //           // responsive: true,
  //           // title: {
  //           //   display: true,
  //           //   text: 'Chart.js Line Chart'
  //           // },
  //           // tooltips: {
  //           //   mode: 'index',
  //           //   intersect: false,
  //           // },
  //           // hover: {
  //           //   mode: 'nearest',
  //           //   intersect: true
  //           },
  //           scales: {
  //             xAxes: [{
  //               display: true,
  //               // scaleLabel: {
  //               //   display: true,
  //               //   labelString: 'Month'
  //               // }
  //             }],
  //             yAxes: [{
  //               display: true,
  //               // scaleLabel: {
  //               //   display: true,
  //               //   // labelString: 'Value'
  //               // }
  //             }]
  //           }
  //         }
  //     })



        
  //    } 
  // }


}
