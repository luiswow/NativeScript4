import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import {NativeScriptFormsModule } from "nativescript-angular/forms";

import { ListadoRoutingModule } from "./listado-routing-module";
import { ListadoComponent } from "./listado.component";
import { listadoFormComponent } from "./listado-form-component";

import { ListadoEdicionDirective } from './listadoEdicion.validator';
@NgModule({
    imports: [
        NativeScriptCommonModule,
        ListadoRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ListadoComponent,
        listadoFormComponent,
        ListadoEdicionDirective
    ],
    
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListadoModule { }