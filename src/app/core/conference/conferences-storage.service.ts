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
    })

    this.$conferences.next([conference])
  }
  getConferences(){
    return this.$conferences.value
  }
}
