import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {ConferenceInformationPageComponent} from "./conference-information-page/conference-information-page.component";



const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: ConferenceInformationPageComponent},
    ]
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)]
  , exports: [RouterModule]
})
export class AppRoutingModule {

}
