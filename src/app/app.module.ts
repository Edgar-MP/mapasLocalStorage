import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';

const APIKEY: string = "";

@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent, 
    MapaComponent,
    MapaEditarComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: APIKEY,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
