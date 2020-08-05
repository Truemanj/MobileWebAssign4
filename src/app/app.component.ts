//Josh Trueman 991257988
import { Component } from '@angular/core';
import {MyBio} from './MyBio'
import {Cars} from './carsInterface';
import carType from '../assets/data/cars.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joshAssign4';
//Create a myBio object and populate the information
  student : MyBio = {
    name: "Josh Trueman", 
    studentId: 991257988, 
    imageLocation: "./assets/images/flag.jpg", 
    status: "Sophomore"
    }
  //Create carInterface arrays from the JSON
    newCars: Cars[] = carType.cars.New;
    usedCars: Cars[] = carType.cars.Used;
  }

 
