import { DataparserService } from './dataparser.service';
import { Graphdata } from './models/graph';
import { Component, OnInit } from '@angular/core';
import {pipe , map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart : [];
  
  
  fr : any;
  fileToUpload: File = null;
  datafromlocal : any;
  // file : any;
  constructor(private data : DataparserService) {}


  getfile(files)
   {
    this.data.handleFileInput(files);
   }

   async submitDoc()  
   {
    //  this.datafromlocal = [];
     let res : any= await this.data.uploadDocument();
     if(Array.isArray(res)) // input : json
     {
     
      this.datafromlocal = res;
      console.log(this.datafromlocal);
     }   
     else
     {
      // this.datafromlocal = [];
      // res.subscribe((x: Graphdata[]) =>{  // input : csv
      //   this.datafromlocal = x;
      //   console.log(this.datafromlocal);
      //   });

        this.datafromlocal = res.pipe(map((x : Graphdata)=> {
         return  this.datafromlocal.id = x.id;
          // console.log(x);
          // console.log(this.datafromlocal);  
        }  ));

        this.datafromlocal.subscribe(x => console.log(x));
        
         
     }  
   }
  
  ngOnInit() {
    console.log( this.fileToUpload);
  }

}
