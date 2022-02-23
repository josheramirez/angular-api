import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './User/add/add.component';
import { EditComponent } from './User/edit/edit.component';
import { ShowComponent } from './User/show/show.component';

const routes: Routes = [
  {path: 'show' , component:ShowComponent},
  {path: 'add' , component:AddComponent},
  {path: 'edit' , component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
