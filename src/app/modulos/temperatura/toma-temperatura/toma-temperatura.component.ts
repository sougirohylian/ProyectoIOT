import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';
import { TemperaturaDto } from '../Data/TemperatutaDto';
@Component({
  selector: 'app-toma-temperatura',
  templateUrl: './toma-temperatura.component.html',
  styleUrls: ['./toma-temperatura.component.css']
})
export class TomaTemperaturaComponent implements OnInit {

  first = 0;
  rows = 10;
  temperaturas: any;
  public temperaturaDto: TemperaturaDto;

  constructor(private firebaseService: FirebaseService) {
    this.temperaturaDto = new TemperaturaDto();
   }

  ngOnInit(): void {
    this.firebaseService.read_temperature().subscribe(data => {
      this.temperaturas = data.map(tmp => {
        return {
          id: tmp.payload.doc.id,
          temperatura: tmp.payload.doc.data()['Temperatura']
        }
      })
    });
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
