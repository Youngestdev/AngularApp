import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from  './modules/header/header.module';
import { AboutMeModule } from './modules/about-me/about-me.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
