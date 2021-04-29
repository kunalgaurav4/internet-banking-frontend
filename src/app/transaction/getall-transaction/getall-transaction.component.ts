import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/service/transaction.service';
import { Transaction } from '../Transaction';
/**
 * @author Hari Nath
 * @version 1.0
 */
@Component({
  selector: 'app-getall-transaction',
  templateUrl: './getall-transaction.component.html',
  styleUrls: ['./getall-transaction.component.css']
})
export class GetallTransactionComponent implements OnInit {
  transactions: Transaction[];
  transactionId:string="";
  myArray=[];
  constructor(private tService:TransactionService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    this.tService.getTransaction().subscribe(data=>{
      this.transactions=data;
      this.myArray=data;
  })
}
searchByTransactionId(){
  this.transactions=this.myArray.filter((data: { transactionId: { toString: () => string; }; })=>data.transactionId.toString().match(this.transactionId));
}
  reloadData(){
    this.tService.getTransaction().subscribe(data=>{
      this.transactions=data;
      console.log(data)
    });
  }
  findTransaction(transactionId:number){
    this.router.navigate(['transaction/find',transactionId]);
  }
  }
 

