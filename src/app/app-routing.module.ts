import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { MainViewComponent } from './pages/main-view/main-view.component';


const routes: Routes = [
  { path : '' , component : MainViewComponent },
  { path: 'back', component: MainViewComponent},
  { path : 'addTask', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
