import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Conference} from "./conference.interface";

@Injectable({
  providedIn: 'root'
})
export class ConferencesStorageService {
  $conferences : BehaviorSubject<Conference[]> = new BehaviorSubject<Conference[]>([])
  constructor() {
    let conference = new Conference()
    conference.pullDataFromConferenceDTO({
      id: "aldsfkjalsdfj"
      , date: new Date().toDateString()
      , address: "house 2 street Shwagenweg 2 city Kiev"
      , title: "Anatomyi biology"
      , country: "Switherland"
      , geoCoordinate : {latitude : 6 , longitude : 6}
    })
    navigator.geolocation.getCurrentPosition(position => {
      conference.geoCoordinate = {latitude: position.coords.latitude , longitude: position.coords.longitude}
    })

    this.$conferences.next([conference])
  }
  getConferences(){
    return this.$conferences.value
  }

  getConferenceByID(id : string) : Conference | undefined{
    const conferences = this.$conferences.value
    return conferences.find(element => element.id == id)

  }

  deleteConferences(conference : Conference){
    const conferences = this.$conferences.value
    const newArr = conferences.filter((value => { return value.id != conference.id}))
    this.$conferences.next(newArr)

  }
}
