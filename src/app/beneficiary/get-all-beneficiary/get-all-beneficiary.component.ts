import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BenService } from 'src/app/service/ben.service';
import { Beneficiary } from '../beneficiary';
/**
 * @author Rahul
 * @version 1.0
 */
@Component({
  selector: 'app-get-all-beneficiary',
  templateUrl: './get-all-beneficiary.component.html',
  styleUrls: ['./get-all-beneficiary.component.css']
})
export class GetAllBeneficiaryComponent implements OnInit {
  beneficiaries:Beneficiary[];
  benArray=[];
  myArray=[];
  bId:string="";
  constructor(private bService:BenService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    this.bService.getBeneficiary().subscribe(data=>{
      this.benArray=data;
      this.myArray=data;
  })
}
searchByBeneficiaryId(){
  this.beneficiaries=this.myArray.filter((data: { beneficiaryId: { toString: () => string; }; })=>data.beneficiaryId.toString().match(this.bId));
}
  reloadData(){
    this.bService.getBeneficiary().subscribe(data=>{
      this.beneficiaries=data;
      console.log(data)
    });
  }
  findBeneficiary(beneficiaryId:number){
    this.router.navigate(['beneficiary/find',beneficiaryId]);
  }
  deleteBeneficiary(beneficiaryId:number){
    this.bService.deleteBeneficiary(beneficiaryId).subscribe(
      (data:Beneficiary[])=>{
        console.log(data);
        this.reloadData();
      },
    error=>console.log(error));
  }
  updateBeneficiary(beneficiaryId:number){
    this.router.navigate(['beneficiary/update',beneficiaryId]);
  }
}
