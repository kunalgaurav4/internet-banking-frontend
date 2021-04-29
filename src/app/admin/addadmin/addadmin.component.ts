import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminService } from "src/app/service/admin.service";
import { Admin } from "../Admin";
/**
 * @author Gayathri
 * @version 1.0
 */
@Component({
  selector: "app-addadmin",
  templateUrl: "./addadmin.component.html",
  styleUrls: ["./addadmin.component.css"],
})
export class AddadminComponent implements OnInit {
  adminForm: FormGroup;
  admins: Admin = new Admin();
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private aService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      adminName: ["", Validators.required],
      password: ["", Validators.required],
      role: 1,
      adminContact: ["", [Validators.required,Validators.minLength(10)]],
      adminEmailId: ["", [Validators.required,Validators.email]],
    });
  }
  save() {
    this.aService.createAdmin(this.adminForm.value).subscribe(
      (data) => {
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(["/admin"]);
  }
}
