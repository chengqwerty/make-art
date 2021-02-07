import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.scss']
})
export class YComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  skipToX(): void {
    this.router.navigate(['../x'], {relativeTo: this.route});
  }

  skipToZ(): void {
    this.router.navigate(['../z'], {relativeTo: this.route});
  }

}
