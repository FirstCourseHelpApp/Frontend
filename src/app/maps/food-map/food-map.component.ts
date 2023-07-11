import { Component, OnInit } from '@angular/core';
// import {YMapMarker} from '@yandex/ymaps3-types';

declare var ymaps:any;

@Component({
  selector: 'food-map',
  templateUrl: './food-map.component.html',
  styleUrls: ['./food-map.component.css']
})
export class FoodMapComponent implements OnInit {
  public map: any;

  public ngOnInit(): void {
    ymaps.ready().then((): void => {
      this.map = new ymaps.Map('map', {
        center: [56.840771150032275, 60.65084724203834],
        zoom: 16
      });

      const markerElement = document.createElement('div');
      markerElement.className = 'marker-class';
      markerElement.innerText = "I'm marker!";
      // console.log(markerElement);

      // const marker = new YMapMarker(
      //   {
      //     source: 'markerSource',
      //     coordinates: [56.84125037986573, 60.65191476122625],
      //     draggable: false,
      //     mapFollowsOnDrag: true
      //   },
      //   markerElement
      // );

      // this.map.addChild(marker);
    });
  }
}
