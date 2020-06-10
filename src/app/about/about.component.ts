import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  goals: any;

  //dependancy injection
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    this.route.params.subscribe((res) => console.log(res.id));
  }

  ngOnInit(): void {
    this._data.goal.subscribe((res) => (this.goals = res));
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
