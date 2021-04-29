import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccService } from 'src/app/service/acc.service';
import { Account } from '../Account';
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: 'app-add-term-account',
  templateUrl: './add-term-account.component.html',
  styleUrls: ['./add-term-account.component.css'],
})
export class AddTermAccountComponent implements OnInit {
  accForm: FormGroup;
  accounts: Account = new Account();
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private aService: AccService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accForm = this.fb.group({
      //nomineeId:['',Validators.required],
      balance: ['', Validators.required],
      months: ['', Validators.required],
      interestRate: ['', Validators.required],
      penaltyAmount: ['', Validators.required],
      accountType: 1,
      user: new FormGroup({
        customerId: new FormControl('', Validators.required),
      }),
    });
  }
  // newNominee():void{
  //   this.submitted=false;
  //   this.nominees=new Nominee();
  // }

  save() {
    this.aService.addTermAccount(this.accForm.value).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  // onSubmit(){
  //   this.submitted=true;
  //   this.save();
  // }
  gotoList() {
    this.router.navigate(['./']);
  }
}
