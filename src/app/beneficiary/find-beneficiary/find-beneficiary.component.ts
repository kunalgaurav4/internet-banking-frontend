import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BenService } from 'src/app/service/ben.service';
import { Beneficiary } from '../beneficiary';
/**
 * @author Rahul
 * @version 1.0
 */

@Component({
  selector: 'app-find-beneficiary',
  templateUrl: './find-beneficiary.component.html',
  styleUrls: ['./find-beneficiary.component.css']
})
export class FindBeneficiaryComponent implements OnInit {
  beneficiaryId:number;
  beneficiaries:Beneficiary ;
  constructor(private bService: BenService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.beneficiaries=new Beneficiary();
    this.beneficiaryId=this.route.snapshot.params['beneficiaryId'];
    this.bService.getBeneficiaryId(this.beneficiaryId).subscribe(data => {
      this.beneficiaries = data;
      console.log(data);
  },error=>console.log(error));
}
find(){
  this.router.navigate(['/beneficiary']);
} 
}
