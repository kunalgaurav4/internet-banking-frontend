import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NomService } from 'src/app/service/nom.service';
import { Nominee } from '../Nominee';
/**
 * @author Aman
 * @version 1.0
 */
@Component({
  selector: 'app-add-nominee',
  templateUrl: './add-nominee.component.html',
  styleUrls: ['./add-nominee.component.css'],
})
export class AddNomineeComponent implements OnInit {
  nomForm: FormGroup;
  nominees: Nominee = new Nominee();
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private nService: NomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nomForm = this.fb.group({
      //nomineeId:['',Validators.required],
      name: ['', Validators.required],
      govtId: ['', Validators.required],
      govtIdType: ['', Validators.required],
      phoneNo: ['', Validators.required],
      relation: ['', Validators.required],
      account: new FormGroup({
        accountId: new FormControl('', Validators.required),
      }),
    });
  }
  // newNominee():void{
  //   this.submitted=false;
  //   this.nominees=new Nominee();
  // }

  save() {
    this.nService.createNominee(this.nomForm.value).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  // onSubmit(){
  //   this.submitted=true;
  //   this.save();
  // }
  gotoList() {
    this.router.navigate(['/nominee/list']);
  }
}
