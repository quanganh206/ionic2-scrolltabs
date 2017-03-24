import { Component, ViewChild } from '@angular/core';

import { IScrollTab, ScrollTabsComponent } from '../../components/scrolltabs';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  tabs: IScrollTab[] = [
    {
      name: 'Wallet & Bags'
    },
    {
      name: 'Western wear'
    },
    {
      name: 'Jewellery'
    },
    {
      name: 'Accessories'
    },
    {
      name: 'Cosplay'
    },
  ];
  selectedTab: IScrollTab;
  @ViewChild('scrollTab') scrollTab: ScrollTabsComponent;
  constructor() {
  }

  ionViewDidEnter() {
    this.scrollTab.go2Tab(0);
  }

  tabChange(data: any) {
    this.selectedTab = data.selectedTab;
  }

  /** 
   * Control swipeEvent to make swipe between tabs
  */
  /*swipeEvent($e) {
    console.log('before', $e.direction);
    switch ($e.direction) {
      case 2: // left
        this.scrollTab.nextTab();
        break;
      case 4: // right
        this.scrollTab.prevTab();
        break;
    }
  }*/
}
