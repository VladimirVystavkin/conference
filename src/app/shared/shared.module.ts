import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: []
  ,imports: [
    CommonModule
    ,MatToolbarModule
    ,MatSidenavModule
    ,MatButtonModule
    ,MatIconModule
    ,MatListModule
    ,MatExpansionModule
    ,MatCardModule
    ,MatDatepickerModule
    ,MatNativeDateModule
    ,MatFormFieldModule
    ,MatInputModule
  ]
  ,exports: [
    MatToolbarModule
    ,MatSidenavModule
    ,MatButtonModule
    ,MatIconModule
    ,MatListModule
    ,MatExpansionModule
    ,MatCardModule
    ,MatDatepickerModule
    ,MatNativeDateModule
    ,MatFormFieldModule
    ,MatInputModule
  ]
})
export class SharedModule { }
