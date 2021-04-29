import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NomService } from 'src/app/service/nom.service';
import { Nominee } from '../Nominee';
/**
 * @author Aman
 * @version 1.0
 */
@Component({
  selector: 'app-update-nominee',
  templateUrl: './update-nominee.component.html',
  styleUrls: ['./update-nominee.component.css'],
})
export class UpdateNomineeComponent implements OnInit {
  nomineeId: number;
  nominees: Nominee;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nService: NomService
  ) {}

  ngOnInit() {
    this.nominees = new Nominee();
    this.nomineeId = this.route.snapshot.params['nomineeId'];

    this.nService.getNomineeById(this.nomineeId).subscribe(
      (data) => {
        console.log(data);
        this.nominees = data;
      },
      (error) => console.log(error)
    );
  }
  updateNominee() {
    this.nService.updateNominee(this.nominees).subscribe(
      (res) => {
        console.log(res);
        this.gotoList();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.updateNominee();
  }
  gotoList() {
    this.router.navigate(['./']);
  }
}
