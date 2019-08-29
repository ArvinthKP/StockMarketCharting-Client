import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IpoService } from 'src/app/service/ipo.service';
import { IPO } from 'src/app/models/ipo';
import { StockExchangeService } from 'src/app/service/stock-exchange.service';
import { StockExchange } from 'src/app/models/stockExchange';
import { Location } from '@angular/common';

@Component({
  selector: 'update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  userId: number;
  ipo: IPO = new IPO('', '', '', '', '');
  id: number;
  stockExchanges: StockExchange[];
  constructor(private router: Router, private ipoService: IpoService, private _route: ActivatedRoute, private stockExchangeService: StockExchangeService, private _location: Location) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }

    this._route.params.subscribe(res => {
      this.id = Number.parseInt(res['id'])
      console.log(this.id);
    });

    this.ipoService.getIpoById(this.id).subscribe(async res => {
      this.ipo = await res;
    });

    this.stockExchangeService.getStockExhanges().subscribe(async res => {
      this.stockExchanges = await res;
      console.log(this.stockExchanges);
    });
  }
  onSubmit() {
    console.log(this.ipo.id)
    this.ipoService.updateIpo(this.ipo).subscribe(
      async res => {
        this.ipo = await res;
        console.log(this.ipo);
        this.router.navigate(['admin/list-ipo']);
      },
      error => console.log(error)
    );
  }

  backClicked() {
    this._location.back();
  }

}
