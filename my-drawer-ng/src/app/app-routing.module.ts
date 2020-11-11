import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "items", loadChildren: () => import("~/app/items/items.module").then((m) => m.ItemsModule)},
    { path: "listado", loadChildren: () => import("~/app/listado/listado.module").then((m) => m.ListadoModule)},
    { path: "detalle", loadChildren: () => import("~/app/vista-de-detalle/vista-detalle.module").then((m) => m.VistaDetalleModule)},
    { path: "favoritos", loadChildren: () => import("~/app/favoritos/favoritos.module").then((m) => m.FavoritosModule)}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
