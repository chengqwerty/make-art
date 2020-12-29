import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Menu {
  name: string;
  description?: string;
  target?: string;
  icon?: string;
  link?: string;
  type?: 'group' | 'menu';
  opened?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSub = new BehaviorSubject<boolean>(true);

  private menus: Menu[] = [
    {
      name: '控制面板',
      icon: 'account-svg',
      opened: true,
      children: [
        {
          name: '颜色',
          icon: 'account-svg',
          type: 'group',
          opened: true,
          children: [
            {
              name: '主题颜色',
              icon: 'account-svg',
              link: 'config/color'
            }
          ]
        },

      ]
    }
  ];

  getMenus(): Menu[] {
    return this.menus;
  }

  setMenus(menus: Menu[]): void {
    this.menus = menus;
    this.menuSub.next(true);
  }

}
