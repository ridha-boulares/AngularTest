import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent} from 'src/app/add-video/add-video.component'
import { VideoComponent } from './video/video.component'
const routes: Routes = [
  {path:'', redirectTo:'video', pathMatch:'full'},

  {path: 'add' , component:AddVideoComponent},
  {path: 'video' , component:VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
