import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    if (localStorage.getItem("marcadores")) {
      this.marcadores = JSON.parse(localStorage.getItem("marcadores")|| '{}') ;
    }
  }

  ngOnInit(): void {}

  agregarMarcador(evento: any) {
    const coords: { lat: number; lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    console.log(nuevoMarcador);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i,1);
    this.guardarStorage();

  }
}
