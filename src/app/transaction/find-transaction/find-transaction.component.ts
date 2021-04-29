import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../Transaction';
import { TransactionService } from 'src/app/service/transaction.service';
/**
 * @author Hari Nath
 * @version 1.0
 */
@Component({
  selector: 'app-find-transaction',
  templateUrl: './find-transaction.component.html',
  styleUrls: ['./find-transaction.component.css']
})
export class FindTransactionComponent implements OnInit {
  transactionId: number;
  transactions: Transaction;
  constructor(private tService: TransactionService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.transactions=new Transaction();
    this.transactionId=this.route.snapshot.params['transactionId'];
    this.tService.getTransactionById(this.transactionId).subscribe(data => {
      this.transactions = data;
      console.log(data);
  }, error=>console.log(error));
}
find(){
  this.router.navigate(['/transaction']);

  }

}
