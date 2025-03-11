import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryRoutingModule } from './itinerary-routing.module';
import { ItineraryComponent } from './itinerary.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapModule } from 'src/app/components/map/map.module';
import { PlanModule } from 'src/app/components/plan/plan.module';
@NgModule({
  declarations: [ItineraryComponent],
  imports: [
    CommonModule,
    ItineraryRoutingModule,
    LeafletModule,
    MapModule,
    PlanModule
  ]
})
export class ItineraryModule { }
