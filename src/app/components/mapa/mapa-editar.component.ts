import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.scss'],
})
export class MapaEditarComponent {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.form = fb.group({
      'titulo': data.titulo,
      'desc': data.descripcion,
    });
  }
  guardarCambios() {
    this.dialogRef.close(this.form.value);
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
