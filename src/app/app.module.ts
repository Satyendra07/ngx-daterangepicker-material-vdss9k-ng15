import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material-angularv15';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxDaterangepickerMd],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
