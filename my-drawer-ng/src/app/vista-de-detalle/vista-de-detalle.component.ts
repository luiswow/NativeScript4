import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  selector: 'ns-vista-de-detalle',
  templateUrl: './vista-de-detalle.component.html',
  styleUrls: ['./vista-de-detalle.component.css']
})
export class VistaDeDetalleComponent implements OnInit {
  resultados: Array<string> = []; 
  constructor(private router: Router, private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
    this.resultados[0] = 'usuario1';
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  onItemTap(x): void {
    console.dir(x);
    
  }

  onPull(e) {
    console.log(e);
    const pullRefresh = e.object;
    setTimeout(() => {
    this.resultados.push("xxxxxxx");
    pullRefresh.refreshing = false;
    }, 2000);
   } 
   

}
