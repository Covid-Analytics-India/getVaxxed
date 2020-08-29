import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./pages/register/register.component";
import { MetricsComponent } from './pages/metrics/metrics.component';

const routes: Routes = [
  {
    path: '', 
    component: RegisterComponent
  },
  {
    path: 'metrics', 
    component: MetricsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
