import { Component, OnInit, } from '@angular/core';
import { DataparserService } from '../dataparser.service';
// import { Graphdata } from './models/graph';
import {  OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    res : any
    chart : [];
    datafromlocal : any;
    subscribe : Subscription;
    r : any;
    constructor(private data : DataparserService,private router :Router) { console.log("const of home");}
  
    getfile(files)
     {
      this.data.handleFileInput(files);
     }
     
  
     async submitDoc(){
        this.res  = (await this.data.uploadDocument()).subscribe(x => this.r = x);
       if(this.res){
        console.log(this.res);
        console.log(this.r);
        this.router.navigate(['/chartdefault']);
      }  
    }
  
  ngOnInit()
  {
    // if(this.subscribe) this.subscribe.unsubscribe();
    console.log("ngoninit of home");
  }  
  
  }
  
