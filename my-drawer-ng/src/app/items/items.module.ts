import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    NativeScriptCommonModule,
    ItemsRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ItemsModule { }
