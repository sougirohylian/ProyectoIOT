import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toma-temperatura',
  templateUrl: './toma-temperatura.component.html',
  styleUrls: ['./toma-temperatura.component.css']
})
export class TomaTemperaturaComponent implements OnInit {

  first = 0;

  rows = 10;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

}
