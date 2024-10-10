import { Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';

export const routes: Routes = [
  {path:'', redirectTo:'profile', pathMatch:'full'},
  {path:'profile', title:'profile' ,component: MainComponentComponent },

];
