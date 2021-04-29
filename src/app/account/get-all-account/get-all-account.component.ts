import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccService } from "src/app/service/acc.service";
import { Account } from "../Account";
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: "app-get-all-account",
  templateUrl: "./get-all-account.component.html",
  styleUrls: ["./get-all-account.component.css"],
})
export class GetAllAccountComponent implements OnInit {
  aId: string = "";
  accounts: Account[];
  accArray = [];
  items = [];

  constructor(private aService: AccService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
    this.aService.getAccount().subscribe((data) => {
      this.accArray = data;
      this.items = data;
    });
  }
  reloadData() {
    this.aService.getAccount().subscribe((data) => {
      this.accounts = data;
    });
  }
  searchByAccountId() {
    this.accounts = this.items.filter(
      (data: { accountId: { toString: () => string } }) =>
        data.accountId.toString().match(this.aId)
    );
  }

  deleteAccount(accountId: number) {
    this.aService.deleteAccount(accountId).subscribe(
      (data: Account[]) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
  updateAccount(accountId: number) {
    this.router.navigate(["account/update/saving", accountId]);
  }

  findAccount(accountId: number) {
    this.router.navigate(["account/find", accountId]);
  }
  onChangePage(accounts: Account[]) {
    // update current page of items
    this.accounts = accounts;
  }
}
