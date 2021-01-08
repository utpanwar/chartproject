import { DataparserService } from './dataparser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartdefaultComponent } from './chartdefault/chartdefault.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartdefaultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path :'' , component : HomeComponent} ,
      { path :'chartdefault' , component : ChartdefaultComponent} ,
    ])
  ],
  providers: [
    DataparserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
