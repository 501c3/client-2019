import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  menu: string[] = ['home', 'contact', 'participants', 'entries', 'xtras', 'summary', 'payment', 'finish']

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
