import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
	EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
	FormsModule
  ],
  providers: [
  	EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
