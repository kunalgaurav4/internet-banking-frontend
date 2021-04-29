import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BenService } from 'src/app/service/ben.service';
import { Beneficiary } from '../beneficiary';
/**
 * @author Rahul
 * @version 1.0
 */


@Component({
  selector: 'app-update-beneficiary',
  templateUrl: './update-beneficiary.component.html',
  styleUrls: ['./update-beneficiary.component.css']
})
export class UpdateBeneficiaryComponent implements OnInit {
beneficiaryId: number;
beneficiaries: Beneficiary;
  constructor(private route:ActivatedRoute,private router:Router,
    private bService:BenService) { }

  ngOnInit() {
    this.beneficiaries=new Beneficiary();
    this.beneficiaryId=this.route.snapshot.params['beneficiaryId'];

    this.bService.getBeneficiaryId(this.beneficiaryId).subscribe(data=>{
      console.log(data);
      this.beneficiaries=data;
    },error=> console.log(error));
  }
  updateBeneficiary(){
    this.bService.updateBeneficiary(this.beneficiaryId,this.beneficiaries).subscribe(res=>{
      console.log(res);
      this.gotoList();
    },error=>console.log(error));
  }
  onSubmit(){
    this.updateBeneficiary();
  }
  gotoList(){
    this.router.navigate(['/beneficiary']);
  }
}
