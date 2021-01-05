import { Graphdata } from './models/graph';

import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
  
  
  private checkType() : string //bug
  {
    if(!this.file)
    {
        alert("please upload something");
        return "";
    }
    const  type = this.file.name.endsWith('.csv') ? "csv" : "json";
    return  type ;
  }
  private async readCsv() 
  {
    return this.ngxCsvParser.parse(this.file, { header: this.header, delimiter: ',' })
    .pipe(map(x => {
        console.log(x);
    }));

    //  return  ref.pipe(map(changes => changes.map(c => ({
    //   $key: c.payload.key, $value: c.payload.val()
    // }))));
    // .pipe().subscribe((result: Array<any>) => {

    //   console.log('Result', result);
    //   return result;
    // }, (error: NgxCSVParserError) => {
    //   console.log('Error', error);
    //   return error;
    // });
  }
  
  private  readJson() 
  {
    return new Promise((resolve,reject) =>
    {
      const fr: FileReader = new FileReader();
      fr.readAsText(this.file);

      fr.onerror = () =>
      {
        fr.abort();
        {
        reject(new DOMException("Problem parsing input  file."));
        }
      }
      fr.onload = () =>
      {
        resolve(JSON.parse(fr.result as string));  
      }
    })
  }

  

  async uploadDocument() 
  {
     const type = this.checkType();
     console.log(type);
     if(type == '') return ;
     if(type == "csv")
     {
       const a =  await this.readCsv();
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
