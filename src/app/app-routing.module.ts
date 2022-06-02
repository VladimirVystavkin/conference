import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {ConferenceInformationPageComponent} from "./conference-information-page/conference-information-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ConferenceUpdateFormPageComponent} from "./conference-update-form-page/conference-update-form-page.component";



const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'conference/information/:id', component:ConferenceInformationPageComponent},
      {path: 'conference/update/form/:id', component: ConferenceUpdateFormPageComponent}
    ]
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)]
  , exports: [RouterModule]
})
export class AppRoutingModule {

}
