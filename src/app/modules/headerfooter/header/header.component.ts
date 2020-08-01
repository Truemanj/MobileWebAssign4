import { Component, OnInit, Input } from '@angular/core';
import {myBio} from '../../../myBio'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  
  
  }

  @Input() headerInfo: myBio;
}

