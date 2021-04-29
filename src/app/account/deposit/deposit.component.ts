import { Component, OnInit } from "@angular/core";
import {FormBuilder,FormGroup} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccService } from "src/app/service/acc.service";
import { Account } from "../Account";
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: "app-deposit",
  templateUrl: "./deposit.component.html",
  styleUrls: ["./deposit.component.css"],
})
export class DepositComponent implements OnInit {
  accForm: FormGroup;
  accounts: Account;
  submitted = false;
  amount: number;
  accountId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aService: AccService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  deposit() {
    console.log(this.accountId, this.amount);
    this.aService.deposit(this.accountId, this.amount).subscribe(
      (res) => {
        console.log(res);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.deposit();
  }
  gotoList() {
    this.router.navigate(["./account/list"]);
  }
}
