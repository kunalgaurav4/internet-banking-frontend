import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from '../Admin';

/**
 * @author Gayathri
 * @version 1.0
 */

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {
  customerId: number;
  admins: Admin;

  constructor(private route:ActivatedRoute,private router:Router,
    private aService:AdminService) { }

  ngOnInit(): void {
    this.admins=new Admin();
    this.customerId=this.route.snapshot.params['customerId'];

    this.aService.getAdminById(this.customerId).subscribe(data=>{
      console.log(data);
      this.admins=data;
    },error=> console.log(error));
  }
  updateAdmin(){
    this.aService.updateAdmin(this.customerId,this.admins).subscribe(res=>{
      console.log(res);
      this.gotoList();
    },error=>console.log(error));
  }
  onSubmit(){
    this.updateAdmin();
  }
  gotoList(){
    this.router.navigate(['/admin']);
  }
}

