import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nominee } from 'src/app/nominee/Nominee';
import { AccService } from 'src/app/service/acc.service';
import { NomService } from 'src/app/service/nom.service';
import { Account } from '../Account';
/**
 * @author Kunal
 * @version 1.0
 */
@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.component.html',
  styleUrls: ['./find-account.component.css'],
})
export class FindAccountComponent implements OnInit {
  accountId: number;
  accounts: Account;
  nominees: Nominee;
  nomineeId: number;
  constructor(
    private aService: AccService,
    private nService: NomService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.accounts = new Account();
    this.accountId = this.route.snapshot.params['accountId'];
    this.aService.getAccountById(this.accountId).subscribe(
      (data) => {
        this.accounts = data;
        console.log(data);
      },

      (error) => console.log(error)
    );
    this.nService.getNomineeById(this.nomineeId).subscribe(
      (data) => {
        this.nominees = data;
        console.log(data);
      },

      (error) => console.log(error)
    );
  }
  find() {
    this.router.navigate(['./account/list']);
  }
}
