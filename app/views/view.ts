export class View {
    protected elemento: HTMLElement; // o modificador protected dita que as classes filhas de View tem ACESSO as propriedades da classe

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: string): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    template(model: string): string {
        throw Error('A classe filha precisa implementar o método template')
    }
}