//Josh Trueman 991257988

import { Component, OnInit, Input } from '@angular/core';
//Import myBio object for the header to use
import {MyBio} from '../../../MyBio'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  
  
  }
// Use Input to get myBio info for the header 
  @Input() headerInfo: MyBio;
}

