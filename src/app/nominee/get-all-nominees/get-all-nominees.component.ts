import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NomService } from 'src/app/service/nom.service';
import { Nominee } from '../Nominee';
/**
 * @author Aman
 * @version 1.0
 */
@Component({
  selector: 'app-get-all-nominees',
  templateUrl: './get-all-nominees.component.html',
  styleUrls: ['./get-all-nominees.component.css'],
})
export class GetAllNomineesComponent implements OnInit {
  nId: string = '';
  nominees: Nominee[];
  nomArray = [];
  myArray = [];
  items = [];
  constructor(private nService: NomService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
    this.nService.getNominee().subscribe((data) => {
      this.nomArray = data;
      this.myArray = data;
      this.items = data;
    });
  }
  reloadData() {
    this.nService.getNominee().subscribe((data) => {
      this.nominees = data;
      console.log(data);
    });
  }
  findNominee(nomineeId: number) {
    this.router.navigate(['nominee/find', nomineeId]);
  }
  deleteNominee(nomineeId: number) {
    this.nService.deleteNominee(nomineeId).subscribe(
      (data: Nominee[]) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
  updateNominee(nomineeId: number) {
    this.router.navigate(['nominee/update', nomineeId]);
  }

  searchByNomId() {
    this.nominees = this.myArray.filter(
      (data: { nomineeId: { toString: () => string } }) =>
        data.nomineeId.toString().match(this.nId)
    );
  }
  onChangePage(nominees: Nominee[]) {
    // update current page of items
    this.nominees = nominees;
  }
}
