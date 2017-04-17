# ionic2-scrolltabs

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=quanganh%40aiti%2ecom%2evn&lc=VN&item_name=Ionic2%20Calendar&item_number=ionic2calendar&no_note=0&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest)

# Setup and Running 
- npm install -g ionic
- git clone https://github.com/quanganh206/ionic2-scrolltabs
- npm install 
- npm build

# Using 
- Copy scrolltabs folder to components folder
- in app.module.ts 

```
import { ScrollTabsComponent } from '../components/scrolltabs';

@NgModule({
  declarations: [
    ...
    ScrollTabsComponent,
    ...
  ],
})
```
- in [page].module.ts (lazy-loading)

```
import { NgModule } from '@angular/core';
import { HelloIonicPage } from './hello-ionic';
import { IonicPageModule } from 'ionic-angular';
import { ScrollTabsComponentModule } from '../../components/scrolltabs';

@NgModule({
	declarations: [
		HelloIonicPage
	],
	imports: [
        ScrollTabsComponentModule,
		IonicPageModule.forChild(HelloIonicPage)
	],
	entryComponents: [
		HelloIonicPage
	]
})
export class HelloIonicPageModule {}
```

- Push component to anywhere you want to display it

```
<scroll-tabs #scrollTab [tabs]="tabs" (onSelectedTab)="tabChange($event)"></scroll-tabs>
```

# Environment 
```
Cordova CLI: 6.5.0 
Ionic Framework Version: 2.3.0
Ionic CLI Version: 2.2.1
Ionic App Lib Version: 2.2.0
Ionic App Scripts Version: 1.1.4
ios-deploy version: 1.9.0 
ios-sim version: 5.0.8 
OS: macOS Sierra
Node Version: v7.6.0
Xcode version: Xcode 8.2.1 Build version 8C1002
```

# Update 
- 24th Mar 2017: publish
- 05th Apr 2017: fix Scroll element issue (thanks @Abhith for your contribution)
- 18th Apr 2017: Update lazy loading