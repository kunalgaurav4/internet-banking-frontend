import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccService } from "src/app/service/acc.service";
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.component.html",
  styleUrls: ["./transfer.component.css"],
})
export class TransferComponent implements OnInit {
  accForm: FormGroup;
  accounts: Account;
  submitted = false;
  amount: number;
  senderAccountId: number;
  reciverAccountId: number;
  customerId: number;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aService: AccService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
  transfer() {
    this.aService
      .transfer(
        this.senderAccountId,
        this.reciverAccountId,
        this.amount,
        this.customerId,
        this.password
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.gotoList();
        },
        (error) => console.log(error)
      );
  }
  onSubmit() {
    this.transfer();
  }
  gotoList() {
    this.router.navigate(["./account/list"]);
  }
}
