//Josh Trueman 991257988
import { Component, OnInit, Input } from '@angular/core';
//Import objects for use in tabs 
import {MyBio} from '../MyBio';
import {MYCLASSES} from '../../assets/data/myClasses';
import {Cars} from '../carsInterface'

@Component({
  selector: 'app-trueman',
  templateUrl: './trueman.component.html',
  styleUrls: ['./trueman.component.css']
})
export class TruemanComponent implements OnInit {
  
  //Declare global variables  
  myClasses = MYCLASSES;
  i: number;
  outArea : string;
  carsChoice : Cars[];
  listTitle : string;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  //Add Inputs for the second tab info and the cars JSON lists 
  @Input() mainInfo: MyBio;
  @Input() newCars : Cars[];
  @Input() usedCars : Cars[];

  
//Method to get the clicked list item 
  onClickMe(i) {

    this.i = i;
    
    
  
  }
//Method to show the infomation in the myClasses object at the list index 
  showHideText(index) {

    if (index == this.i) {
      return "block";
    } else {
      return "none"
    }


  }
//Gets input from the button click and sets the JSON to the listTitle variable
  displayJSON(choice) {
    switch(choice) {
      case 1: 
        this.carsChoice = this.newCars;
        this.listTitle = "New";
      break;
      case 2: 
        this.carsChoice = this.usedCars;
        this.listTitle = "Used";
      break;
    }
    
    //Sets the text to be displayed in the tab grabbing the correct list from the JSON  
    this.outArea = `<h3>${this.listTitle} Cars List</h3>`
    this.outArea+=`<table><tr>
          <th>Make</th>
          <th>Type</th>
          <th>Engine</th>
          <th>Cost</th>
          <th>Color</th>
          </tr>`;
      //Creates a table with the information from the JSON array
      for (let cars of this.carsChoice) {
        this.outArea+=`<tr>
        <td><strong> ${cars.make} </strong></td>
        <td> ${cars.type} </td>
        <td> ${cars.engine} </td>
        <td> ${cars.cost} </td>
        <td> ${cars.color} </td>
        </tr>`;   
    }
  }

}