export class Transaction {
  public transactionId: number;
  public amount: number;
  public transactionType: string;
  public dateTime: string;
  public transactionStatus: string;
  public transactionRemarks: string;
  public account: Account;
}
export class Account {
  public accountId: number;
}
