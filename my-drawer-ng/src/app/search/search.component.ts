import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";
import { Color } from "tns-core-modules/color";
import { View, layout } from "tns-core-modules/ui/core/view";
//import * as Toast from 'nativescript-toasts';
import { Noticia} from "../models/noticia.model";

import { Store } from "@ngrx/store";
import { AppState } from "../app.module";
import { NuevaNoticiaAction } from "../domain/noticias-state.model";

import { GestureEventData } from "tns-core-modules/ui/gestures";
import * as SocialShare from "nativescript-social-share";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    //providers: [NoticiasService]
})
export class SearchComponent implements OnInit {
    resultados: Array<string>;
    fav: Array<string>;
    @ViewChild("layout", { static: false }) layout: ElementRef;

    //
    noticia: Noticia;
    resultadosNoticias: Array<Noticia>;


    constructor(private noticias: NoticiasService, private store: Store<AppState>) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        /*
        this.noticias.agregar("hola");
        this.noticias.agregar("hola2");
        this.noticias.agregar("hola3");*/
        this.store.select((state) => state.noticias.noticiaSugerida)
        .subscribe((data) => {
            const ns = data;
            if (ns != null) {
                //Toast.makeText("Sugerimos leer: " + ns.titulo, "short").show();
                console.log("sugerimos leer" + ns.titulo);
            }
        })
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
        console.dir(x);
        console.log("touch");
        this.store.dispatch(new NuevaNoticiaAction(this.resultadosNoticias[x.index]));
        }


    buscarAhora(s: string) {
        console.dir("buscarListado" + s);
        this.noticias.buscar(s).then((r: any) => {
            console.log("resultados buscarAhora: " + JSON.stringify(r));
            this.resultados = r;
        }, (e) => {
            console.log("error buscarAhora " + e);
            //Toast.show({ text: "Error en la búsqueda", duration: Toast.DURATION.SHORT });
        });
    }

    //
    onTap(event, x: Noticia) {

        console.dir("tabfav" + event);
        console.log(x.favorita);
        if (x.favorita === false) {
            x.favorita = true;
            this.noticias.postFavorita(x);
            
        } else {
            x.favorita = false;
            this.noticias.deleteFavorita(x);
            
        }
        console.log(x.favorita);
    }

    buscarNoticia(n: string) {
        console.dir("buscarNoticia: " + n);
        this.noticias.bucarNoticia(n).then((r: any) => {
            console.log("Resultados buscarNoticia: " + JSON.stringify(r));
            this.resultadosNoticias = r;
        }, (e) => {
            console.log("ERROR buscarNoticia: " + e);
            
        });
    }

    onLongPress(s): void {
        console.log(s);
        SocialShare.shareText(s, "Asunto: compartido desde el curos!");
    }
    onButtonTap(s){
        console.log(s);
        SocialShare.shareText(s, "Asunto: compartido desde el curos!");
    }

}
