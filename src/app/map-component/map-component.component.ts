import { Component, OnInit } from '@angular/core';
import { mappls, mappls_plugin } from 'mappls-web-maps';

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css',
})
export class MapComponent implements OnInit {
  mapobject:any
  mapplsClassObject:any= new mappls()
  mapplsPluginObject:any= new mappls_plugin()
  title = 'Map_angular';


  ngOnInit() {
    const loadObject = {
      map: true,
      layer: 'raster', // Optional Default Vector
      version: '3.0', // Optional, other version 3.5 also available with CSP headers
      libraries: ['airspacelayers'], // Optional for Polydraw and airspaceLayers
      plugins: ['direction'], // Optional for any plugins

    };

    this.mapplsClassObject.initialize(
      'a0d3ba4b17a13a926720e036bf838f97',
      loadObject,
      () => {
        this.mapobject = this.mapplsClassObject.Map({
          id: 'map',
          properties: {
            center: [22.3039, 70.8022],
            zoomControl: true,
            location: true,
          },
        });
      }
    );
}
}
