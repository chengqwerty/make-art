import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.scss']
})
export class XComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  skipToY(): void {
    this.router.navigate(['../y'], {relativeTo: this.route});
  }

  skipToZ(): void {
    this.router.navigate(['../z'], {relativeTo: this.route});
  }

}
