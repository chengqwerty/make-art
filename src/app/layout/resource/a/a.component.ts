import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('This is a component.');
  }

  ngOnInit(): void {
  }

  skipToB(): void {
    this.router.navigate(['../b'], {relativeTo: this.route});
  }

  skipToC(): void {
    this.router.navigate(['../c'], {relativeTo: this.route});
  }

  skipToLayout(): void {
    this.router.navigate(['../../../structure'], {relativeTo: this.route});
  }

}
