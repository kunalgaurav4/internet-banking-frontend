import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../Customer';
/**
 * @author Dileep
 * @version 1.0
 */
@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css'],
})
export class FindCustomerComponent implements OnInit {
  customerId: number;
  customers: Customer;

  constructor(
    private cService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customers = new Customer();
    this.customerId = this.route.snapshot.params['customerId'];
    this.cService.getCustomerById(this.customerId).subscribe(
      (data) => {
        this.customers = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  find() {
    this.router.navigate(['./']);
  }
}
