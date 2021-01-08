import { Graphdata } from './models/graph';

import { Injectable } from '@angular/core';
import { NgxCsvParser} from 'ngx-csv-parser';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataparserService {
  file : any;
  records: Graphdata;
  header = true;

  constructor(private ngxCsvParser : NgxCsvParser) { }

  
  handleFileInput(files){
    this.file = files.target.files[0];
  }
  
  
  private checkType() : string {
      try{
        if(!this.file) throw 'myException'; 
        return this.file.name.endsWith('.csv') ? "csv" : "json";
      } catch (e){
        alert("please upload something");
      }
  }
    
  private async readCsv(){
    return this.ngxCsvParser.parse(this.file, { header: this.header, delimiter: ',' })
    .pipe(map( (x : Graphdata[]) => x.map((c : Graphdata)=>
      ({ 
        id : c.id,
        name : c.name,
        description : c.description,
        price : c.price,
        imageUrl: c.imageUrl,
        quantity: c.quantity
      }))));
  }
  
  private  readJson() {
    return new Promise((resolve,reject) =>{
      const fr: FileReader = new FileReader();
      fr.readAsText(this.file);
      fr.onerror = () =>{
        fr.abort();
        reject(new DOMException("Problem parsing input  file."));
      }
      fr.onload = () =>{
        resolve(JSON.parse(fr.result as string));  
      }})
  }

  // async uploadDocument() {
  //    const type = this.checkType();
  //    if(type){
  //      if(type == "csv")  return await this.readCsv();
  //      return this.readJson();
  //     }
  //   }

  async uploadDocument() {
    const a = this.checkType();
    if(!a) return;
    return  a == "csv" ?  await this.readCsv() : await this.readJson();
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
