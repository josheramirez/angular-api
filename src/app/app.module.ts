import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './User/show/show.component';
import { EditComponent } from './User/edit/edit.component';
import { AddComponent } from './User/add/add.component';

import { FormsModule} from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule} from '@angular/common/http';


import * as bootstrap from "bootstrap";
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
