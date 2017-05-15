import { Component, ViewChild, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Scroll } from 'ionic-angular';

/*
  Generated class for the Scrolltabs component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'scroll-tabs',
  templateUrl: 'scrolltabs.html'
})
export class ScrollTabsComponent implements OnChanges {
  @Input('tabs') tabs;
  @ViewChild('scrollTab') scroll: Scroll;
  @Output() onSelectedTab = new EventEmitter();
  position: number = 0;
  currentTab: any;
  constructor() {

  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    // Todo: update necessary info
  }

  ngAfterViewInit() {
    if (this.tabs) {
      if (this.tabs.length > 0) {
        this.tabs.forEach(tab => {
          if (tab.selected) {
            this.selectTab(tab);
          }
        });
      }
    }
  }

  tabChange(tab) {
    this.tabs.forEach(tab => {
      if (tab.selected) {
        tab.selected = false;
      }
    });
    tab.selected = true;
    this.currentTab = tab;
    this.selectTab(tab);
  }

  private selectTab(tab) {
    var prevPosition = this.position | 0;
    var pos = -1;
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        pos = i;
        this.position = i;
      }
    }

    setTimeout(() => {
      const widthOfItem = 63;
      let scrollTo = 0;
      if (pos > 0 && pos > prevPosition) {
        scrollTo = pos * widthOfItem;
      } else if (pos > 0 && pos < prevPosition) {
        scrollTo = (prevPosition * widthOfItem) - ((prevPosition - pos) * widthOfItem);
      } else if (pos === prevPosition) {
        scrollTo = pos * widthOfItem;
      } else if (pos === 0) {
        scrollTo = 0;
      }
      let content = this.scroll._scrollContent.nativeElement;
      content.scrollLeft = scrollTo;
      this.onSelectedTab.emit({ selectedTab: tab });
    }, 150);
  }

  currentIndex(): number {
    return this.position;
  }

  go2Tab(pos: number) {
    if (pos >= 0 && pos < this.tabs.length) {
      this.tabChange(this.tabs[pos]);
    }
  }

  nextTab(): void {
    if (this.position < (this.tabs.length - 1)) {
      this.tabChange(this.tabs[this.position + 1])
    }
  }
  prevTab(): void {
    if (this.position > 0) {
      this.tabChange(this.tabs[this.position - 1])
    }
  }
}
