import { Injectable } from '@angular/core';
import { getJSON, request } from "tns-core-modules/http";

//
import { Noticia } from "../models/noticia.model";

const sqlite = require("nativescript-sqlite");
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  api: string = "  https://544dfc8954de.ngrok.io";
  constructor() {
    this.getDB((db) => {
      console.dir(db);
      db.each("select * from logs",
        (err, fila) => console.log("Fila: ", fila),
        (err, totales) => console.log("Filas totales", totales)
      );
    }, () => console.log("Error on getDB"));
  }


  getDB(fnOk, fnError) {
    return new sqlite("my_db_logs2", (err, db) => {
      if (err) {
        console.error("Error al abrir DB!", err);
      } else {
        console.log("BD abierta: ", db.isOpen() ? "Si" : "No");
        db.execSQL("CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT)")
          .then((id) => {
            console.log("CREATE TABLE OK");
            fnOk(db);
          }, (error) => {
            console.log("CREATE TABLE ERROR", error);
            fnError(error);
          });
      }
    });
  }
  agregar(s: string) {
    return request({
      url: this.api + "/favs",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        nuevo: s
      })
    });
  }

  favs() {
    return getJSON(this.api + "/favs");
  }

  buscar(s: string) {
    this.getDB((db) => {
      db.execSQL("INSERT INTO logs (texto) VALUES (?)", [s],
        (err, id) => console.log("Nuevo id: ", id)
      );
    }, () => console.log("Error on buscarDB"));

    return getJSON(this.api + "/get?q=" + s)
  }

  //
  postFavorita(n: Noticia) {
    return request({
      url: this.api + "/favs",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        nuevo: n
      })
    })
  }

  deleteFavorita(n: Noticia) {
    return request({
      url: this.api + "/favs",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify({
        favorita: n
      })
    })
  }


  bucarNoticia(n: string) {
    this.buscar(n);

    return getJSON(this.api + "/news?q=" + n);
  }

}

