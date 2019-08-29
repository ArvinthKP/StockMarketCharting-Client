import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';
import { Router } from '@angular/router';
import { IPO } from 'src/app/models/ipo';

@Component({
  selector: 'app-list-ipo',
  templateUrl: './list-ipo.component.html',
  styleUrls: ['./list-ipo.component.css']
})
export class ListIpoComponent implements OnInit {

  userId: number;
  ipos: IPO[];

  constructor(private router: Router, private ipoService: IpoService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.ipoService.getIpos().subscribe(async res => {
      this.ipos = await res;
      console.log(this.ipos);
    })
  }

}
