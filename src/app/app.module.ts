import { DataparserService } from './dataparser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartdefaultComponent } from './chartdefault/chartdefault.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChartdefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path :'' , component : AppComponent} ,
      { path :'chartdefault' , component : ChartdefaultComponent} ,
    ])
  ],
  providers: [
    DataparserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
