import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { VistaDeDetalleComponent } from "./vista-de-detalle.component";

const routes: Routes = [
    { path: "", component: VistaDeDetalleComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class VistaDetalleRoutingModule { }