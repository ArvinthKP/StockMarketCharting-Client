import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  userId: number;
  user: User = new User('', '' ,'' ,'' ,'');

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = localStorage.getItem("userId");
    this.userId = parseInt(userId);
    if (!userId) {
      alert("Logged out of your account, Please Login again")
      this.router.navigate(['sign-in']);
      return;
    }
    this.userService.getUserById(this.userId).subscribe(
      async res => {
        this.user = await res;
      }, error => console.log(error)
    )
  }

  onSubmit() {
    this.userService.registerUser(new User(this.user.username, this.user.password, this.user.email, "USER", this.user.mobile, this.userId)).subscribe(
      async res => { 
        this.user = await res;
        this.router.navigate(['user/details'])
       },
      error => console.log(error)
    );
  }

}
