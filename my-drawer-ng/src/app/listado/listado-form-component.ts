import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "listadoForm",
    moduleId: module.id,
    template: `
    <FlexboxLayout flexDirection="row">
    <TextField #texto="ngModel" [(ngModel)]="textFieldValue"
    hint="Ingresar texto..." required listadoEdicion="4">
    </TextField>
    <Label *ngIf="texto.hasError('required')" text="*"></Label>
    <Label *ngIf="!texto.hasError('required')
    && texto.hasError('listadoEdicion')" text="4+">
    </Label>
    </FlexboxLayout>
    <Button text="Buscar!" (tap)="onButtonTap()" *ngIf="texto.valid"></Button> `
})

export class listadoFormComponent implements OnInit {
    textFieldValue: string = "";
    @Output() searchListado: EventEmitter<string> = new EventEmitter();
    @Input() inicialListado: string;
    
    ngOnInit(): void {
        this.textFieldValue = this.inicialListado;
    }

    onButtonTap(): void {
        console.log(this.textFieldValue);
        if (this.textFieldValue.length > 2) {
            this.searchListado.emit(this.textFieldValue);
        }
    }
}