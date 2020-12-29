import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../core/service/menu.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

}
