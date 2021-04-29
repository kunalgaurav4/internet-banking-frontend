import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccService } from "src/app/service/acc.service";
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: "app-withdraw",
  templateUrl: "./withdraw.component.html",
  styleUrls: ["./withdraw.component.css"],
})
export class WithdrawComponent implements OnInit {
  accForm: FormGroup;
  accounts: Account;
  submitted = false;
  amount: number;
  accountId: number;
  customerId: number;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aService: AccService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  withdraw() {
    this.aService
      .withdraw(this.accountId, this.amount, this.customerId, this.password)
      .subscribe(
        (res) => {
          console.log(res);
          this.gotoList();
        },
        (error) => console.log(error)
      );
  }
  onSubmit() {
    this.withdraw();
  }
  gotoList() {
    this.router.navigate(["./account/list"]);
  }
}
