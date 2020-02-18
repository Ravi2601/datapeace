import { TableService } from './table.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { TableViewComponent } from './table-view/table-view.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsViewComponent } from './details-view/details-view.component';

// const routes = [
//   {
//       path: '',
//       children: [
//           {path: 'user', component: TableViewComponent},
//           {path: '', redirectTo: 'user', pathMatch: 'full'},
//       ]
//   },
//   {
//     path: ':id',
//     component: DetailsViewComponent,
//   },
//   {
//       path: '**',
//       redirectTo: 'user'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableViewComponent,
    DetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
