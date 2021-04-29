import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccService } from "src/app/service/acc.service";
import { Account } from "../Account";
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: "app-update-account",
  templateUrl: "./update-account.component.html",
  styleUrls: ["./update-account.component.css"],
})
export class UpdateAccountComponent implements OnInit {
  accountId: number;
  accounts: Account;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aService: AccService
  ) {}

  ngOnInit() {
    this.accounts = new Account();
    this.accountId = this.route.snapshot.params["accountId"];

    this.aService.getAccountById(this.accountId).subscribe(
      (data) => {
        console.log(data);
        this.accounts = data;
      },
      (error) => console.log(error)
    );
  }
  updateSavingAccount() {
    this.aService.updateSavingAccount(this.accountId, this.accounts).subscribe(
      (res) => {
        console.log(res);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.updateSavingAccount();
  }
  gotoList() {
    this.router.navigate(["./list"]);
  }
}
