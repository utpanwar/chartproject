import { DataparserService } from './dataparser.service';
import { Graphdata } from './models/graph';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chart : [];
  
  
  fr : any;
  fileToUpload: File = null;
  datafromlocal : Graphdata;
  // file : any;
  constructor(private data : DataparserService) {}


  getfile(files)
   {
     this.data.handleFileInput(files);
   }
   
   submitDoc() 
   {
     this.datafromlocal = this.data.uploadDocument();
     console.log(this.datafromlocal);
    //  console.log(this.data.uploadDocument());
   }
  
  ngOnInit() {
    console.log( this.fileToUpload);
  }

}
