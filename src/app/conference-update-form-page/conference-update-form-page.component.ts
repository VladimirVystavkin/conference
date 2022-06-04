import {Component, OnInit} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {ActivatedRoute, RouterLinkActive} from "@angular/router";
import {ConferencesStorageService} from "../core/conference/conferences-storage.service";
import {Conference} from "../core/conference/conference.interface";
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import Marker = google.maps.Marker;

@Component({
  selector: 'app-conference-update-form-page',
  templateUrl: './conference-update-form-page.component.html',
  styleUrls: ['./conference-update-form-page.component.sass']
})
export class ConferenceUpdateFormPageComponent implements OnInit {
  id?: string | null

  conference ?: Conference
  marker ?: Marker
  selected: Date = new Date()

  lat: number = 6
  lng: number = 6

  dataForm: FormGroup

  constructor(private _formBuilder: FormBuilder, public conferences: ConferencesStorageService, public activatedRoute: ActivatedRoute) {
    let validator: ValidatorFn = Validators.pattern('[0-9]+.?[0-9]+|[0-9]')
    this.dataForm = this._formBuilder.group(
      {
        title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(252)]]
        // ,date: [this.selected.toDateString , Validators.required]
        , lat: ['', [Validators.required, validator]]
        , lng: ['', [Validators.required, validator]]
        , country: ['', Validators.required]
        , address: ['', Validators.required]
      })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramsMap => {
      this.id = paramsMap.get("id")

      if (this.id) {
        this.conference = this.conferences.getConferenceByID(this.id)
        if (this.conference) {
          this.selected = this.conference?.date
          this.lat = this.conference?.geoCoordinate.latitude
          this.lng = this.conference?.geoCoordinate.longitude
          this.dataForm.controls.title.setValue(this.conference.title)
          this.dataForm.controls.country.setValue(this.conference.country)
          this.dataForm.controls.lat.setValue(this.conference.geoCoordinate.latitude)
          this.dataForm.controls.lng.setValue(this.conference.geoCoordinate.longitude)
          this.dataForm.controls.address.setValue(this.conference.address)
        }
      }
    })


    let loader = new Loader({
      apiKey: "AIzaSyBaYp8blyrAIj0N36B-WetkoBWDFE5Vpxg"
    })
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
    })

    loader.load().then(() => {

      let myMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: {
          lat: this.lat,
          lng: this.lng
        }
        , zoom: 18
      })
      this.marker = new google.maps.Marker({
        position: {lat: this.lat, lng: this.lng},
        map: myMap,
        title: "Conference Location",
        draggable: true
      })

      this.marker.addListener('mouseup', () => {
        const position = this.marker?.getPosition()
        if (position && this.dataForm) {
          this.dataForm.controls.lat.setValue(position.lat())
          this.dataForm.controls.lng.setValue(position.lng())
        }
      })
    })
  }

  submit() {
    const conference = new Conference()
    const dateForm = this.dataForm.value
    conference.title = dateForm.title
    conference.address = dateForm.address
    conference.country = dateForm.country
    conference.date = this.selected
    conference.geoCoordinate = {latitude: dateForm.lat, longitude: dateForm.lng}

    if (this.id == "null") {

      this.conferences.createConference(conference)
    } else {
      conference.id = this.id ? this.id : ""

      this.conferences.updateConferences(conference)
    }
  }

}
