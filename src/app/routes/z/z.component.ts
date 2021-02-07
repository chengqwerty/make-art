import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-z',
  templateUrl: './z.component.html',
  styleUrls: ['./z.component.scss']
})
export class ZComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  skipToX(): void {
    this.router.navigate(['../x'], {relativeTo: this.route});
  }

  skipToY(): void {
    this.router.navigate(['../y'], {relativeTo: this.route});
  }

}
