import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ReuseItem, ReuseTabCached, ReuseTabNotify, ReuseTitle } from './reuse-tab.interfaces';
import { ReuseTabService } from './reuse-tab.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-reuse-tab',
  templateUrl: './reuse-tab.component.html',
  styleUrls: ['./reuse-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReuseTabComponent implements OnInit {

  // 定义是否允许关闭tab
  @Input()
  public allowClose = true;

  // tab标签list数据
  public list: ReuseItem[] = [];
   // tab标签位置变更通知
  private updatePos$ = new Subject<void>();
  // 当前选中的tab 标签页
  public selected = new FormControl(0);

  constructor(private reuseTabService: ReuseTabService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private route: ActivatedRoute) {
    console.log('This is reuse-tab constructor');
    this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/make-svg/outline/close.svg'));
  }

  private get curUrl(): string {
    return this.reuseTabService.getUrl(this.route.snapshot);
  }

  ngOnInit(): void {
    // tab标签页位置变更通知
    this.updatePos$.pipe(debounceTime(50)).subscribe(() => {
      const url = this.reuseTabService.getUrl(this.route.snapshot);
      const index = this.list.findIndex(w => w.url === url);
      this.selected.setValue(index);
      this.cdr.detectChanges();
    });

    // 订阅路由缓存变更通知
    this.reuseTabService.change.subscribe((res) => {
      switch (res?.active) {
        case 'title':
          return;
        case 'override':
          this.updatePos$.next();
          return;
      }
      this.genList(res);
    });
  }

  // 获取title
  private genTit(title: ReuseTitle): string {
    return title ? title.text : '' as string;
  }

  /**
   * 处理当前不在路由缓存中的路由，把它转化成通用的数据
   * @private
   */
  private genCurItem(): ReuseItem {
    const url = this.curUrl;
    const snapshotTrue = this.reuseTabService.getTruthRoute(this.route.snapshot);
    return {
      url,
      title: this.genTit(this.reuseTabService.getTitle(url, snapshotTrue)),
      closable: this.allowClose && this.reuseTabService.count > 0 && this.reuseTabService.getClosable(url, snapshotTrue),
      active: false,
      last: false,
      index: 0,
    };
  }

  // 获取并处理路由缓存数据
  private genList(notify: ReuseTabNotify | null): void {
    // 获取缓存数据
    const ls = this.reuseTabService.items.map((item: ReuseTabCached, index) => {
      return ({
        url: item.url,
        title: this.genTit(item.title),
        closable: this.allowClose && item.closable && this.reuseTabService.count > 0,
        index,
        active: false,
        last: false
      }) as ReuseItem;
    });
    // 获取当前url
    const url = this.curUrl;
    let addCurrent = ls.findIndex(w => w.url === url) === -1;
    if (notify && notify.active === 'close' && notify.url === url) {
      addCurrent = false;
      let toPos = 0;
      // tslint:disable-next-line:no-non-null-assertion
      const curItem = this.list.find(w => w.url === url)!;
      if (curItem.index === ls.length) {
        toPos = ls.length - 1;
      } else if (curItem.index < ls.length) {
        toPos = Math.max(0, curItem.index);
      }
      this.router.navigateByUrl(ls[toPos].url);
    }
    if (addCurrent) { ls.push(this.genCurItem()); }
    ls.forEach((item, index) => {
      item.index = index;
    });
    if (ls.length === 1) {
      ls[0].closable = false;
    }
    this.list = ls;
    this.cdr.detectChanges();
    this.updatePos$.next();
  }

  // tab标签选择事件
  selectedTabChange(event: MatTabChangeEvent): void {
    const a = this.list[event.index];
    this.router.navigate([a.url]);
  }

  /**
   * 关闭某个标签，并防止事件冒泡
   * @param event click事件，防止冒泡
   * @param index 关闭的标签index
   * @param includeNonCloseable 是否强制关闭
   */
  close(event: Event, index: number, includeNonCloseable: boolean = false): boolean {
    if (event !== null) {
      event.preventDefault();
      event.stopPropagation();
    }
    const item = this.list[index];
    this.reuseTabService.close(item.url, includeNonCloseable);
    this.cdr.detectChanges();
    return false;
  }

}
