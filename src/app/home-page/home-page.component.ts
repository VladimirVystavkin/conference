import { Component, OnInit } from '@angular/core';
import {ConferencesStorageService} from "../core/conference/conferences-storage.service";
import {Conference} from "../core/conference/conference.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor( public conferences : ConferencesStorageService , public router : Router) {}

  ngOnInit(): void {

  }

  deleteConference(conference : Conference){
    this.conferences.deleteConferences(conference)
  }
}
