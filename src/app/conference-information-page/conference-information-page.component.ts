import { Component, OnInit } from '@angular/core';
import {ConferencesStorageService} from "../core/conference/conferences-storage.service";
import {Conference} from "../core/conference/conference.interface";
import {Loader} from "@googlemaps/js-api-loader";



@Component({
  selector: 'app-conference-information-page',
  templateUrl: './conference-information-page.component.html',
  styleUrls: ['./conference-information-page.component.sass']
})

export class ConferenceInformationPageComponent implements OnInit {

  conference : Conference

  constructor(public conferencesStorageService : ConferencesStorageService) {
    this.conference = conferencesStorageService.getConferences()[0]

  }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: "AIzaSyBaYp8blyrAIj0N36B-WetkoBWDFE5Vpxg"
    })
    loader.load().then(()=>{

      new google.maps.Map(document.getElementById("map") as HTMLElement , {
        center: {
          lat:51,
          lng:6
        }
        ,zoom:6
      })
    })


  }
}
