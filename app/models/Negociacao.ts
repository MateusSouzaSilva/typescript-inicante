export class Negociacao {

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
        ) {}

    public get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public get quantidade(): number {
        return this._quantidade
    }

    public get valor(): number {
        return this._valor
    }

    public get volume(): number {

        return this._quantidade * this._valor;
    }
}