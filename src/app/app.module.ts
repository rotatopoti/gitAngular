import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';

import { SearchService } from './shared/services/search/search.service';
import { EvaluatePipe } from './shared/pipes/evaluate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EvaluatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ SearchService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
