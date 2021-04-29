export class Beneficiary {
    public beneficiaryId:number;
    public beneficiaryName:string;
    public beneficiaryAccNo:number;
    public ifsc:string;
    public accountType:string;
    public account:Account;
}
export class Account{
  accountId:number;
}
