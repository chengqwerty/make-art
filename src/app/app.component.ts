import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'art';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // tslint:disable-next-line:max-line-length
    this.matIconRegistry.addSvgIcon('account-svg', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/make-svg/fill/account-book.svg'));
    this.matIconRegistry.addSvgIcon('up', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/make-svg/fill/account-book.svg'));
  }

}
