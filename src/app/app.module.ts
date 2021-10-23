import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBackdropModule } from '@indraraj26/ngx-backdrop';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBackdropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
