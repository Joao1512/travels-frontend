import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {

  options: any;

  ngOnInit(): void {
    this.options = {
      layers: [
        tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=005501a9-8d6e-413c-848b-3df91e4db655', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 10,
      center: latLng(-23.102091, -45.706848)
    };
  }

}
