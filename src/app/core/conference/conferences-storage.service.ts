import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Conference} from "./conference.interface";

@Injectable({
  providedIn: 'root'
})
export class ConferencesStorageService {
  $conferences : BehaviorSubject<Conference[]> = new BehaviorSubject<Conference[]>([])
  constructor() {

  }
}
