import { User } from "../user/User";

export class Account {
  public accountId: number;
  public balance: number;
  public accountType: number;
  public interestRate: number;
  public user: User;
  public customer: Customer;
  public transaction: Transaction;
}


export class Customer {
  public customerName: String;
}

export class Transaction {
  public amount: number;
}
