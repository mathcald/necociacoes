export class Negociacoes {
    constructor() {
        this.negociacoes = []; // negociaçao[] é equivalente a Array<negociaçao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
