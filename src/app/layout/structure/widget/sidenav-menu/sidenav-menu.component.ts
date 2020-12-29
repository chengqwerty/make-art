import { Component, OnInit } from '@angular/core';
import { Menu, MenuService } from '../../../../core/service/menu.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  public menus: Menu[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menus = this.menuService.getMenus();
  }

}
