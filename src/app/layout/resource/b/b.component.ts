import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('This is b component.');
  }

  ngOnInit(): void {
  }

  skipToA(): void {
    this.router.navigate(['../a'], {relativeTo: this.route});
  }

  skipToC(): void {
    this.router.navigate(['../c'], {relativeTo: this.route});
  }

}
