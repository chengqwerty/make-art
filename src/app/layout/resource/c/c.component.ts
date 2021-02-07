import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('This is c component.');
  }

  ngOnInit(): void {
  }

  skipToA(): void {
    this.router.navigate(['../a'], {relativeTo: this.route});
  }

  skipToB(): void {
    this.router.navigate(['../b'], {relativeTo: this.route});
  }

}
