import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from '../Admin';
/**
 * @author Gayathri
 * @version 1.0
 */
@Component({
  selector: 'app-getalladmin',
  templateUrl: './getalladmin.component.html',
  styleUrls: ['./getalladmin.component.css']
})
export class GetalladminComponent implements OnInit {
  customerId:string="";
  admins: Admin[];
  

  constructor(private aService:AdminService,private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
   
  }
  
  reloadData(){
    this.aService.getAdmin().subscribe((data:any)=>{
      this.admins=data;
      console.log(data)
    });
  }
  findAdmin(customerId:number){
    this.router.navigate(['admin/find',customerId]);
  }
  deleteAdmin(customerId:number){
    this.aService.deleteAdmin(customerId).subscribe(
      (data:Admin[])=>{
        console.log(data);
        this.reloadData();
      },
      (error: any)=>console.log(error));
  }
  updateAdmin(customerId:number){
    this.router.navigate(['admin/update',customerId]);
  }
}
  
  