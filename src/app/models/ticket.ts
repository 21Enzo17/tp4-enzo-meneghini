export class Ticket {
    id: string;
    dni: string;
    precioReal: number;
    tipoEspectador: string;
    fechaCobro: Date;
    precioCobrado: number;

    constructor(id?: string, dni?: string, precioReal?: number, tipoEspectador?: string, fechaCobro?: Date, precioCobrado?: number) {
        this.id = id || '';
        this.dni = dni || '';
        this.precioReal = precioReal || 0;
        this.tipoEspectador = tipoEspectador || '';
        this.fechaCobro = fechaCobro || new Date();
        this.precioCobrado = precioCobrado || 0;
    }

}
