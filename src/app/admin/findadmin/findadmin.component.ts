import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Admin } from '../Admin';
/**
 * @author Gayathri
 * @version 1.0
 */

@Component({
  selector: 'app-findadmin',
  templateUrl: './findadmin.component.html',
  styleUrls: ['./findadmin.component.css']
})
export class FindadminComponent implements OnInit {
  customerId:number;
  admins: Admin;

  constructor(private aService: AdminService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.admins=new Admin();
    this.customerId=this.route.snapshot.params['customerId'];
    this.aService.getAdminById(this.customerId).subscribe(data => {
      this.admins = data;
      console.log(data);
  },error=>console.log(error));
}
find(){
  this.router.navigate(['/admin']);
} 
}

