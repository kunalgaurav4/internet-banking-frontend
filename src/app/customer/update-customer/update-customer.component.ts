import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../Customer';
/**
 * @author Dileep
 * @version 1.0
 */
@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit {
  customerId: number;
  customers: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customers = new Customer();
    this.customerId = this.route.snapshot.params['customerId'];

    this.cService.getCustomerById(this.customerId).subscribe(
      (data) => {
        console.log(data);
        this.customers = data;
      },
      (error) => console.log(error)
    );
  }
  updateCustomer() {
    this.cService.updateCustomer(this.customers).subscribe(
      (res) => {
        console.log(res);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.updateCustomer();
  }
  gotoList() {
    this.router.navigate(['./']);
  }
}
