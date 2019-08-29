import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/models/company';
import { SectorService } from 'src/app/service/sector.service';
import { StockExchangeService } from 'src/app/service/stock-exchange.service';
import { Sector } from 'src/app/models/sector';
import { StockExchange } from 'src/app/models/stockExchange';
import { StockPriceService } from 'src/app/service/stock-price.service';
import { StockPrice } from 'src/app/models/stockPrice';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'compare-details',
  templateUrl: './compare-details.component.html',
  styleUrls: ['./compare-details.component.css']
})
export class CompareDetailsComponent implements OnInit {

  // Misc data
  userId: number;
  companies: Company[] = [];
  sectors: Sector[] = [];
  stockExchanges: StockExchange[] = [];
  stockPrices: StockPrice[] = [];
  generate: boolean = false;

  //line chart data
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] =
    [
      {
        borderColor: "#FF7360",
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        borderColor: "#6FC8CE",
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        borderColor: "#FAFFF2",
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        borderColor: "#FFFCC4",
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        borderColor: "#B9E8E0",
        backgroundColor: 'rgba(255,0,0,0)',
      },

    ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  constructor(
    private router: Router,
    private companyService: CompanyService,
    private sectorService: SectorService,
    private stockExchangeService: StockExchangeService,
    private stockPriceService: StockPriceService,
  ) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(async res => {
      this.companies = await res;
    });
    this.sectorService.getSectors().subscribe(async res => {
      this.sectors = await res;
    });
    this.stockExchangeService.getStockExhanges().subscribe(async res => {
      this.stockExchanges = await res;
    });
  }

  onClick1(companyId, stockExchangeId, periodicity) {
    let stockPrices;
    this.lineChartLabels = [];
    this.lineChartData = [];

    let x: string[] = [], y: number[] = [];

    this.stockPriceService.getStockPricesByCompanyId(companyId).subscribe(async res => {
      stockPrices = await res;
      for (let i = 0; i < stockPrices.length; i++) {
        x.push(stockPrices[i].time);
        y.push(stockPrices[i].currentPrice);
      }
    })

    this.lineChartLabels = x;
    this.lineChartData.push({ data: y, label: companyId });
    this.generate = true;
  }

  onClick2(companyId1, companyId2, stockExchangeId, periodicity) {
    console.log(companyId1 + " " + companyId2)
    let stockPrices1: StockPrice[] = [];
    let stockPrices2: StockPrice[] = [];
    let x: string[] = [], y1: number[] = [], y2: number[] = [];
    this.lineChartLabels = [];
    this.lineChartData = [];



    this.stockPriceService.getStockPricesByCompanyId(companyId2).subscribe(async res => {
      stockPrices2 = await res;
      for (let i = 0; i < stockPrices2.length; i++) {
        x.push(stockPrices2[i].time);
        y1.push(stockPrices2[i].currentPrice);
      }
    })

    this.stockPriceService.getStockPricesByCompanyId(companyId1).subscribe(async res => {
      stockPrices1 = await res;
      for (let i = 0; i < stockPrices1.length; i++) {
        y2.push(stockPrices1[i].currentPrice);
      }
    })

    this.lineChartLabels = x;
    this.lineChartData = [
      { data: y1, label: companyId1 },
      { data: y2, label: companyId2 }
    ];
    this.generate = true;
  }

  onClick3(sectorName, stockExchangeId, periodicity) {
    let stockPrices: any[];
    let companies: Company[] = [];
    let x = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00']
    let y: number[] = [];
    this.lineChartLabels = x;
    this.lineChartData = [];
    this.companyService.getCompaniesBySectorName(sectorName).subscribe(async res => {
      companies = await res;
      for (let i = 0; i < companies.length; i++) {
        this.stockPriceService.getStockPricesByCompanyId(companies[i].id).subscribe(async res => {
          stockPrices = await res;
          stockPrices.forEach(element => {
            y.push(element.currentPrice);
          });
          this.lineChartData.push({ data: y.splice(0, 10), label: companies[i].companyName.toString() });
        });
      }
    });
    this.generate = true;
  }

  onClick4(sectorName1, sectorName2, stockExchangeId, periodicity) {
    let stockPrices: any[];
    let companies: Company[] = [];
    let x = ['9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00']
    let y: number[] = [];
    this.lineChartLabels = x;
    this.lineChartData = [];

    this.companyService.getCompaniesBySectorName(sectorName1).subscribe(async res => {
      companies = await res;
      
      for (let i = 0; i < companies.length; i++) {
        this.stockPriceService.getStockPricesByCompanyId(companies[i].id).subscribe(async res => {
          stockPrices = await res;
          stockPrices.forEach(element => {
            y.push(element.currentPrice);
          });
          this.lineChartData.push({ data: y.splice(0, 10), label: companies[i].companyName.toString() });
        });
      }
    });

    this.companyService.getCompaniesBySectorName(sectorName2).subscribe(async res => {
      companies = await res;
      
      for (let i = 0; i < companies.length; i++) {
        this.stockPriceService.getStockPricesByCompanyId(companies[i].id).subscribe(async res => {
          stockPrices = await res;
          stockPrices.forEach(element => {
            y.push(element.currentPrice);
          });
          this.lineChartData.push({ data: y.splice(0, 10), label: companies[i].companyName.toString() });
        });
      }
    });

    this.generate = true;
  }

  onClick5(value1, value2, value3, value4) {
    console.log(value1 + value2 + value3 + value4);
    this.generate = true;
  }
}