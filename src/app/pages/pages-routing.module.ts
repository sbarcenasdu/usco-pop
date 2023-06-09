import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';
import { SimulatorComponent } from './simulator/simulator.component';

const routes: Routes = [{
  path:'home', component: PagesComponent,
  children:[
    {path: '', component: HomeComponent},
    {path: 'survey', component: SurveyComponent},
    {path: 'simulator', component: SimulatorComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
