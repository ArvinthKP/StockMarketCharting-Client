import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UploadComponent } from './admin/upload/upload.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { DetailsComponent } from './user/details/details.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { ListCompanySearchComponent } from './user/list-company-search/list-company-search.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { ListStockExchangeComponent } from './admin/list-stock-exchange/list-stock-exchange.component';
import { ListIpoComponent } from './admin/list-ipo/list-ipo.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';


const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'line', component: MyLineChartComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: UploadComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'add-company', component: AddCompanyComponent },
      { path: 'list-company', component: ListCompanyComponent },
      { path: 'update-company/:id', component: UpdateCompanyComponent },
      { path: 'add-stock-exchange', component: AddStockExchangeComponent },
      { path: 'list-stock-exchange', component: ListStockExchangeComponent },
      { path: 'list-ipo', component: ListIpoComponent },
      { path: 'update-ipo/:id', component: UpdateIpoComponent }
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', component: DetailsComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'update-user', component: UpdateDetailsComponent },
      { path: 'search', component: ListCompanySearchComponent },
      { path: 'manage-ipo', component: ManageIpoComponent },
      { path: 'compare-details', component: CompareDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
