import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AccService } from "src/app/service/acc.service";
import { Account } from "../Account";
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: "app-add-saving-account",
  templateUrl: "./add-saving-account.component.html",
  styleUrls: ["./add-saving-account.component.css"],
})
export class AddSavingAccountComponent implements OnInit {
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
      balance: ["", Validators.required],
      fine: ["", Validators.required],
      interestRate: ["", Validators.required],
      minBalance: ["", Validators.required],
      accountType: 0,
      user: new FormGroup({
        customerId: new FormControl("", Validators.required),
      }),
    });
  }

  save() {
    this.aService.addSavingAccount(this.accForm.value).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
    this.submitted = true;
    if (!this.accForm.valid) {
      return false;
    } else {
      alert("Added Account");
    }
  }
  gotoList() {
    this.router.navigate(["./account"]);
  }
}
