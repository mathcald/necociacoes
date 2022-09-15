import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; // negociaçao[] é equivalente a Array<negociaçao>

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[] { // readonly Negociacao[] é equivalente a ReadonlyArray<negociaçao>
        return this.negociacoes;
    }
}
    
