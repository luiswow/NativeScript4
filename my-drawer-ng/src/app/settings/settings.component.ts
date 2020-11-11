import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
//import * as Toast from 'nativescript-toasts';
import { PromptOptions, PromptResult } from "tns-core-modules/ui/dialogs";

import * as appSettings from "tns-core-modules/application-settings";
@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    nombreUsuario: string;
    correoUsuario: string;
    constructor() {
        // Use the component constructor to inject providers.
        this.nombreUsuario = "Nombre Usuario";
        this.correoUsuario = "Email";
    }


    doLater(fn) { setTimeout(fn, 1000); }

    ngOnInit(): void {

        if (appSettings.getString("userName") == undefined) {
            appSettings.setString("userName", "Usuario");
        }
         /*
        this.doLater(() =>
            dialogs.action("Mensaje", "Cancelar!", ["Opcion1", "Opcion2"])
                    .then((result) => {
                                        console.log("resultado: " + result);
                                        if (result === "Opcion1") {
                                            this.doLater(() =>
                                                dialogs.alert({
                                                    title: "Titulo 1 ",
                                                    message: "mje 1",
                                                    okButtonText: "btn 1"
                                                }).then(()  => console.log("Cerrado 1!")));
                                        } else if (result === "Opcion2") {
                                            this.doLater(() =>
                                                dialogs.alert({
                                                    title: "Titulo 2",
                                                    message: "mje 2",
                                                    okButtonText: "btn 2"
                                                }).then(() => console.log("Cerrado 2!")));
                                        }
        }));
       */
        
        
        //const toastOptions: Toast.ToastOptions = {text: "Hello World", duration: Toast.DURATION.SHORT};
        //this.doLater(() => Toast.show(toastOptions));
       
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onButtonUsuario() {
        let options: PromptOptions = {
            title: "Nombre de usuario",
            inputType: dialogs.inputType.text,
            defaultText: "username",
            okButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            cancelable: true
        }

        dialogs.prompt(options).then((result: PromptResult) => {
            if (result.result === true) {
                if(result.text.length > 0) {
                    appSettings.setString("userName", result.text);
                    console.log("userName: " + appSettings.getString("userName"));
                    this.nombreUsuario = result.text;
                }
            }
        })
    }

    onButtonCorreo() {
        let options: PromptOptions = {
            title: "Correo de usuario",
            inputType: dialogs.inputType.text,
            defaultText: "username@mail.com",
            okButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            cancelable: true
        }

        dialogs.prompt(options).then((result: PromptResult) => {
            if (result.result === true) {
                if(result.text.length > 0) {
                    appSettings.setString("userMail", result.text);
                    console.log("userMail: " + appSettings.getString("userMail"));
                    this.correoUsuario = result.text;
                }
            }
        })
    }
}
