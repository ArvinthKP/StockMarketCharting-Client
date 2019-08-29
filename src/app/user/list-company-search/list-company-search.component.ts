import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-company-search',
  templateUrl: './list-company-search.component.html',
  styleUrls: ['./list-company-search.component.css']
})
export class ListCompanySearchComponent implements OnInit {

  userId: number;
  companies: Company[];

  constructor(private router: Router, private companyService: CompanyService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.companyService.getCompanies().subscribe(async res => {
      this.companies = res;
    })
  }

}
