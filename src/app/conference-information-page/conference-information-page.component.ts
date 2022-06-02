import {Component, OnInit} from '@angular/core';
import {ConferencesStorageService} from "../core/conference/conferences-storage.service";
import {Conference} from "../core/conference/conference.interface";
import {Loader} from "@googlemaps/js-api-loader";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";


@Component({
  selector: 'app-conference-information-page',
  templateUrl: './conference-information-page.component.html',
  styleUrls: ['./conference-information-page.component.sass']
})

export class ConferenceInformationPageComponent implements OnInit {

  conference ?: Conference

  constructor(public conferencesStorageService: ConferencesStorageService, activatedRoute: ActivatedRoute  , public router : Router) {
    activatedRoute.params.subscribe(param => {
      let conference = conferencesStorageService.getConferenceByID(param.id)
      if (conference) {
        this.conference = conference
      }
    })
  }

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: "AIzaSyBaYp8blyrAIj0N36B-WetkoBWDFE5Vpxg"
    })


    loader.load().then(() => {
      const myCoordinate = {
        lat: this.conference ? this.conference.geoCoordinate.latitude : 6,
        lng: this.conference ? this.conference.geoCoordinate.longitude : 6
      }
      const myMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: myCoordinate
        , zoom: 12
      })

      new google.maps.Marker(
        {
          position: myCoordinate,
          map: myMap,
          title: "Conference Location"

        }
      )
    })
  }

  deleteConference(conference : Conference | undefined){
    if(conference){
      this.conferencesStorageService.deleteConferences(conference)
    }

    this.router.navigate(['/'])
  }

}
