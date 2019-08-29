import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { UploadComponent } from './admin/upload/upload.component';
import { DetailsComponent } from './user/details/details.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { ListCompanySearchComponent } from './user/list-company-search/list-company-search.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { ListStockExchangeComponent } from './admin/list-stock-exchange/list-stock-exchange.component';
import { ListIpoComponent } from './admin/list-ipo/list-ipo.component';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    AddStockExchangeComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    UserComponent,
    CompareDetailsComponent,
    UploadComponent,
    DetailsComponent,
    UpdateIpoComponent,
    ManageIpoComponent,
    ListCompanyComponent,
    ListCompanySearchComponent,
    UpdateDetailsComponent,
    ListStockExchangeComponent,
    ListIpoComponent,
    MyLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
