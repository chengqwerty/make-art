import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // tslint:disable-next-line:max-line-length
    this.matIconRegistry.addSvgIcon('account-svg', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/make-svg/fill/account-book.svg'));
  }

  ngOnInit(): void {
  }

}
