import { Component, } from '@angular/core';
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
export class HomeComponent implements OnDestroy {

    chart : [];
    datafromlocal : any;
    subscribe : Subscription;
    constructor(private data : DataparserService,private router :Router) {}
  
    getfile(files)
     {
      this.data.handleFileInput(files);
     }
     
  
     async submitDoc(){
       this.datafromlocal = [];
       let res : any = await this.data.uploadDocument();
       if(res){
        if(Array.isArray(res)){
          this.datafromlocal = res;
          console.log(this.datafromlocal);
        }   
        else this.subscribe = res.subscribe(x => console.log(x));
        this.router.navigate(['/chartdefault']);
      }  
    }
  
  ngOnDestroy()
  {
    if(this.subscribe) this.subscribe.unsubscribe();
  }  
  
  }
  
