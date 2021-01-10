import { Graphdata } from './models/graph';

import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { resolve } from 'url';
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
    
  // private async readCsv() {
  //   let res: any[];
  //    this.ngxCsvParser.parse(this.file, { header: this.header, delimiter: ',' })
  //   .pipe().subscribe((result: Array<any>) => {
 
  //     // console.log('Result', result);
  //      res = result;
  //   }, (error: NgxCSVParserError) => {
  //     console.log('Error', error);
  //   });
  //   if(res)
  //   {
  //     console.log(" i got m");
  //     return res;
  //   } 
  // }


  private  readCsv() {
    return new Promise((res,rej) => {
     this.ngxCsvParser.parse(this.file, { header: this.header, delimiter: ',' })
    .pipe().subscribe((result: Array<any>) => {
       let a = result;
       res(a);
    }, (error: NgxCSVParserError) => {
      // console.log('Error', error);
      rej(error);
    });
    });
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
    const type = this.checkType();
    if(!type) return;
     let m = type == "csv" ?  await this.readCsv() : await this.readJson();
     return new Observable( d => {
        d.next(m);
     });

  }

  // uploadDocument1() {
  //   const observable = new Observable(async function subscribe(subscriber) {
  //     // const type = this.checkType();
  //     // if(!type){
  //     //   // subscriber.error(err);
  //     // }
  //     subscriber.next(await this.readCsv());
     
  //   });
  // }

  // uploadDocument12() {
  //   const observable = new Observable(subscribe => {
  //     // const type = this.checkType();
  //     // if(!type){
  //     //   // subscriber.error(err);
  //     // }
  //     subscribe.next(this);
     
  //   });
  // }

//    async submitDoc(){
//     this.datafromlocal = [];
//     let res : any = await this.data.uploadDocument();
//     if(res){
//      if(Array.isArray(res)){
//        this.datafromlocal = res;
//        console.log(this.datafromlocal);
//      }   
//      else this.subscribe = res.subscribe(x => console.log(x));
//      this.router.navigate(['/chartdefault']);
//    }  
//  }


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
