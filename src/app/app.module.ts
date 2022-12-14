import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import {HttpClientModule} from "@angular/common/http";
import {ButtonsModule} from "ngx-bootstrap/buttons";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import { TimepickerModule} from "ngx-bootstrap/timepicker";
import {RatingModule} from "ngx-bootstrap/rating";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
