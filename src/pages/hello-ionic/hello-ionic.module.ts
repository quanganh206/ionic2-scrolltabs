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
