import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { Routes } from "@angular/router";
import { ItemsComponent } from './items.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
  { path: "", component: ItemsComponent }
];

@NgModule({
  declarations: [],
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemsRoutingModule { }
