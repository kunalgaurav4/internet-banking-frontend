import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-nominee',
  templateUrl: './nominee.component.html',
  styleUrls: ['./nominee.component.css']
})
export class NomineeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  accountlist(){
    this.router.navigate(['/account']);
  } 
}
