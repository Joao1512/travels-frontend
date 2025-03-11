import { Component, OnInit } from '@angular/core';
import { latLng, map, marker, polyline, popup, tileLayer } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{
  options: any;
  map: any;

  ngOnInit(): void {
     this.map = map('map').setView([-23.102091, -45.706848], 13);

     tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=005501a9-8d6e-413c-848b-3df91e4db655', { maxZoom: 18, attribution: '...' }).addTo(this.map)
      
    marker([-23.076409105296552, -45.71075874630997]).addTo(this.map).bindPopup("<b>Parque Ecológico da Moçota</b>").openPopup();
     marker([-23.099047837354963, -45.704465090736015]).addTo(this.map).bindPopup("<b>Kilomania Restaurante</b>").openPopup();
     marker([-23.104215271739367, -45.71344804911426]).addTo(this.map).bindPopup("<b>Museu Paulista de Antiguidades Mecânicas - Roberto Lee</b>").openPopup();;
     marker([-23.096335570474977, -45.70224180254675]).addTo(this.map).bindPopup("<b>Tempero de família Trattoria</b>").openPopup();;

  
     polyline([
      [-23.076409105296552, -45.71075874630997],
      [-23.099047837354963, -45.704465090736015],
      [-23.104215271739367, -45.71344804911426],
      [-23.096335570474977, -45.70224180254675]
    ], {color: "rgb(24, 144, 255)"}).addTo(this.map);

  }

}
