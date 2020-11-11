import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from './items/items.component';
import { NoticiasService } from "./domain/noticias.service";
import { ListadoComponent } from './listado/listado.component';
import { VistaDeDetalleComponent } from './vista-de-detalle/vista-de-detalle.component';
import { FavoritosComponent } from './favoritos/favoritos.component';


import { 
    NoticiasState, 
    reducerNoticias, 
    initializeNoticiaState, 
    NoticiasEffects
} from "./domain/noticias-state.model";
import { ActionReducerMap, StoreModule as NgRxStoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";


// redux init
export interface AppState {
    noticias: NoticiasState;
}

const reducers: ActionReducerMap<AppState> = {
    noticias: reducerNoticias
}

const reducersInitialState = {
    noticias: initializeNoticiaState()
}
// fin redux init

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState }),
        EffectsModule.forRoot([NoticiasEffects])
    ],
    declarations: [
        AppComponent,
        
        
        
        
    ],
    providers: [NoticiasService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
