import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { EventData } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { View, Color, colorProperty, backgroundColorProperty } from 'tns-core-modules/ui/core/view';

import { GestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { whiteSpaceProperty } from 'tns-core-modules/ui/text-base';
import { getCurrencySymbol } from '@angular/common';
import * as Toast from 'nativescript-toasts';
@Component({
  selector: 'ns-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  resultadosListado: Array<string>;

  @ViewChild("layout", { static: false }) layout: ElementRef;

  constructor(private router: Router, private routerExtensions: RouterExtensions, private noticias: NoticiasService) { }

  ngOnInit(): void {
    /*
    this.noticias.agregar("hola");
    this.noticias.agregar("hola2");
    this.noticias.agregar("hola3");
    */
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onItemTap(x): void {
    console.dir(x);
    this.onNavItemTap('/detalle');
    console.log("touch listado")
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });

    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }

  buscarListado(s: string) {

    console.dir("buscarListado" + s);
    this.noticias.buscar(s).then((r: any) => {
      console.log("resultados buscarListado: " + JSON.stringify(r));
      this.resultadosListado = r;
    }, (e) => {
      console.log("error buscarAhora " + e);
      Toast.show({ text: "Error en la búsqueda", duration: Toast.DURATION.SHORT });
    });

  }

  doLater(fn) { setTimeout(fn, 1000); }
  masInfo(args: EventData) {
    let button = args.object as Button;
    //console.log("hello");
    this.doLater(() =>
      dialogs.action("Mensaje", "Cancelar!", ["America", "Europa"])
        .then((result) => {
          console.log("resultado: " + result);
          if (result === "Opcion1") {
            this.doLater(() =>
              dialogs.alert({
                title: "mas info de america ",
                message: "esto es america",
                okButtonText: "salir"
              }).then(() => console.log("Cerrado america!")));
          } else if (result === "Opcion2") {
            this.doLater(() =>
              dialogs.alert({
                title: "europa",
                message: "esto es europa",
                okButtonText: "salir"
              }).then(() => console.log("Cerrado europa!")));
          }
        }));
  }

  reserva(args: EventData) {
    let button = args.object as Button;
    //console.log("hello");
    this.doLater(() =>
      dialogs.alert({
        title: "reserva",
        message: "reserve aqui",
        okButtonText: "salir"
      }).then(() => console.log("boton reserva")));
  }

  onLongPress(args: GestureEventData) {
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);

    const grid = <GridLayout>args.object;
    //
    grid.rotate = 0;

    grid.animate({
      rotate: 360,
      duration: 2000,



    });

    let button = args.object as Button;
    //console.log("hello");
    this.doLater(() =>
      dialogs.action("Mensaje", "Cancelar!", ["archivar", "borrar"])
        .then((result) => {
          console.log("resultado: " + result);
          if (result === "archivar") {
            this.doLater(() =>
              dialogs.alert({
                title: "archivar ",
                message: "archivar",
                okButtonText: "salir"
              }).then(() => console.log("Cerrado archivar!")));
          } else if (result === "borrar") {
            this.doLater(() =>
              dialogs.alert({
                title: "borrar",
                message: "borrar",
                okButtonText: "salir"
              }).then(() => console.log("Cerrado borrar!")));
          }
        }));
  }
}
