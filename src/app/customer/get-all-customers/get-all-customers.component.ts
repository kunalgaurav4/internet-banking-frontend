import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../Customer';
/**
 * @author Dileep
 * @version 1.0
 */
@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css'],
})
export class GetAllCustomersComponent implements OnInit {
  cId: string = '';
  customers: Customer[];
  cusArray = [];
  myArray = [];
  items = [];
  constructor(private cService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
    this.cService.getCustomer().subscribe((data) => {
      this.cusArray = data;
      this.myArray = data;
      this.items = data;
    });
  }
  reloadData() {
    this.cService.getCustomer().subscribe((data) => {
      this.customers = data;
      console.log(data);
    });
  }
  findCustomer(customerId: number) {
    this.router.navigate(['customer/find', customerId]);
  }
  deleteCustomer(customerId: number) {
    this.cService.deleteCustomer(customerId).subscribe(
      (data: Customer[]) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
  updateCustomer(customerId: number) {
    this.router.navigate(['customer/update', customerId]);
  }

  searchBycustomerId() {
    this.customers = this.myArray.filter(
      (data: { customerId: { toString: () => string } }) =>
        data.customerId.toString().match(this.cId)
    );
  }
  onChangePage(customers: Customer[]) {
    // update current page of items
    this.customers = customers;
  }
}
