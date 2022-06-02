import {Component, OnInit} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-conference-update-form-page',
  templateUrl: './conference-update-form-page.component.html',
  styleUrls: ['./conference-update-form-page.component.sass']
})
export class ConferenceUpdateFormPageComponent implements OnInit {
  selected: Date = new Date()

  lat : number = 6
  lng : number = 6
  constructor() {

  }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: "AIzaSyBaYp8blyrAIj0N36B-WetkoBWDFE5Vpxg"
    })
    // let currentPosition = new GeolocationPosition()

    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {
          lat: this.lat,
          lng: this.lng
        }
        , zoom: 18
      })
    })


  }
}
