import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NomService } from 'src/app/service/nom.service';
import { Nominee } from '../Nominee';
/**
 * @author Aman
 * @version 1.0
 */
@Component({
  selector: 'app-find-nominee',
  templateUrl: './find-nominee.component.html',
  styleUrls: ['./find-nominee.component.css'],
})
export class FindNomineeComponent implements OnInit {
  nomineeId: number;
  nominees: Nominee;
  constructor(
    private nService: NomService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.nominees = new Nominee();
    this.nomineeId = this.route.snapshot.params['nomineeId'];
    this.nService.getNomineeById(this.nomineeId).subscribe(
      (data) => {
        this.nominees = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  find() {
    this.router.navigate(['/nominee/list']);
  }
}
