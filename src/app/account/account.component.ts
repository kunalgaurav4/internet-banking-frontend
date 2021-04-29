import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  //a:any;
  constructor(private uService:UserService) { }
  
  ngOnInit(): void {
  }
 
  a:any=this.uService.getRole();
  
  
}
