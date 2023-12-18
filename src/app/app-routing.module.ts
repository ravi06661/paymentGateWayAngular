import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceorderComponent } from './pages/placeorder/placeorder.component';

const routes: Routes = [
  {path:'',component:PlaceorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
