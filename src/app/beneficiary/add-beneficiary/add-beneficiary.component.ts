import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BenService } from 'src/app/service/ben.service';
import { Beneficiary } from '../beneficiary';
/**
 * @author Rahul
 * @version 1.0
 */
@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  benForm: FormGroup;
  beneficiaries:Beneficiary=new Beneficiary();
  submitted=false;
  constructor(private fb:FormBuilder, private bService:BenService,private router: Router) { }

  ngOnInit(): void {
    this.benForm=this.fb.group({
    //beneficiaryId:['',Validators.required],
    beneficiaryName:['',Validators.required],
    beneficiaryAccNo:['',Validators.required],
    ifsc:['',Validators.required],
    accountType:['',Validators.required],
    account:new FormGroup({
      accountId:new FormControl('',Validators.required)
    })
  })
}
 
  save(){
    this.bService.createBeneficiary(this.benForm.value).subscribe(data=>{
      this.gotoList();
    },
    error=>console.log(error));
  }
  gotoList(){
    this.router.navigate(['/beneficiary']);
  }
}
