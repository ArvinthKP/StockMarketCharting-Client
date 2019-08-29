import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';
import { StockExchangeService } from 'src/app/service/stock-exchange.service';
import { StockExchange } from 'src/app/models/stockExchange';

@Component({
  selector: 'app-list-stock-exchange',
  templateUrl: './list-stock-exchange.component.html',
  styleUrls: ['./list-stock-exchange.component.css']
})
export class ListStockExchangeComponent implements OnInit {

  userId: number;
  stockExchanges: StockExchange[];

  constructor(private router: Router, private stockExchangeService: StockExchangeService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.stockExchangeService.getStockExhanges().subscribe( async res => {
      this.stockExchanges = res;
    })
  }

}
