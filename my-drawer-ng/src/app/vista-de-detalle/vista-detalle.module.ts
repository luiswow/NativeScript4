import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { VistaDetalleRoutingModule } from "./vista-detalle-routing-module";
import { VistaDeDetalleComponent } from "./vista-de-detalle.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        VistaDetalleRoutingModule
    ],
    declarations: [
        VistaDeDetalleComponent
    ],
    
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VistaDetalleModule { }