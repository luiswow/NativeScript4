import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";


@Directive({
    selector: "[listadoEdicion]",
    providers: [{
        provide: NG_VALIDATORS, useExisting: ListadoEdicionDirective,
        multi: true
    }]
})
export class ListadoEdicionDirective implements Validator {
    @Input() listadoEdicion: string;
    constructor() {
        //
    }
    validate(control: AbstractControl): { [key: string]: any } {
        return !control.value || control.value.length >= (this.listadoEdicion
            || 2) ? null : { listadoEdicion: true };
    }
} 
