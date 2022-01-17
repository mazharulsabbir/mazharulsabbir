import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PathnotfoundComponent} from "./components/pathnotfound/pathnotfound.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: PathnotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
