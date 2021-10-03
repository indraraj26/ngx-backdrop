import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBackdropModule } from './../../projects/ngx-backdrop/src/lib/ngx-backdrop.module';

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
