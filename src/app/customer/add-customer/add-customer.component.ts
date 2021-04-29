import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerService } from "src/app/service/customer.service";
import { Customer } from "../Customer";
/**
 * @author Dileep
 * @version 1.0
 */
@Component({
  selector: "app-add-customer",
  templateUrl: "./add-customer.component.html",
  styleUrls: ["./add-customer.component.css"],
})
export class AddCustomerComponent implements OnInit {
  cusForm: FormGroup;
  customers: Customer = new Customer();
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private cService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cusForm = this.fb.group({
      customerName: ["", Validators.required],
      age: ["", Validators.required],
      emailId: ["", [Validators.required,Validators.email]],
      phoneNo: ["", [Validators.required,Validators.minLength(10)]],
      gender: ["", Validators.required],
      password: ["", Validators.required],
      role: 0,
    });
  }
  

  save() {
    this.cService.createCustomer(this.cusForm.value).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }


  gotoList() {
    this.router.navigate(["/login"]);
  }
}
