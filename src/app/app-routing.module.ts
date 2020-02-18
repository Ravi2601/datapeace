import { DetailsViewComponent } from './details-view/details-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {path: '', component: TableViewComponent},
  {
      path: '', component: TableViewComponent,
  },
  {
    path: 'user/:id', component: DetailsViewComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
