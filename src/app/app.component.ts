import { Component } from '@angular/core';
import {myBio} from './myBio'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joshAssign4';

  student : myBio = {
    name: "Josh Trueman", 
    studentId: 991257988, 
    imageLocation: "./assets/images/flag.jpg", 
    status: "Sophomore"}
  }
