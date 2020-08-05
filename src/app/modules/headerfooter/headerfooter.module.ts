//Josh Trueman 991257988
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from '../material-ui/material-ui.module';

//Use the Material Module for UI

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HeaderfooterModule { }
