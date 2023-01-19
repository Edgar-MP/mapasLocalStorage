import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];

  title = 'My first AGM project';
  lat = 42.851797376544354;
  lng = -2.673944640743793;

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores') || '{}');
    }
  }

  ngOnInit(): void {}

  agregarMarcador(evento: any) {
    const coords: { lat: number; lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    console.log(nuevoMarcador);
    this.guardarStorage();
    this._snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    this._snackBar.open('Marcador eliminado', 'Cerrar', { duration: 3000 });
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
  }

  editarMarcador(marcador: Marcador) {
    const dialogoRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, descripcion: marcador.descripcion },
    });

    dialogoRef.afterClosed().subscribe(result => {
      console.log('Cerrado');
      console.log(result);
      if (!result)
        return
      
      marcador.titulo = result.titulo;
      marcador.descripcion = result.desc;
      this.guardarStorage();
  })
  }
}
